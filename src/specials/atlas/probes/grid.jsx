import React from "react";
import PropTypes from "prop-types";

import { ProbeCircle } from "./probes";
import { probeStatusMap } from "../../../utils/probes";
import { SvgToolTip } from "../../../generic/tooltip";

/*
  ProbesGridSvg
  -------------

  Renders a grid of probes as circles, one for each probe.
  - Features a tooltip with some attributes of the probe
  - Has an extra boolean to indicate whether it was assigned to the msm
    (for parricipation requests), indicated in the viz with a green circle.

  Most important data-structure to pass in to this component
  is the array of probes to be rendered:

  pl:
       [
          // probe API output format
          [{
              address_v4: null,
              address_v6: null,
              asn_v4: 3333,
              asn_v6: 3333,
              country_code: "NL"
              geometry: {
                  coordinates:
                     [4.8975,52.3715]
              },
              id: 6009,
              is_anchor: null,
              is_public: null,
              prefix_v4: "193.0.0.0/21",
              prefix_v6: "2001:67c:2e8::/48",
              status: {
                 id: 1,
                 since: Tue Nov 27 2018 15:37:52 GMT+0100 (Central European Standard Time)
              }
          },         
          // bool indicating assigned/unassigned
          true
          ],
          [{...},<bool>],...
       ]

  requestedLength: used to display the line `n probes assigned / m rejected`
  (for participation requests). If null/undefined line will be omitted.
*/

const MAX_SHOW_PROBES = 200;

export class ProbesGridSvg extends React.Component {
  constructor(props) {
    super(props);
    const assignedLength = props.pl.filter(p => p[1]).length;
    this.probesOverviewSvg = React.createRef();
    this.state = {
      probeTooltip: null,
      assignedLength: assignedLength,
      notAssignedLength:
        props.requestedLength !== -1
          ? props.requestedLength - assignedLength
          : "unknown number",
      annotationField: props.probeAnnotationField
    };
  }

  showProbeToolTip = ({ d, p, i }) => {
    const fontSize = 10,
      marginHor = 1.2 * fontSize,
      point = {
        x: (i % this.props.cols) * this.props.cellWidth + this.props.r + 4,
        y: Math.floor(i / this.props.cols) * this.props.cellHeight
      };

    let textLines = [
      `probe is ${(!p[1] && "not ") || ""}assigned`,
      "",
      (this.props.msmStatus === "Stopped" && "historical status") ||
        "current status",
      `${(p[0].status && probeStatusMap(p[0].status.id)) || "abandoned"}`
    ];
    if (p[0].status) {
      textLines = textLines.concat([
        `country ${p[0].country_code || "none"}`,
        "",
        "IP Addresses",
        `${p[0].address_v4 || ""}`,
        `${p[0].address_v6 || "no IPv6 address"}`,
        "",
        `Autonomous System`,
        `ASN${p[0].asn_v4 || p[0].asn_v6 || "-"}`,
        "",
        `anchor ${(p[0].is_anchor && "yes") || "no"}`
      ]);
    }
    this.setState({
      probeTooltip: (
        <SvgToolTip
          header={`PROBE ID${p[0].id}`}
          x={point.x}
          y={point.y}
          dy={-15}
          fontsize={fontSize}
          minwidth={180}
          extraHeight={0 + marginHor}
          positionRelativeToPointer="top"
          zoomFactor={1}
          textlines={textLines}
        />
      )
    });
  };

  hideProbeToolTip = d => {
    this.setState({
      probeTooltip: null
    });
  };

  render() {
    return (
      <>
        {this.props.requestedLength && (
          <p>
            {`${this.state.assignedLength} probe${(this.state.assignedLength >
              1 &&
              "s") ||
              ""} assigned / ${this.state.notAssignedLength ||
              "none"} rejected`}
          </p>
        )}
        {this.state.assignedLength > MAX_SHOW_PROBES && (
          <p>{`Showing ${MAX_SHOW_PROBES} probes`}</p>
        )}
        <svg
          key={`pr_svg_${this.props.rI}`}
          width={`${this.props.cols * this.props.cellWidth}px`}
          height={`${(Math.floor(
            (this.props.pl.slice(0, MAX_SHOW_PROBES).length - 1) /
              this.props.cols
          ) +
            1) *
            this.props.cellHeight}px`}
          style={{ overflow: "visible", flexBasis: "100%" }}
          ref={this.probesOverviewSvg}
        >
          {this.props.pl.slice(0, MAX_SHOW_PROBES).map((p, i) => {
            const thisTotalU = i;
            return (
              <ProbeCircle
                title={`probe ${p[0].id}`}
                key={`pc_probe_${p[0].id}`}
                primaryKey={p[0].id}
                lengthInUnits={1}
                divsInUnits={this.props.pl.map(v => [v, (p[1] && 4) || 1])}
                unitSize={[this.props.cellWidth, this.props.cellHeight]}
                widthInUnits={this.props.cols}
                r={this.props.r}
                i={i}
                unitStart={[
                  thisTotalU % this.props.cols,
                  Math.floor(thisTotalU / this.props.cols)
                ]}
                borderWidth={1}
                text={p[0].country_code}
                colorize={true}
                isAssigned={p[1]}
                isAnchor={p[0].is_anchor}
                annotation={
                  this.props.showProbeAnnotation &&
                  p[0][this.props.annotationField]
                }
                connectionStatus={(p[0].status && p[0].status.id) || 3}
                showToolTip={d => this.showProbeToolTip({ d, p, i })}
                hideToolTip={d => this.hideProbeToolTip({ d, p })}
              />
            );
          })}
          {this.state.probeTooltip}
        </svg>
        {this.props.pl.length > MAX_SHOW_PROBES && (
          <div>{`...and ${this.props.pl.length -
            MAX_SHOW_PROBES} more assigned probes`}</div>
        )}
      </>
    );
  }
}

ProbesGridSvg.propTypes = {
  pl: PropTypes.array.isRequired,
  requestedLength: PropTypes.number,
  r: PropTypes.number,
  rI: PropTypes.number,
  cols: PropTypes.number.isRequired,
  cellWidth: PropTypes.number.isRequired,
  cellHeight: PropTypes.number.isRequired,
  annotationField: PropTypes.string.isRequired,
  showProbeAnnotation: PropTypes.bool,
  // the msm status name, used to indicate whether the status is historical or current.
  status: PropTypes.string
};

ProbesGridSvg.defaultProps = {
  r: 19,
  rI: 1,
  cols: 9,
  cellWidth: 42,
  cellHeight: 42 + 14, // this.props.showProbeAnnotation && 14
  annotationField: "id",
  showProbeAnnotation: true
};

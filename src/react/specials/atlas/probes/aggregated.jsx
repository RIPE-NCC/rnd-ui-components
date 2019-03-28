import React from "react";
import PropTypes from "prop-types";

import { ProbeCircle } from "./probes";
import { SvgToolTip } from "../../../generic/tooltip";
import { ThumbBar } from "../../thumbbars";

/*
  AggregatedProbesSvg
  -------------------

  Renders a seried of head-to-tails bars with two degrees of aggregation.
  The primary aggregation determines the size of each bar, and the secondary
  aggregation determines the number of color within each bar.
  - Each bar is annotated with the identifier of the primary aggregation
  - A tooltip shows the breakdown of the secondaty aggregation with a thumbbar

 */

// The main data-structures to be passed in to this component:
//
// aggregatedProbes:
// {
//     GB:
//     { 3333: [87],
//     NL:
//     { 1103: [104],
//       3333: [104, 6001, 6007, 6009]
//     },
//     US:
//     {…}
// }

// aggregatorFields:
//
// [
//     {
//         fieldName: "country_code"
//         shortName: "country"
//         shortNameMultiple: "countries"
//     },
//     {
//         fieldName: "asn_v4"
//         prefix: "AS"
//         shortName: "as"
//         shortNameMultiple: "autonomous systems"
//      }
// ]

let nextColor = id => {
  if (typeof id === "string") {
    id = parseInt(`${id.charCodeAt(0)}${id.charCodeAt(1)}`);
  }
  return [
    "#66c2a5",
    "#fc8d62",
    "#8da0cb",
    "#e78ac3",
    "#a6d854",
    "#ffd92f",
    "#e5c494"
  ][id % 7];
};

const cursorPoint = ({ svg, x, y }) => {
  // x and y should be clientX,Y props of the mouse event.
  const p = svg.createSVGPoint();
  p.x = x;
  p.y = y;
  return p.matrixTransform(svg.getScreenCTM().inverse());
};

export class AggregatedProbesSvg extends React.Component {
  constructor(props) {
    super(props);

    // for use with createSVGPoint()
    // used to show the tooltips.
    this.participatingProbesSvg = React.createRef();

    this.state = {
      tooltip: null
    };
  }

  showToolTip = d => {
    const fontSize = 10,
      lineHeight = fontSize + 2,
      marginHor = 1.2 * fontSize,
      dx = 3.5 + 1.5 * marginHor,
      dy = 6 * lineHeight,
      thisProbes = this.props.aggregatedProbes[d.primaryKey],
      attrString = this.props.aggregatorFields[1].shortNameMultiple,
      asDistribution =
        Object.entries(thisProbes)
          .map(asD => ({
            // wtf "null"?
            as: (asD[0] !== "null" && asD[0]) || "unknown",
            count: { p: asD[1].length }
          }))
          .sort((a, b) => b.count.p - a.count.p) || [],
      moreNumber =
        asDistribution.slice(11).length && asDistribution.slice(11).length + 1,
      largestBarValue = 100,
      point = cursorPoint({
        svg: this.participatingProbesSvg.current,
        x: d.x,
        y: d.y
      });
    this.setState({
      tooltip: (
        <SvgToolTip
          header={"PARTICIPATING PROBES"}
          x={point.x}
          y={point.y}
          dy={-35}
          fontsize={fontSize}
          minwidth={165}
          extraHeight={180 + marginHor + ((moreNumber && 20) || 0)}
          positionRelativeToPointer="top"
          zoomFactor={1}
          textlines={[
            `${this.props.aggregatorFields[0].shortName} ${d.primaryKey}`,
            `total probes : ${Object.values(thisProbes).reduce(
              (acc, next) => acc + next.length,
              0
            )}`,
            `total ${attrString} : ${Object.keys(thisProbes).length}`
          ]}
        >
          <ThumbBar
            dy={dy}
            bars={asDistribution.slice(0, 10)}
            //height={1}
            width={160 + marginHor}
            margin={marginHor}
            largestBarValue={largestBarValue}
            secondaryKeyPrefix={this.props.aggregatorFields[1].prefix || ""}
            minBarHeight={1}
            countAttributes={[
              //{ attr: "t", color: "#FF0050" },
              { attr: "p", color: p => nextColor(p) }
            ]}
          />
          {moreNumber && (
            <text transform={`translate(${marginHor}  274)`}>
              and {moreNumber} more...
            </text>
          )}
        </SvgToolTip>
      )
    });
  };

  hideToolTip = (d, i) => {
    this.setState({
      tooltip: null
    });
  };

  render() {
    const { cellWidth, cellHeight, r, cols } = this.props;
    let totalLengthUnits = 0;

    return (
      <svg
        width={`${Math.min(
          cols * cellWidth,
          this.props.probesNum * cellWidth
        )}px`}
        height={`${(Math.floor(
          (this.props.probesNum && this.props.probesNum) || 0
        ) /
          cols) *
          cellHeight +
          4 * r}px`}
        style={{ overflow: "visible" }}
        ref={this.participatingProbesSvg}
      >
        {Object.entries(this.props.aggregatedProbes).map(
          ([primaryKey, probesSet], i) => {
            const thisTotalU = totalLengthUnits,
              lengthUnits = Object.entries(probesSet).flatMap(ps => ps[1])
                .length;
            totalLengthUnits += lengthUnits;
            return (
              <ProbeCircle
                key={`pc_probe_${primaryKey}`}
                primaryKey={primaryKey}
                lengthInUnits={lengthUnits}
                divsInUnits={Object.entries(probesSet).map(v => [
                  v[1].length,
                  v[0]
                ])}
                unitSize={[cellWidth, cellHeight]}
                widthInUnits={cols}
                r={r}
                i={i}
                unitStart={[thisTotalU % cols, Math.floor(thisTotalU / cols)]}
                text={
                  (primaryKey !== "null" &&
                    `${(lengthUnits > 1 &&
                      this.props.aggregatorFields[0].prefix) ||
                      ""}${primaryKey}`) ||
                  "?"
                }
                colorize={true}
                showToolTip={this.showToolTip}
                hideToolTip={this.hideToolTip}
              />
            );
          }
        )}
        {this.state.tooltip}
      </svg>
    );
  }
}

AggregatedProbesSvg.propTypes = {
  aggregatedProbes: PropTypes.object.isRequired, // see commment on top of this component
  aggregatorFields: PropTypes.array.isRequired,
  cols: PropTypes.number.isRequired,
  cellWidth: PropTypes.number.isRequired,
  cellHeight: PropTypes.number.isRequired
};

AggregatedProbesSvg.defaultProps = {
  r: 10,
  cols: 9,
  cellWidth: 32,
  cellHeight: 26
};

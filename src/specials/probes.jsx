import React from "react";
import styled from "styled-components";
import { oimAntracite, oimClouds, oimSilver } from "../themes/colors";

let nextColor = id => {
  if (typeof id === "string") {
    id = parseInt(`${id.charCodeAt(0)}${id.charCodeAt(1)}`);
  }
  return ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494"][
    id % 7
  ];
}

export const StyledProbeSetCircle = styled.g`
  stroke: ${ oimSilver};
    stroke-width: 1px;
    stroke-opacity: ${props => (props.colorize && 1.0) || 0.3};
    fill-opacity: ${props => (props.colorize && 0.5) || 1.0};

    text {
      font-size: 0.8em;
      stroke: none;
      fill: black;
      fill-opacity: 1;
    }
  } `

const ColoredClosedPath = styled.path`
  fill: ${ props => props.color || oimClouds};
  stroke: none;
  /* stroke-width: 1px; */
}
`;

export class ProbeCircle extends React.Component {
  render() {
    let xUnitsEnd =
      (this.props.unitStart[0] + this.props.lengthInUnits) %
      this.props.widthInUnits;
    let wrapAround = Math.floor(
      (this.props.unitStart[0] + this.props.lengthInUnits) /
      this.props.widthInUnits
    );

    if (xUnitsEnd === 0 && wrapAround > 0) {
      xUnitsEnd = this.props.unitStart[0] + this.props.lengthInUnits;
      wrapAround -= 1;
    }

    const x =
      (this.props.unitStart[0] % this.props.widthInUnits) *
      this.props.unitSize[0],
      y = this.props.unitStart[1] * this.props.unitSize[1] + this.props.r + 2,
      r = this.props.r,
      margin = r + 4,
      microM = 2,
      xMax = this.props.widthInUnits * this.props.unitSize[0] + r + microM,
      xMin = 0,
      xEnd = xUnitsEnd * this.props.unitSize[0] - r,
      yEnd =
        (this.props.unitStart[1] + wrapAround) * this.props.unitSize[1] +
        r +
        microM;

    return (
      <StyledProbeSetCircle {...this.props}
        onMouseEnter={e => {
          this.props.showToolTip({ primaryKey: this.props.primaryKey, x: e.clientX, y: e.clientY });
        }}

        onMouseLeave={e => this.props.hideToolTip()}>
        >
        <path
          id={`path${this.props.i} `}
          d={`M${margin + x}, ${y - r} A ${0.5 * r} ${0.5 * r} 0 0 0 ${
            margin +
            x
            } ${y + r} `}
          style={{ fill: nextColor(this.props.divsInUnits[0][1]) }}
        />
        <path
          d={`M${xEnd}, ${yEnd - r} A ${0.5 * r} ${
            0.5 *
            r
            } 0 0 1 ${xEnd} ${yEnd + r} `}
          style={{ fill: nextColor(this.props.divsInUnits[this.props.divsInUnits.length - 1][1]) }}
        />
        {Array(wrapAround + 1)
          .fill(true)
          .map((l, i) => {
            const itsAWrap = wrapAround > 0 && i < wrapAround,
              wasAWrap = wrapAround > 0 && i === wrapAround,
              stillAWrap = wrapAround > 0 && i > 0 && i < wrapAround,
              x2 = wasAWrap || stillAWrap ? xMin + 2 * microM : x + margin;

            let divX = x2;
            return [
              this.props.divsInUnits.reduce(([divs, divSum], d) => {
                const newDiv = this.props.unitStart[0] + divSum;
                if (
                  // aggregate starts & ends in this row.
                  (this.props.widthInUnits * i <= newDiv && newDiv < this.props.widthInUnits * (i + 1))) {
                  divs = [...divs, [d[0], d[1]]];
                }
                else if
                // starts on an row up & ends at a row down this one
                ((this.props.widthInUnits * i >= newDiv && (newDiv + d[0]) >= this.props.widthInUnits * (i + 1))) {
                  divs = [...divs, [d[0], d[1]]];
                }
                else if
                // starts on a row up & ends in this row
                ((this.props.widthInUnits * i >= newDiv && (newDiv + d[0]) < this.props.widthInUnits * (i + 1) && (newDiv + d[0]) > this.props.widthInUnits * i)
                ) {
                  divs = [...divs, [((newDiv + d[0]) % this.props.widthInUnits), d[1]]];
                }
                return [divs, divSum + d[0]]
              }, [[], 0])[0].map((d, ii, arr) => {
                const divXf = divX;
                let xWidth, xLast;

                xWidth = d[0] * (((this.props.lengthInUnits) * this.props.unitSize[0] - 2 * r - 2 * microM) / this.props.lengthInUnits);

                // Sort of ugly, would like to refactor this.
                // If this is the last sub-aggregation in a aggegrate then forcibly draw it al the way
                // to the beginning of the arc path that closes the aggregate component.
                if (!((arr.length - 1) === ii)) { xLast = xWidth + divX; } else {
                  xLast = (itsAWrap && xMax) || xEnd;
                }
                divX += xWidth;

                return <ColoredClosedPath color={nextColor(d[1])} d={`M ${divXf} ${y - r + i * this.props.unitSize[1]} H ${xLast} V ${y + r + i * this.props.unitSize[1]} H ${divXf} Z`} />
              }),
              <line
                x1={(itsAWrap && xMax) || xEnd}
                y1={y + r + i * this.props.unitSize[1]}
                x2={x2}
                y2={y + r + i * this.props.unitSize[1]}
              />,
              <line
                x1={(itsAWrap && xMax) || xEnd}
                y1={y - r + i * this.props.unitSize[1]}
                x2={x2}
                y2={y - r + i * this.props.unitSize[1]}
              />
            ];
          })}
        {(this.props.lengthInUnits > 1 || this.props.text.length < 3) && (
          <text x={0.5 * margin + x + 2 * microM} y={y + 2 * microM}>
            {this.props.text}
          </text>
        )}
      </StyledProbeSetCircle>
    );
  }
}

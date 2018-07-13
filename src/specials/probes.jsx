import React from "react";
import styled from "styled-components";
import { oimAntracite, oimClouds } from "../themes/colors";

let nextColor = id =>
  ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494"][
    id % 7
  ];

export const StyledProbeSetCircle = styled.g`
  stroke: ${props => (props.colorize && nextColor(props.i)) || oimAntracite};
  stroke-width: 1px;
  fill: ${props => (props.colorize && nextColor(props.i)) || oimClouds};
  stroke-opacity: ${props => (props.colorize && 1.0) || 0.3};
  fill-opacity: ${props => (props.colorize && 0.3) || 1.0};

  text {
    font-size: 0.8em;
    stroke: none;
    fill: black;
    fill-opacity: 1;
  }
  rect {
    fill: ${props => (props.colorize && nextColor(props.i)) || oimClouds};
    stroke: none;
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
      <StyledProbeSetCircle {...this.props}>
        <path
          id={`path${this.props.i}`}
          d={`M${margin + x},${y - r} A ${0.5 * r} ${0.5 * r} 0 0 0 ${margin +
            x} ${y + r}`}
        />
        <path
          d={`M${xEnd},${yEnd - r} A ${0.5 * r} ${0.5 *
            r} 0 0 1 ${xEnd} ${yEnd + r}`}
        />
        {Array(wrapAround + 1)
          .fill(true)
          .map((l, i) => {
            const itsAWrap = wrapAround > 0 && i < wrapAround,
              wasAWrap = wrapAround > 0 && i === wrapAround,
              stillAWrap = wrapAround > 0 && i > 0 && i < wrapAround,
              x2 = wasAWrap || stillAWrap ? xMin + 2 * microM : x + margin;
            return [
              <rect
                x={x2}
                y={y - r + i * this.props.unitSize[1]}
                width={((itsAWrap && xMax) || xEnd) - x2}
                height={2 * r}
              />,
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

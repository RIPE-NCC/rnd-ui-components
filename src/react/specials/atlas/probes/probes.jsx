import React from "react";
import styled from "styled-components";
import { atlasGreen, oimClouds, oimSilver, atlasRed } from "../../../../themes/colors";

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

export const StyledProbeSetCircle = styled.g`
  stroke: ${props =>
    (typeof props.isAssigned === "boolean" && props.isAssigned && atlasGreen) ||
    (typeof props.isAssigned === "boolean" && atlasRed) ||
    oimSilver};
  stroke-width: ${props =>
    (props.borderWidth && `${props.borderWidth}px`) || "1px"};
  stroke-opacity: ${props => (props.colorize && 1.0) || 0.3};
  fill-opacity: ${props => (props.colorize && 0.5) || 1.0};
`;

const FlexText = styled.text`
  font-size: ${props =>
    ((props.lengthInUnits > 1 || (props.text && props.text.length < 3)) &&
      "0.8em") ||
    "0.6em"};
  transform: ${props =>
    (props.lengthInUnits === 1 &&
      props.text &&
      props.text &&
      props.text.length > 2 &&
      `translate(${-2.5 * (props.text.length - 3)}px,-1px)`) ||
    ""};
  cursor: default;
  stroke: none;
  fill-opacity: 1;
  /* fill: ${oimClouds}; */
    fill: black;
  /* fill: ${props => (props.lengthInUnits === 1 && "white") || "black"}; */
`;

const FirstPath = styled.path`
  fill: ${props =>
    // (props.isAssigned && atlasGreen) ||
    // (props.isAssigned === false && "white") ||
    (typeof props.isAssigned === "boolean" && "white") ||
    nextColor(props.divsInUnits[0][1])};
  stroke-width: ${props =>
    (typeof props.isAssigned === "boolean" && !props.isAssigned && "2px") ||
    "1px"};
`;

const SecondPath = styled.path`
  fill: ${props =>
    // (props.isAssigned && atlasGreen) ||
    // (props.isAssigned === false && "white") ||
    (typeof props.isAssigned === "boolean" && "white") ||
    nextColor(props.divsInUnits[props.divsInUnits.length - 1][1])};
  stroke-width: ${props =>
    (typeof props.isAssigned === "boolean" && !props.isAssigned && "2px") ||
    "1px"};
`;

const ColoredClosedPath = styled.path`
  fill: ${props =>
    // (props.isAssigned && atlasGreen) ||
    // (props.isAssigned === false && "white") ||
    (typeof props.isAssigned === "boolean" && "none") ||
    props.color ||
    oimClouds};
  stroke: none;
`;

const StyledCurrentStatusCircle = styled.g`
  stroke-opacity: 0.7;

  circle {
    stroke: ${props =>
      (props.connectionStatus === 3 && atlasRed) || atlasGreen};
    stroke-width: ${props =>
      (props.connectionStatus === 1 && `${props.borderWidth * 3}px`) ||
      "0.5px"};
    fill: none;
    border: none;
  }

  line {
    stroke: ${props =>
      (props.connectionStatus === 1 && atlasGreen) || atlasRed};
  }
`;

const StyledAnnotationText = styled.text`
  text-anchor: middle;
  font-size: 0.7em;
  stroke: none;
  fill: black;
  fill-opacity: 1;
`;

export class CurrentStatusCircle extends React.Component {
  render() {
    const r = this.props.r - 4 * (this.props.borderWidth || 3);
    const coords = { cx: this.props.cx, cy: this.props.cy };
    return (
      <StyledCurrentStatusCircle
        borderWidth={this.props.borderWidth}
        connectionStatus={this.props.connectionStatus}
      >
        {this.props.connectionStatus === 3 && (
          <line
            // key={`cross_${i}_0`}
            x1={this.props.cx}
            y1={this.props.cy - r + 2}
            x2={this.props.cx}
            y2={this.props.cy + r - 2}
            style={{
              transformOrigin: `${this.props.cx}px ${this.props.cy}px`,
              transform: "rotate(45deg)"
            }}
          />
        )}
        {this.props.connectionStatus === 3 && (
          <line
            x1={this.props.cx}
            y1={this.props.cy - r + 2}
            x2={this.props.cx}
            y2={this.props.cy + r - 2}
            style={{
              transformOrigin: `${this.props.cx}px ${this.props.cy}px`,
              transform: "rotate(-45deg)"
            }}
          />
        )}
        <circle
          {...coords}
          r={r + ((this.props.connectionStatus !== 1 && 1) || 0)}
        />
        {/* // double inner circle for non-filled circles. */}
        {this.props.connectionStatus !== 1 && <circle {...coords} r={r - 2} />}
      </StyledCurrentStatusCircle>
    );
  }
}

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
      <StyledProbeSetCircle
        {...this.props}
        onMouseEnter={e => {
          this.props.showToolTip({
            primaryKey: this.props.primaryKey,
            x: e.clientX,
            y: e.clientY
          });
        }}
        onMouseLeave={e => this.props.hideToolTip()}
      >
        <FirstPath
          {...this.props}
          key="p_0"
          id={`path${this.props.i} `}
          d={`M${margin + x}, ${y - r} A ${0.5 * r} ${0.5 * r} 0 0 0 ${margin +
            x} ${y + r} `}
        />
        <SecondPath
          {...this.props}
          key="p_1"
          d={`M${xEnd}, ${yEnd - r} A ${0.5 * r} ${0.5 *
            r} 0 0 1 ${xEnd} ${yEnd + r} `}
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
              this.props.divsInUnits
                .reduce(
                  ([divs, divSum], d) => {
                    const newDiv = this.props.unitStart[0] + divSum;
                    if (
                      // aggregate starts & ends in this row.
                      this.props.widthInUnits * i <= newDiv &&
                      newDiv < this.props.widthInUnits * (i + 1)
                    ) {
                      divs = [...divs, [d[0], d[1]]];
                    } else if (
                      // starts on an row up & ends at a row down this one
                      this.props.widthInUnits * i >= newDiv &&
                      newDiv + d[0] >= this.props.widthInUnits * (i + 1)
                    ) {
                      divs = [...divs, [d[0], d[1]]];
                    } else if (
                      // starts on a row up & ends in this row
                      this.props.widthInUnits * i >= newDiv &&
                      newDiv + d[0] < this.props.widthInUnits * (i + 1) &&
                      newDiv + d[0] > this.props.widthInUnits * i
                    ) {
                      divs = [
                        ...divs,
                        [(newDiv + d[0]) % this.props.widthInUnits, d[1]]
                      ];
                    }
                    return [divs, divSum + d[0]];
                  },
                  [[], 0]
                )[0]
                .map((d, ii, arr) => {
                  const divXf = divX;
                  let xWidth, xLast;

                  xWidth =
                    d[0] *
                    ((this.props.lengthInUnits * this.props.unitSize[0] -
                      2 * r -
                      2 * microM) /
                      this.props.lengthInUnits);

                  // Sort of ugly, would like to refactor this.
                  // If this is the last sub-aggregation in a aggegrate then forcibly draw it al the way
                  // to the beginning of the arc path that closes the aggregate component.
                  if (!(arr.length - 1 === ii)) {
                    xLast = xWidth + divX;
                  } else {
                    xLast = (itsAWrap && xMax) || xEnd;
                  }
                  divX += xWidth;

                  return (
                    <ColoredClosedPath
                      {...this.props}
                      key={`pp_${ii}`}
                      color={nextColor(d[1])}
                      d={`M ${divXf} ${y -
                        r +
                        i * this.props.unitSize[1]} H ${xLast} V ${y +
                        r +
                        i * this.props.unitSize[1]} H ${divXf} Z`}
                    />
                  );
                }),
              // dividers in aggregation bars
              <line
                key={`l_${i}`}
                x1={(itsAWrap && xMax) || xEnd}
                y1={y + r + i * this.props.unitSize[1]}
                x2={x2}
                y2={y + r + i * this.props.unitSize[1]}
              />,
              <line
                key={`ll_${i}`}
                x1={(itsAWrap && xMax) || xEnd}
                y1={y - r + i * this.props.unitSize[1]}
                x2={x2}
                y2={y - r + i * this.props.unitSize[1]}
              />,
              typeof this.props.isAssigned === "boolean" && (
                <CurrentStatusCircle
                  key={`csc_${i}`}
                  borderWidth={this.props.borderWidth}
                  isAssigned={this.props.isAssigned}
                  connectionStatus={this.props.connectionStatus}
                  cx={(itsAWrap && xMax) || xEnd}
                  cy={y + i * this.props.unitSize[1]}
                  r={r}
                />
              ),
              this.props.isAnchor && (
                <circle
                  key={`oc_${i}`}
                  cx={(itsAWrap && xMax) || xEnd}
                  cy={y + i * this.props.unitSize[1]}
                  r={r - 8}
                  style={{
                    stroke: "#a2cade",
                    strokeWidth: "3px",
                    fill: "none"
                  }}
                />
              ),
              this.props.annotation && (
                <StyledAnnotationText
                  key={`anno_${i}`}
                  x={(itsAWrap && xMax) || xEnd}
                  y={y + i * this.props.unitSize[1] + r + 12}
                  style={{ textAnchor: "middle" }}
                >
                  {this.props.annotation}
                </StyledAnnotationText>
              )
            ];
          })}
        {(this.props.lengthInUnits > 0 || this.props.text.length < 3) && (
          <FlexText
            {...this.props}
            x={0.5 * margin + x + 2 * microM}
            y={y + 2 * microM}
            key="t_0"
          >
            {this.props.text}
          </FlexText>
        )}
      </StyledProbeSetCircle>
    );
  }
}

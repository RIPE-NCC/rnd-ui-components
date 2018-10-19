import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { jediAntracite, lColor } from "../themes/colors";

const StyledToolTip = styled.div`
  font-size: 12px;
  font-weight: 100;
  font-family: "Open Sans", Helvetica, Arial, "sans-serif";
  font-style: normal;
  //transform: translate(3 0 0);
  fill: white;
  stroke: none;
  cursor: default;
  display: none;
  position: absolute;
  max-width: ${props => (props.width && `${props.width}px`) || "100px"};
  overflow: hidden;
  white-space: normal;
  color: white;
  //transform: translateX(100px);
  transform: ${props => `translateX(${-props.width / 4}px)`};
  transform: ${props => `translateY(${-props.height}px)`};

  padding: 9px;

  background-color: ${jediAntracite};
  border-radius: 4px;

  opacity: 1;

  .tooltip-header {
    font-weight: regular;
    color: white;
  }

  .tooltip-subheader {
    color: ${lColor};
  }
`;

export class ToolTip extends React.Component {
  render() {
    return (
      <StyledToolTip
        className="ripe-rnd-tooltip"
        width={this.props.width}
        height={this.props.height}
      >
        {this.props.children}
      </StyledToolTip>
    );
  }
}

const StyledSvgToolTip = styled.g`
  text {
    font-size: 0.7em;
    font-weight: 100;
    font-family: "Open Sans", Helvetica, Arial, "sans-serif";
    transform: translate(3 0 0);
    fill: white;
    stroke: none;
    cursor: default;
  }

  text.tooltip-header {
    font-weight: regular;
    fill: white;
  }

  text.tooltip-subheader {
    fill: ${lColor};
    stroke: none;
  }

  rect.tooltip-bg {
    fill: ${jediAntracite};
    stroke: ${jediAntracite};
    stroke-width: 1;
    opacity: 1;
  }

  polyline {
    fill: ${jediAntracite};
    stroke: none;
  }
`;

const StyledSvgText = styled.text`
  font-size: 5;
`;

export class SvgToolTip extends React.Component {
  constructor(props) {
    super(props);
    let width = Math.max(
      this.props.minwidth,
      this.props.header.length * this.props.fontsize * 0.7
    );
    this.margin = 1.2 * this.props.fontsize;
    this.state = {
      width: width
    };
  }

  render() {
    let width = Math.max(
      this.props.minwidth,
      this.props.header.length * this.props.fontsize * 0.7
    );
    const numTextLines = this.props.textlines.reduce((acc, t) => {
        width = Math.max(
          width,
          ((typeof t === "string" && t.length) ||
            ((t.content && t.content.length) || 0)) *
            (this.props.fontsize * 0.7)
        );
        return acc + ((typeof t === "object" && 3) || 1);
      }, 1),
      lineHeight = this.props.fontsize + 2,
      height = numTextLines * lineHeight + 2 * this.margin,
      posYFactor = ["bottom", "top", "mid"].indexOf(
        this.props.positionRelativeToPointer
      ),
      posXTrans =
        (this.props.positionRelativeToPointer === "top" &&
          -this.props.minwidth / 2) ||
        0,
      x = this.props.x + posXTrans + this.props.dx / this.props.zoomFactor,
      y =
        this.props.y +
        (this.props.dy - (height + this.props.extraHeight)) /
          (posYFactor * this.props.zoomFactor);
    console.log(posYFactor);

    //this.y = this.props.y - height;
    //x = this.props.x;
    let curLine = numTextLines;
    return (
      <StyledSvgToolTip
        className="ripe-rnd-tooltip"
        // a c dx = 1 0 dx
        // b d dy = 0 1 dy
        transform={`matrix(${1 / this.props.zoomFactor} 0 0 ${1 /
          this.props.zoomFactor} ${x} ${y})`}
      >
        <rect
          className="tooltip-bg"
          width={Math.max(
            2 * this.margin + this.state.width,
            this.props.minwidth
          )}
          height={height + this.props.extraHeight}
          y="0"
          x="0"
          rx="4"
          ry="4"
        />
        <text
          className="tooltip-header"
          x={this.margin}
          y={height - numTextLines * lineHeight - 6}
        >
          {this.props.header}
        </text>
        {this.props.textlines.map((child, i) => {
          if (typeof child === "string") {
            curLine -= 1;
            return (
              <text
                x={this.margin}
                y={height - curLine * lineHeight}
                key={`tt_s${child.id} _${i} `}
              >
                {child}
              </text>
            );
          }
          curLine -= 3;
          return [
            <StyledSvgText
              className="tooltip-subheader"
              x={this.margin}
              y={height - (curLine + 1) * lineHeight}
              key={`tt_h${child.id} _${i} `}
            >
              {child.header}
            </StyledSvgText>,
            <StyledSvgText
              x={this.margin}
              y={height - curLine * lineHeight}
              textAnchor="start"
              key={`tt_c${child.id} _${i} `}
            >
              {child.content}
            </StyledSvgText>
          ];
        })}
        {/* the triangle */}
        {(this.props.positionRelativeToPointer === "top" && (
          <polyline
            points={`${this.props.minwidth/2 - this.margin}, ${height +
              this.props.extraHeight},
            ${this.props.minwidth/2}, ${height +
              this.props.extraHeight +
              this.margin},
            ${this.props.minwidth/2 + this.margin}, ${height +
              this.props.extraHeight}
            `}
          />
        )) || (
          <polyline
            points={`0, ${-this.props.dy +
              height / 2 -
              this.margin / Math.sqrt(2)} ${-this.margin}, ${0 +
              height / 2 -
              this.props.dy} 0, ${-this.props.dy +
              height / 2 +
              this.margin / Math.sqrt(2)} `}
          />
        )}
        {this.props.children}
      </StyledSvgToolTip>
    );
  }
}

SvgToolTip.propTypes = {
  // (x,y) describes the upper left corner of the tooltip window
  // (dx,dy) describes the offset of the tooltip from the user's pointer
  dx: PropTypes.number,
  dy: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  extraHeight: PropTypes.number, // include extra space for embedded elements (e.g. svg)
  header: PropTypes.string,
  textlines: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ),
  fontsize: PropTypes.number,
  minwidth: PropTypes.number,
  zoomFactor: PropTypes.number,
  positionRelativeToPointer: PropTypes.string
};

SvgToolTip.defaultProps = {
  zoomFactor: 1,
  fontsize: 10,
  dx: 0,
  dy: 0,
  extraHeight: 0,
  minwidth: 165,
  positionRelativeToPointer: "mid"
};

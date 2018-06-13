import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { jediAntracite, lColor } from "../themes/colors";

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
    // this.numTextLines = this.props.textlines.reduce((acc, t) => {
    //   width = Math.max(
    //     width,
    //     ((typeof t === "string" && t.length) ||
    //       ((t.content && t.content.length) || 0)) *
    //       (this.props.fontsize * 0.7)
    //   );
    //   return acc + ((typeof t === "object" && 3) || 1);
    // }, 1);
    this.margin = 1.2 * this.props.fontsize;
    // this.lineHeight = this.props.fontsize + 2;
    // this.height = this.numTextLines * this.lineHeight + 2 * this.margin;
    // this.y = this.props.y - this.height;
    // this.x = this.props.x;

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
      height = numTextLines * lineHeight + 2 * this.margin;
    //this.y = this.props.y - height;
    //x = this.props.x;
    let curLine = numTextLines;
    return (
      <StyledSvgToolTip
        className="tooltip"
        // a b dx = 1 0 dx
        // c d dy = 0 1 dy
        transform={`matrix(${1 / this.props.zoomFactor} 0 0 ${1 /
          this.props.zoomFactor} ${this.props.x +
          this.props.dx / this.props.zoomFactor} ${this.props.y -
          height / (2 * this.props.zoomFactor)})`}
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
        <polyline
          points={`0, ${-this.props.dy +
            height / 2 -
            this.margin / Math.sqrt(2)} ${-this.margin}, ${0 +
            height / 2 -
            this.props.dy} 0, ${-this.props.dy +
            height / 2 +
            this.margin / Math.sqrt(2)} `}
        />
        {this.props.children}
      </StyledSvgToolTip>
    );
  }
}

SvgToolTip.propTypes = {
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
  zoomFactor: PropTypes.number
};

SvgToolTip.defaultProps = {
  zoomFactor: 1,
  fontsize: 10,
  dx: 0,
  dy: 0,
  extraHeight: 0
};

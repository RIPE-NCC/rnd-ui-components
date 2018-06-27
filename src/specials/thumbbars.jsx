import React from "react";
import PropTypes from "prop-types";

export class ThumbBar extends React.Component {
  render() {
    const m = 2,
      barWidth = this.props.width / this.props.bars.length - m,
      unitHeight = this.props.height / this.props.largestBarValue;
    return (
      <svg
        width={this.props.width}
        height={this.props.height}
        style={{ overflow: "visible" }}
      >
        {this.props.bars.map((b, idx) => (
          <g
            transform={`matrix(0 1 1 0 ${this.props.margin +
              this.props.barTextMargin} ${this.props.dy})`}
            key={`bar_${idx}`}
          >
            {/* <rect
              x="0"
              y="0"
              height={this.props.height}
              width={this.props.width}
              style={{ fill: "none", strokeWidth: 1, stroke: "red" }}
            /> */}
            {this.props.countAttributes.map(attr => (
              <g key={`attr_${attr.attr}`}>
                <rect
                  x={idx * (m + barWidth)}
                  y="0"
                  style={{ fill: attr.color }}
                  height={
                    (b.count[attr.attr] &&
                      Math.max(unitHeight * b.count[attr.attr], this.props.barMinHeight)) ||
                    0
                  }
                  width={barWidth}
                />
                <text
                  transform={`matrix(0 1 1 0 ${idx * (m + barWidth) +
                    barWidth * 0.5 +
                    2 * m} ${-this.props.barTextMargin})`}
                  x="0"
                  y="0"
                >
                  AS{b.as}
                </text>
              </g>
            ))}
          </g>
        ))}
      </svg>
    );
  }
}

ThumbBar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  dy: PropTypes.number,
  margin: PropTypes.number,
  bars: PropTypes.array.isRequired,
  barTextMargin: PropTypes.number,
  barMinHeight: PropTypes.number,
  largestBarValue: PropTypes.number.isRequired,
  countAttributes: PropTypes.array.isRequired
};

ThumbBar.defaultProps = {
  width: 200,
  height: 100,
  margin: 0,
  barMinHeight: 1,
  dy: 0,
  barTextMargin: 60
};

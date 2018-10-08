import React from "react";
import styled from "styled-components";

const StyledLegend = styled.svg`
  transform: scale(0.45);

  .cls-1,
  .cls-10,
  .cls-11,
  .cls-12,
  .cls-13,
  .cls-14,
  .cls-3,
  .cls-4,
  .cls-5,
  .cls-6,
  .cls-7,
  .cls-8 {
    fill: none;
  }
  .cls-1,
  .cls-10 {
    stroke: #85a056;
  }
  .cls-13,
  .cls-2,
  .cls-8 {
    opacity: 0.48;
  }
  .cls-13,
  .cls-14,
  .cls-3,
  .cls-8 {
    stroke: #adadad;
  }
  .cls-10,
  .cls-11,
  .cls-3,
  .cls-7,
  .cls-8 {
    stroke-width: 3px;
  }
  .cls-3 {
    stroke-dasharray: 7.99 3;
    opacity: 0.7;
  }
  .cls-4,
  .cls-6,
  .cls-7 {
    stroke: #bdc3c7;
  }
  .cls-6 {
    stroke-width: 2px;
  }
  .cls-10,
  .cls-11,
  .cls-13,
  .cls-14,
  .cls-8 {
    stroke-opacity: 0.7;
  }
  .cls-13,
  .cls-8 {
    stroke-dasharray: 8 3;
  }
  .cls-9 {
    font-size: 12px;
    font-family: OpenSans, Open Sans;
  }
  .cls-11,
  .cls-12 {
    stroke: #f84417;
  }
`;

export class ParticpantLogLegend extends React.Component {
  render() {
    return (
      <StyledLegend
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 419.24 121.08"
      >
        <title>Asset 1</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="cls-1"
              d="M237.24,72.89a19,19,0,1,0-19-19A19,19,0,0,0,237.24,72.89Z"
            />
            <line
              className="cls-1"
              x1="237.24"
              y1="72.89"
              x2="237.24"
              y2="72.89"
            />
            <line
              className="cls-1"
              x1="237.24"
              y1="34.89"
              x2="237.24"
              y2="34.89"
            />
            <g className="cls-2">
              <circle className="cls-3" cx="237.24" cy="53.89" r="14" />
            </g>
            <path
              id="path1"
              className="cls-4"
              d="M392.54,40.46a19,19,0,0,0-26.87,26.87"
            />
            <path className="cls-4" d="M392.54,40.46a19,19,0,0,1-26.87,26.87" />
            <path className="cls-5" d="M392.54,40.46h0L365.67,67.33h0Z" />
            <line
              className="cls-6"
              x1="277.8"
              y1="67.33"
              x2="277.8"
              y2="67.33"
            />
            <line
              className="cls-7"
              x1="392.54"
              y1="40.46"
              x2="365.67"
              y2="67.33"
            />
            <circle className="cls-8" cx="379.11" cy="53.89" r="14" />
            <text className="cls-9" transform="translate(212.65 10.28)">
              current status
            </text>
            <text className="cls-9" transform="translate(0 10.28)">
              assignment
            </text>
            <text className="cls-9" transform="translate(231.21 98.3)">
              on
            </text>
            <circle className="cls-10" cx="29.03" cy="54.49" r="14" />
            <circle className="cls-11" cx="101.25" cy="54.49" r="14" />
            <path
              id="path31"
              className="cls-12"
              d="M309.45,34.89a19,19,0,0,0,0,38"
            />
            <path className="cls-12" d="M309.45,34.89a19,19,0,0,1,0,38" />
            <path className="cls-5" d="M309.45,34.89h0v38h0Z" />
            <line
              className="cls-12"
              x1="309.45"
              y1="72.89"
              x2="309.45"
              y2="72.89"
            />
            <line
              className="cls-12"
              x1="379.67"
              y1="34.89"
              x2="379.67"
              y2="34.89"
            />
            <circle className="cls-8" cx="309.45" cy="53.89" r="14" />
            <path
              className="cls-13"
              d="M29,73.49a19,19,0,1,0-19-19A19,19,0,0,0,29,73.49Z"
            />
            <path
              className="cls-13"
              d="M101.25,73.49a19,19,0,1,0-19-19A19,19,0,0,0,101.25,73.49Z"
            />
            <text className="cls-9" transform="translate(0 93.15)">
              assigned
            </text>
            <text className="cls-9" transform="translate(73.03 93.15)">
              unassigned
            </text>
            <text className="cls-9" transform="translate(301.06 98.3)">
              off
            </text>
            <text className="cls-9" transform="translate(349.91 98.3)">
              abandoned
            </text>
            <line className="cls-14" x1="202.65" x2="202.65" y2="97.56" />
          </g>
        </g>
      </StyledLegend>
    );
  }
}

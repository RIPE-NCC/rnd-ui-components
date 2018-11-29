import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLegend = styled.svg`
  margin-top: 42px;
  max-width: 347px;

  /* margin-left: 56px; */

  label,
  legend {
    font-weight: 400;
    font-size: 1.1em;
  }

  .cls-1 {
    fill: #f2f9ff;
  }

  .cls-14,
  .cls-2,
  .cls-21 {
    fill: #fff;
    fill-opacity: 0.5;
  }

  .cls-10,
  .cls-2,
  .cls-21,
  .cls-22,
  .cls-4,
  .cls-6,
  .cls-8 {
    stroke: #85a056;
  }

  .cls-10,
  .cls-11,
  .cls-12,
  .cls-13,
  .cls-15,
  .cls-18,
  .cls-19,
  .cls-20,
  .cls-22,
  .cls-23,
  .cls-26,
  .cls-28,
  .cls-3,
  .cls-30,
  .cls-4,
  .cls-5,
  .cls-6,
  .cls-8,
  .cls-9 {
    fill: none;
  }

  .cls-14,
  .cls-15,
  .cls-18,
  .cls-21,
  .cls-4,
  .cls-5 {
    stroke-width: 2px;
  }

  .cls-18,
  .cls-20,
  .cls-30,
  .cls-5,
  .cls-9 {
    stroke: #868686;
  }

  .cls-10,
  .cls-12,
  .cls-13,
  .cls-20,
  .cls-22,
  .cls-5,
  .cls-8 {
    stroke-opacity: 0.7;
  }

  .cls-18,
  .cls-20,
  .cls-28,
  .cls-30,
  .cls-5,
  .cls-9 {
    stroke-dasharray: 8 3;
  }

  .cls-16,
  .cls-17,
  .cls-18,
  .cls-24,
  .cls-25,
  .cls-27,
  .cls-30,
  .cls-7 {
    isolation: isolate;
  }

  .cls-17,
  .cls-7 {
    font-size: 14.35px;
  }

  .cls-17,
  .cls-24,
  .cls-25,
  .cls-27,
  .cls-29,
  .cls-7 {
    font-family: OpenSans, Open Sans;
  }

  .cls-19,
  .cls-8 {
    stroke-width: 3px;
  }

  .cls-10,
  .cls-13,
  .cls-26,
  .cls-28 {
    stroke-width: 0.5px;
  }

  .cls-11,
  .cls-12,
  .cls-13,
  .cls-14,
  .cls-15 {
    stroke: #f84417;
  }

  .cls-17 {
    letter-spacing: -0.01em;
  }

  .cls-18,
  .cls-30 {
    opacity: 0.7;
  }

  .cls-19,
  .cls-23 {
    stroke: #a2cade;
  }

  .cls-22,
  .cls-23 {
    stroke-width: 6px;
  }

  .cls-24 {
    font-size: 23.78px;
  }

  .cls-25 {
    font-size: 27.17px;
  }

  .cls-26,
  .cls-28 {
    stroke: #000;
    stroke-miterlimit: 10;
  }

  .cls-27 {
    font-size: 14.96px;
  }

  .cls-29 {
    font-size: 14px;
  }
`;

export class ParticipantLogLegend extends React.Component {
  render() {
    return (
      <StyledLegend
        viewBox="0 0 442.74 777.96"
        // width={`${this.props.width || "375"}px`}
        // overflow somewhat to the right
        width="calc(100% + 48px)"
      >
        <polygon
          className="cls-1"
          points="420,129.7 420,0 0,0 0,778 420,778 420,175.2 442.7,152.5 442.7,152.4 "
        />
        <path className="cls-2" d="M74.13,471.08a22.72,22.72,0,0,0,0,45.44" />
        <path className="cls-2" d="M74.13,471.08a22.72,22.72,0,0,1,0,45.44" />
        <path className="cls-3" d="M74.13,471.08h0v45.44h0Z" />
        <line className="cls-4" x1="74.13" y1="516.52" x2="74.13" y2="516.52" />
        <line className="cls-4" x1="74.13" y1="471.08" x2="74.13" y2="471.08" />
        <circle className="cls-5" cx="74.13" cy="493.8" r="17.93" />
        <line
          className="cls-6"
          x1="214.42"
          y1="607.08"
          x2="214.42"
          y2="607.08"
        />
        <line
          className="cls-6"
          x1="214.42"
          y1="630.84"
          x2="214.42"
          y2="630.84"
        />
        <line
          className="cls-6"
          x1="214.42"
          y1="630.84"
          x2="214.42"
          y2="630.84"
        />
        <text className="cls-7" transform="translate(178.37 534.44)">
          connected
        </text>
        <text className="cls-7" transform="translate(169.01 618.82)">
          disconnected
        </text>
        <text className="cls-7" transform="translate(175.54 704.02)">
          abandoned
        </text>
        <g>
          <path className="cls-3" d="M214.42,472.46h0v45.43h0Z" />
          <line
            className="cls-6"
            x1="214.42"
            y1="517.89"
            x2="214.42"
            y2="517.89"
          />
          <circle className="cls-8" cx="214.42" cy="495.17" r="17.93" />
          <circle className="cls-9" cx="214.42" cy="495.17" r="22.72" />
        </g>
        <g>
          <path className="cls-3" d="M214.05,561.65h0v45.43h0Z" />
          <circle className="cls-10" cx="214.42" cy="578.97" r="19.13" />
          <circle className="cls-10" cx="214.42" cy="578.97" r="15.54" />
          <circle className="cls-9" cx="214.42" cy="578.97" r="22.72" />
        </g>
        <g>
          <line
            className="cls-11"
            x1="210.82"
            y1="634.71"
            x2="210.82"
            y2="634.71"
          />
          <path className="cls-3" d="M214.42,639h0v45.44h0Z" />
          <line
            className="cls-11"
            x1="214.42"
            y1="684.39"
            x2="214.42"
            y2="684.39"
          />
          <line
            className="cls-12"
            x1="225.41"
            y1="650.68"
            x2="203.42"
            y2="672.66"
          />
          <line
            className="cls-12"
            x1="203.42"
            y1="650.68"
            x2="225.41"
            y2="672.66"
          />
          <circle className="cls-13" cx="214.42" cy="661.67" r="19.13" />
          <circle className="cls-13" cx="214.42" cy="661.67" r="15.54" />
          <circle className="cls-9" cx="214.42" cy="661.67" r="22.72" />
        </g>
        <g>
          <line
            className="cls-4"
            x1="74.13"
            y1="560.27"
            x2="74.13"
            y2="560.27"
          />
          <path
            className="cls-14"
            d="M74.13,555.31a22.72,22.72,0,0,0,0,45.43"
          />
          <path
            className="cls-14"
            d="M74.13,555.31a22.72,22.72,0,1,1,0,45.43"
          />
          <path className="cls-3" d="M74.13,555.31h0v45.43h0Z" />
          <line
            className="cls-15"
            x1="74.13"
            y1="600.71"
            x2="74.13"
            y2="600.71"
          />
          <line
            className="cls-15"
            x1="74.13"
            y1="555.28"
            x2="74.13"
            y2="555.28"
          />
          <circle className="cls-5" cx="74.13" cy="577.99" r="17.93" />
        </g>
        <g className="cls-16">
          <text className="cls-17" transform="translate(44.76 534.44)">
            assigned
          </text>
        </g>
        <text className="cls-7" transform="translate(45.47 618.82)">
          rejected
        </text>
        <text className="cls-7" transform="translate(20.17 439.29)">
          PARTICIPATION
        </text>
        <text className="cls-7" transform="translate(156.97 439.29)">
          CURRENT STATUS
        </text>
        <line className="cls-6" x1="355.5" y1="523.88" x2="355.5" y2="523.88" />
        <line
          className="cls-6"
          x1="362.78"
          y1="478.45"
          x2="362.78"
          y2="478.45"
        />
        <path className="cls-3" d="M355.61,471.08h0v45.44h0Z" />
        <circle className="cls-18" cx="355.61" cy="493.8" r="17.93" />
        <circle className="cls-19" cx="355.61" cy="493.8" r="13.15" />
        <circle className="cls-20" cx="355.61" cy="493.8" r="22.72" />
        <text className="cls-7" transform="translate(309.39 439.29)">
          PROBE TYPE
        </text>
        <text className="cls-7" transform="translate(332.78 534.44)">
          anchor
        </text>
        <path className="cls-21" d="M229.46,119.56a46.11,46.11,0,0,0,0,92.22" />
        <path className="cls-21" d="M229.46,119.56a46.11,46.11,0,1,1,0,92.22" />
        <path className="cls-3" d="M229.25,119.56h0v92.22h0Z" />
        <line
          className="cls-4"
          x1="229.46"
          y1="211.75"
          x2="229.46"
          y2="211.75"
        />
        <line
          className="cls-4"
          x1="229.46"
          y1="119.56"
          x2="229.46"
          y2="119.56"
        />
        <circle className="cls-22" cx="229.46" cy="165.66" r="36.39" />
        <circle
          className="cls-23"
          cx="229.46"
          cy="165.66"
          r="26.68"
          transform="translate(29.19 365.62) rotate(-80.78)"
        />
        <text className="cls-24" transform="translate(201.84 241.86)">
          0000
        </text>
        <text className="cls-25" transform="translate(212.45 175.35)">
          CC
        </text>
        <line className="cls-26" x1="193.07" y1="136.38" x2="167" y2="110.3" />
        <line className="cls-26" x1="167" y1="110.3" x2="125.67" y2="110.3" />
        <line
          className="cls-26"
          x1="202.78"
          y1="192.34"
          x2="164.29"
          y2="230.83"
        />
        <line
          className="cls-26"
          x1="250.34"
          y1="149.04"
          x2="285.83"
          y2="110.3"
        />
        <line
          className="cls-26"
          x1="309.39"
          y1="110.3"
          x2="285.83"
          y2="110.3"
        />
        <line
          className="cls-26"
          x1="164.29"
          y1="230.83"
          x2="125.67"
          y2="230.83"
        />
        <text className="cls-27" transform="translate(20.17 114.65)">
          participation
        </text>
        <text className="cls-27" transform="translate(20.17 235.79)">
          current status
        </text>
        <text className="cls-27" transform="translate(316.01 114.65)">
          probe type
        </text>
        <text className="cls-27" transform="translate(301.1 168.7)">
          country code
        </text>
        {/* <g className="cls-16">
          <text
            className="cls-27"
            transform={`translate(${227.5 -
              (this.props.annotationFieldName.length * 3.8 || 45)} 316.3)`}
          >
            {this.props.annotationFieldName || "annotation"}
          </text>
        </g> */}
        <g>{this.props.extraBox}</g>
        <rect
          className="cls-28"
          x="192.85"
          y="218.84"
          width="72.78"
          height="29.35"
        />
        <rect
          className="cls-28"
          x="208.87"
          y="152.49"
          width="41.19"
          height="26.19"
        />
        <line
          className="cls-26"
          x1="250.06"
          y1="165.65"
          x2="290.77"
          y2="165.67"
        />
        <circle cx="193.07" cy="136.38" r="3" />
        <circle cx="203.78" cy="191.34" r="3" />
        <circle cx="250.34" cy="149.04" r="3" />
        <line
          className="cls-26"
          x1="228.82"
          y1="248.2"
          x2="228.35"
          y2="300.78"
        />
        <text className="cls-29" transform="translate(16.81 35.08)">
          LEGEND & DISPLAY OPTIONS
        </text>
        <circle className="cls-30" cx="214.42" cy="495.17" r="13.15" />
        <circle className="cls-30" cx="214.42" cy="578.97" r="13.15" />
        <circle className="cls-30" cx="214.42" cy="661.72" r="13.15" />
        <circle className="cls-30" cx="74.13" cy="493.8" r="13.15" />
        <circle className="cls-30" cx="74.13" cy="577.99" r="13.15" />

        <text className="cls-29" transform="translate(16.81 757.08)">
          showing probes information for current date
        </text>
      </StyledLegend>
    );
  }
}

ParticipantLogLegend.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  annotationFieldName: PropTypes.string
};

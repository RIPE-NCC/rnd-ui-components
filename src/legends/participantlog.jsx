import React from "react";
import styled from "styled-components";

const StyledLegend = styled.svg`
  margin-top: 42px;
  margin-left: 56px;
  
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
        width={`${this.props.width || "375"}px`}
      >
        <polygon
          class="cls-1"
          points="420,129.7 420,0 0,0 0,778 420,778 420,175.2 442.7,152.5 442.7,152.4 "
        />
        <path class="cls-2" d="M74.13,471.08a22.72,22.72,0,0,0,0,45.44" />
        <path class="cls-2" d="M74.13,471.08a22.72,22.72,0,0,1,0,45.44" />
        <path class="cls-3" d="M74.13,471.08h0v45.44h0Z" />
        <line class="cls-4" x1="74.13" y1="516.52" x2="74.13" y2="516.52" />
        <line class="cls-4" x1="74.13" y1="471.08" x2="74.13" y2="471.08" />
        <circle class="cls-5" cx="74.13" cy="493.8" r="17.93" />
        <line class="cls-6" x1="214.42" y1="607.08" x2="214.42" y2="607.08" />
        <line class="cls-6" x1="214.42" y1="630.84" x2="214.42" y2="630.84" />
        <line class="cls-6" x1="214.42" y1="630.84" x2="214.42" y2="630.84" />
        <text class="cls-7" transform="translate(178.37 534.44)">
          connected
        </text>
        <text class="cls-7" transform="translate(169.01 618.82)">
          disconnected
        </text>
        <text class="cls-7" transform="translate(175.54 704.02)">
          abandoned
        </text>
        <g>
          <path class="cls-3" d="M214.42,472.46h0v45.43h0Z" />
          <line class="cls-6" x1="214.42" y1="517.89" x2="214.42" y2="517.89" />
          <circle class="cls-8" cx="214.42" cy="495.17" r="17.93" />
          <circle class="cls-9" cx="214.42" cy="495.17" r="22.72" />
        </g>
        <g>
          <path class="cls-3" d="M214.05,561.65h0v45.43h0Z" />
          <circle class="cls-10" cx="214.42" cy="578.97" r="19.13" />
          <circle class="cls-10" cx="214.42" cy="578.97" r="15.54" />
          <circle class="cls-9" cx="214.42" cy="578.97" r="22.72" />
        </g>
        <g>
          <line
            class="cls-11"
            x1="210.82"
            y1="634.71"
            x2="210.82"
            y2="634.71"
          />
          <path class="cls-3" d="M214.42,639h0v45.44h0Z" />
          <line
            class="cls-11"
            x1="214.42"
            y1="684.39"
            x2="214.42"
            y2="684.39"
          />
          <line
            class="cls-12"
            x1="225.41"
            y1="650.68"
            x2="203.42"
            y2="672.66"
          />
          <line
            class="cls-12"
            x1="203.42"
            y1="650.68"
            x2="225.41"
            y2="672.66"
          />
          <circle class="cls-13" cx="214.42" cy="661.67" r="19.13" />
          <circle class="cls-13" cx="214.42" cy="661.67" r="15.54" />
          <circle class="cls-9" cx="214.42" cy="661.67" r="22.72" />
        </g>
        <g>
          <line class="cls-4" x1="74.13" y1="560.27" x2="74.13" y2="560.27" />
          <path class="cls-14" d="M74.13,555.31a22.72,22.72,0,0,0,0,45.43" />
          <path class="cls-14" d="M74.13,555.31a22.72,22.72,0,1,1,0,45.43" />
          <path class="cls-3" d="M74.13,555.31h0v45.43h0Z" />
          <line class="cls-15" x1="74.13" y1="600.71" x2="74.13" y2="600.71" />
          <line class="cls-15" x1="74.13" y1="555.28" x2="74.13" y2="555.28" />
          <circle class="cls-5" cx="74.13" cy="577.99" r="17.93" />
        </g>
        <g class="cls-16">
          <text class="cls-17" transform="translate(44.76 534.44)">
            assigned
          </text>
        </g>
        <text class="cls-7" transform="translate(45.47 618.82)">
          rejected
        </text>
        <text class="cls-7" transform="translate(20.17 439.29)">
          PARTICIPATION
        </text>
        <text class="cls-7" transform="translate(156.97 439.29)">
          CURRENT STATUS
        </text>
        <line class="cls-6" x1="355.5" y1="523.88" x2="355.5" y2="523.88" />
        <line class="cls-6" x1="362.78" y1="478.45" x2="362.78" y2="478.45" />
        <path class="cls-3" d="M355.61,471.08h0v45.44h0Z" />
        <circle class="cls-18" cx="355.61" cy="493.8" r="17.93" />
        <circle class="cls-19" cx="355.61" cy="493.8" r="13.15" />
        <circle class="cls-20" cx="355.61" cy="493.8" r="22.72" />
        <text class="cls-7" transform="translate(309.39 439.29)">
          PROBE TYPE
        </text>
        <text class="cls-7" transform="translate(332.78 534.44)">
          anchor
        </text>
        <path class="cls-21" d="M229.46,119.56a46.11,46.11,0,0,0,0,92.22" />
        <path class="cls-21" d="M229.46,119.56a46.11,46.11,0,1,1,0,92.22" />
        <path class="cls-3" d="M229.25,119.56h0v92.22h0Z" />
        <line class="cls-4" x1="229.46" y1="211.75" x2="229.46" y2="211.75" />
        <line class="cls-4" x1="229.46" y1="119.56" x2="229.46" y2="119.56" />
        <circle class="cls-22" cx="229.46" cy="165.66" r="36.39" />
        <circle
          class="cls-23"
          cx="229.46"
          cy="165.66"
          r="26.68"
          transform="translate(29.19 365.62) rotate(-80.78)"
        />
        <text class="cls-24" transform="translate(201.84 241.86)">
          0000
        </text>
        <text class="cls-25" transform="translate(212.45 175.35)">
          CC
        </text>
        <line class="cls-26" x1="193.07" y1="136.38" x2="167" y2="110.3" />
        <line class="cls-26" x1="167" y1="110.3" x2="125.67" y2="110.3" />
        <line class="cls-26" x1="202.78" y1="192.34" x2="164.29" y2="230.83" />
        <line class="cls-26" x1="250.34" y1="149.04" x2="285.83" y2="110.3" />
        <line class="cls-26" x1="309.39" y1="110.3" x2="285.83" y2="110.3" />
        <line class="cls-26" x1="164.29" y1="230.83" x2="125.67" y2="230.83" />
        <text class="cls-27" transform="translate(20.17 114.65)">
          participation
        </text>
        <text class="cls-27" transform="translate(20.17 235.79)">
          current status
        </text>
        <text class="cls-27" transform="translate(316.01 114.65)">
          probe type
        </text>
        <text class="cls-27" transform="translate(301.1 168.7)">
          country code
        </text>
        <g class="cls-16">
          <text class="cls-27" transform="translate(188.35 316.3)">
            annotation{" "}
          </text>
          <text class="cls-27" transform="translate(188.35 334.24)">
            (ASN or ID)
          </text>
        </g>
        <rect
          class="cls-28"
          x="192.85"
          y="218.84"
          width="72.78"
          height="29.35"
        />
        <rect
          class="cls-28"
          x="208.87"
          y="152.49"
          width="41.19"
          height="26.19"
        />
        <line class="cls-26" x1="250.06" y1="165.65" x2="290.77" y2="165.67" />
        <circle cx="193.07" cy="136.38" r="3" />
        <circle cx="203.78" cy="191.34" r="3" />
        <circle cx="250.34" cy="149.04" r="3" />
        <line class="cls-26" x1="228.82" y1="248.2" x2="228.35" y2="300.78" />
        <text class="cls-29" transform="translate(16.81 35.08)">
          PROBE
        </text>
        <circle class="cls-30" cx="214.42" cy="495.17" r="13.15" />
        <circle class="cls-30" cx="214.42" cy="578.97" r="13.15" />
        <circle class="cls-30" cx="214.42" cy="661.72" r="13.15" />
        <circle class="cls-30" cx="74.13" cy="493.8" r="13.15" />
        <circle class="cls-30" cx="74.13" cy="577.99" r="13.15" />
      </StyledLegend>
    );
  }
}

// export class ParticpantLogLegend extends React.Component {
//   render() {
//     return (
//       <StyledLegend
//         id="Layer_1"
//         data-name="Layer 1"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 498.15 768.54"
//       >
//         <title>part_req</title>
//         <path
//           id="path0"
//           class="cls-1"
//           d="M23,2a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M23,2a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M23,2h0V40h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="100.65" y1="390.04" x2="100.65" y2="390.04" />
//         <line class="cls-1" x1="100.65" y1="352.04" x2="100.65" y2="352.04" />
//         <circle class="cls-3" cx="100.65" cy="371.04" r="14" />
//         <text class="cls-4" transform="translate(93.15 375.04)">
//           US
//         </text>
//         <path
//           id="path1"
//           class="cls-5"
//           d="M78.44,7.56A19,19,0,0,0,51.56,34.44"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M78.44,7.56A19,19,0,0,1,51.56,34.44"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M78.44,7.56h0L51.56,34.44h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-6" x1="129.21" y1="384.48" x2="129.21" y2="384.48" />
//         <line class="cls-6" x1="156.08" y1="357.61" x2="156.08" y2="357.61" />
//         <line class="cls-7" x1="156.08" y1="357.61" x2="129.21" y2="384.48" />
//         <circle class="cls-8" cx="142.65" cy="371.04" r="14" />
//         <path
//           id="path2"
//           class="cls-1"
//           d="M107,2a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M107,2a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M107,2h0V40h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="184.65" y1="390.04" x2="184.65" y2="390.04" />
//         <line class="cls-1" x1="184.65" y1="352.04" x2="184.65" y2="352.04" />
//         <circle class="cls-3" cx="184.65" cy="371.04" r="14" />
//         <text class="cls-4" transform="translate(177.15 375.04)">
//           US
//         </text>
//         <path
//           id="path3"
//           class="cls-1"
//           d="M149,2a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M149,2a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M149,2h0V40h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="226.65" y1="390.04" x2="226.65" y2="390.04" />
//         <line class="cls-1" x1="226.65" y1="352.04" x2="226.65" y2="352.04" />
//         <circle class="cls-8" cx="226.65" cy="371.04" r="14" />
//         <text class="cls-4" transform="translate(219.15 375.04)">
//           US
//         </text>
//         <path
//           id="path4"
//           class="cls-1"
//           d="M191,2a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M191,2a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M191,2h0V40h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="268.65" y1="390.04" x2="268.65" y2="390.04" />
//         <line class="cls-1" x1="268.65" y1="352.04" x2="268.65" y2="352.04" />
//         <circle class="cls-3" cx="268.65" cy="371.04" r="14" />
//         <text class="cls-4" transform="translate(261.15 375.04)">
//           US
//         </text>
//         <path
//           id="path5"
//           class="cls-1"
//           d="M233,2a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M233,2a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M233,2h0V40h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="310.65" y1="390.04" x2="310.65" y2="390.04" />
//         <line class="cls-1" x1="310.65" y1="352.04" x2="310.65" y2="352.04" />
//         <circle class="cls-3" cx="310.65" cy="371.04" r="14" />
//         <text class="cls-4" transform="translate(303.15 375.04)">
//           AU
//         </text>
//         <path
//           id="path6"
//           class="cls-9"
//           d="M275,2a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-9"
//           d="M275,2a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M275,2h0V40h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-9" x1="352.65" y1="390.04" x2="352.65" y2="390.04" />
//         <line class="cls-9" x1="352.65" y1="352.04" x2="352.65" y2="352.04" />
//         <circle class="cls-8" cx="352.65" cy="371.04" r="14" />
//         <text class="cls-4" transform="translate(345.15 375.04)">
//           US
//         </text>
//         <path
//           id="path7"
//           class="cls-5"
//           d="M317,2a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M317,2a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M317,2h0V40h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="394.65" y1="390.04" x2="394.65" y2="390.04" />
//         <line class="cls-5" x1="394.65" y1="352.04" x2="394.65" y2="352.04" />
//         <line class="cls-5" x1="394.65" y1="352.04" x2="394.65" y2="390.04" />
//         <circle class="cls-8" cx="394.65" cy="371.04" r="14" />
//         <path
//           id="path8"
//           class="cls-1"
//           d="M359,2a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M359,2a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M359,2h0V40h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="436.65" y1="390.04" x2="436.65" y2="390.04" />
//         <line class="cls-1" x1="436.65" y1="352.04" x2="436.65" y2="352.04" />
//         <circle class="cls-3" cx="436.65" cy="371.04" r="14" />
//         <text class="cls-4" transform="translate(429.15 375.04)">
//           US
//         </text>
//         <path
//           id="path9"
//           class="cls-5"
//           d="M401,2a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M401,2a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M401,2h0V40h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="478.65" y1="390.04" x2="478.65" y2="390.04" />
//         <line class="cls-5" x1="478.65" y1="352.04" x2="478.65" y2="352.04" />
//         <line class="cls-5" x1="478.65" y1="352.04" x2="478.65" y2="390.04" />
//         <circle class="cls-8" cx="478.65" cy="371.04" r="14" />
//         <path
//           id="path10"
//           class="cls-5"
//           d="M23,44a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M23,44a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M23,44h0V82h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="100.65" y1="432.04" x2="100.65" y2="432.04" />
//         <line class="cls-5" x1="100.65" y1="394.04" x2="100.65" y2="394.04" />
//         <line class="cls-5" x1="100.65" y1="394.04" x2="100.65" y2="432.04" />
//         <circle class="cls-8" cx="100.65" cy="413.04" r="14" />
//         <path
//           id="path11"
//           class="cls-1"
//           d="M65,44a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M65,44a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M65,44h0V82h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="142.65" y1="432.04" x2="142.65" y2="432.04" />
//         <line class="cls-1" x1="142.65" y1="394.04" x2="142.65" y2="394.04" />
//         <circle class="cls-3" cx="142.65" cy="413.04" r="14" />
//         <text class="cls-4" transform="translate(135.15 417.04)">
//           US
//         </text>
//         <path
//           id="path12"
//           class="cls-9"
//           d="M107,44a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-9"
//           d="M107,44a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M107,44h0V82h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-9" x1="184.65" y1="432.04" x2="184.65" y2="432.04" />
//         <line class="cls-9" x1="184.65" y1="394.04" x2="184.65" y2="394.04" />
//         <circle class="cls-3" cx="184.65" cy="413.04" r="14" />
//         <text class="cls-4" transform="translate(177.15 417.04)">
//           US
//         </text>
//         <path
//           id="path13"
//           class="cls-1"
//           d="M149,44a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M149,44a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M149,44h0V82h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="226.65" y1="432.04" x2="226.65" y2="432.04" />
//         <line class="cls-1" x1="226.65" y1="394.04" x2="226.65" y2="394.04" />
//         <circle class="cls-3" cx="226.65" cy="413.04" r="14" />
//         <text class="cls-4" transform="translate(219.15 417.04)">
//           US
//         </text>
//         <path
//           id="path14"
//           class="cls-1"
//           d="M191,44a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M191,44a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M191,44h0V82h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="268.65" y1="432.04" x2="268.65" y2="432.04" />
//         <line class="cls-1" x1="268.65" y1="394.04" x2="268.65" y2="394.04" />
//         <circle class="cls-3" cx="268.65" cy="413.04" r="14" />
//         <text class="cls-4" transform="translate(261.15 417.04)">
//           US
//         </text>
//         <path
//           id="path15"
//           class="cls-5"
//           d="M233,44a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M233,44a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M233,44h0V82h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="310.65" y1="432.04" x2="310.65" y2="432.04" />
//         <line class="cls-5" x1="310.65" y1="394.04" x2="310.65" y2="394.04" />
//         <line class="cls-5" x1="310.65" y1="394.04" x2="310.65" y2="432.04" />
//         <circle class="cls-3" cx="310.65" cy="413.04" r="14" />
//         <path
//           id="path16"
//           class="cls-1"
//           d="M275,44a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M275,44a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M275,44h0V82h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="352.65" y1="432.04" x2="352.65" y2="432.04" />
//         <line class="cls-1" x1="352.65" y1="394.04" x2="352.65" y2="394.04" />
//         <circle class="cls-3" cx="352.65" cy="413.04" r="14" />
//         <text class="cls-4" transform="translate(345.15 417.04)">
//           US
//         </text>
//         <path
//           id="path17"
//           class="cls-5"
//           d="M317,44a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M317,44a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M317,44h0V82h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="394.65" y1="432.04" x2="394.65" y2="432.04" />
//         <line class="cls-5" x1="394.65" y1="394.04" x2="394.65" y2="394.04" />
//         <line class="cls-5" x1="394.65" y1="394.04" x2="394.65" y2="432.04" />
//         <circle class="cls-8" cx="394.65" cy="413.04" r="14" />
//         <path
//           id="path18"
//           class="cls-1"
//           d="M359,44a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M359,44a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M359,44h0V82h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="436.65" y1="432.04" x2="436.65" y2="432.04" />
//         <line class="cls-1" x1="436.65" y1="394.04" x2="436.65" y2="394.04" />
//         <circle class="cls-3" cx="436.65" cy="413.04" r="14" />
//         <text class="cls-4" transform="translate(429.15 417.04)">
//           US
//         </text>
//         <path
//           id="path19"
//           class="cls-5"
//           d="M401,44a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M401,44a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M401,44h0V82h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="478.65" y1="432.04" x2="478.65" y2="432.04" />
//         <line class="cls-5" x1="478.65" y1="394.04" x2="478.65" y2="394.04" />
//         <line class="cls-5" x1="478.65" y1="394.04" x2="478.65" y2="432.04" />
//         <circle class="cls-3" cx="478.65" cy="413.04" r="14" />
//         <path
//           id="path20"
//           class="cls-1"
//           d="M23,86a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M23,86a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M23,86h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="100.65" y1="474.04" x2="100.65" y2="474.04" />
//         <line class="cls-1" x1="100.65" y1="436.04" x2="100.65" y2="436.04" />
//         <circle class="cls-3" cx="100.65" cy="455.04" r="14" />
//         <text class="cls-4" transform="translate(93.15 459.04)">
//           US
//         </text>
//         <path
//           id="path21"
//           class="cls-1"
//           d="M65,86a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M65,86a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M65,86h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="142.65" y1="474.04" x2="142.65" y2="474.04" />
//         <line class="cls-1" x1="142.65" y1="436.04" x2="142.65" y2="436.04" />
//         <circle class="cls-3" cx="142.65" cy="455.04" r="14" />
//         <text class="cls-4" transform="translate(135.15 459.04)">
//           US
//         </text>
//         <path
//           id="path22"
//           class="cls-5"
//           d="M107,86a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M107,86a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M107,86h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="184.65" y1="474.04" x2="184.65" y2="474.04" />
//         <line class="cls-5" x1="184.65" y1="436.04" x2="184.65" y2="436.04" />
//         <line class="cls-5" x1="184.65" y1="436.04" x2="184.65" y2="474.04" />
//         <circle class="cls-8" cx="184.65" cy="455.04" r="14" />
//         <path
//           id="path23"
//           class="cls-1"
//           d="M149,86a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M149,86a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M149,86h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="226.65" y1="474.04" x2="226.65" y2="474.04" />
//         <line class="cls-1" x1="226.65" y1="436.04" x2="226.65" y2="436.04" />
//         <circle class="cls-3" cx="226.65" cy="455.04" r="14" />
//         <text class="cls-4" transform="translate(219.15 459.04)">
//           US
//         </text>
//         <path
//           id="path24"
//           class="cls-1"
//           d="M191,86a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M191,86a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M191,86h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="268.65" y1="474.04" x2="268.65" y2="474.04" />
//         <line class="cls-1" x1="268.65" y1="436.04" x2="268.65" y2="436.04" />
//         <circle class="cls-3" cx="268.65" cy="455.04" r="14" />
//         <text class="cls-4" transform="translate(261.15 459.04)">
//           US
//         </text>
//         <path
//           id="path25"
//           class="cls-1"
//           d="M233,86a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M233,86a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M233,86h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="310.65" y1="474.04" x2="310.65" y2="474.04" />
//         <line class="cls-1" x1="310.65" y1="436.04" x2="310.65" y2="436.04" />
//         <circle class="cls-3" cx="310.65" cy="455.04" r="14" />
//         <text class="cls-4" transform="translate(303.15 459.04)">
//           US
//         </text>
//         <path
//           id="path26"
//           class="cls-1"
//           d="M275,86a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M275,86a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M275,86h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="352.65" y1="474.04" x2="352.65" y2="474.04" />
//         <line class="cls-1" x1="352.65" y1="436.04" x2="352.65" y2="436.04" />
//         <circle class="cls-3" cx="352.65" cy="455.04" r="14" />
//         <text class="cls-4" transform="translate(345.15 459.04)">
//           US
//         </text>
//         <path
//           id="path27"
//           class="cls-1"
//           d="M317,86a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M317,86a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M317,86h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="394.65" y1="474.04" x2="394.65" y2="474.04" />
//         <line class="cls-1" x1="394.65" y1="436.04" x2="394.65" y2="436.04" />
//         <circle class="cls-3" cx="394.65" cy="455.04" r="14" />
//         <text class="cls-4" transform="translate(387.15 459.04)">
//           US
//         </text>
//         <path
//           id="path28"
//           class="cls-1"
//           d="M359,86a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M359,86a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M359,86h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="436.65" y1="474.04" x2="436.65" y2="474.04" />
//         <line class="cls-1" x1="436.65" y1="436.04" x2="436.65" y2="436.04" />
//         <circle class="cls-3" cx="436.65" cy="455.04" r="14" />
//         <text class="cls-4" transform="translate(429.15 459.04)">
//           US
//         </text>
//         <path
//           id="path29"
//           class="cls-1"
//           d="M401,86a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M401,86a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M401,86h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="478.65" y1="474.04" x2="478.65" y2="474.04" />
//         <line class="cls-1" x1="478.65" y1="436.04" x2="478.65" y2="436.04" />
//         <circle class="cls-3" cx="478.65" cy="455.04" r="14" />
//         <text class="cls-4" transform="translate(471.15 459.04)">
//           US
//         </text>
//         <path
//           id="path30"
//           class="cls-1"
//           d="M23,128a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M23,128a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M23,128h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="100.65" y1="516.04" x2="100.65" y2="516.04" />
//         <line class="cls-1" x1="100.65" y1="478.04" x2="100.65" y2="478.04" />
//         <circle class="cls-3" cx="100.65" cy="497.04" r="14" />
//         <text class="cls-4" transform="translate(93.15 501.04)">
//           US
//         </text>
//         <path
//           id="path31"
//           class="cls-9"
//           d="M65,128a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-9"
//           d="M65,128a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M65,128h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-9" x1="142.65" y1="516.04" x2="142.65" y2="516.04" />
//         <line class="cls-9" x1="142.65" y1="478.04" x2="142.65" y2="478.04" />
//         <circle class="cls-3" cx="142.65" cy="497.04" r="14" />
//         <text class="cls-4" transform="translate(135.15 501.04)">
//           US
//         </text>
//         <path
//           id="path32"
//           class="cls-1"
//           d="M107,128a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M107,128a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M107,128h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="184.65" y1="516.04" x2="184.65" y2="516.04" />
//         <line class="cls-1" x1="184.65" y1="478.04" x2="184.65" y2="478.04" />
//         <circle class="cls-3" cx="184.65" cy="497.04" r="14" />
//         <text class="cls-4" transform="translate(177.15 501.04)">
//           US
//         </text>
//         <path
//           id="path33"
//           class="cls-1"
//           d="M149,128a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M149,128a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M149,128h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="226.65" y1="516.04" x2="226.65" y2="516.04" />
//         <line class="cls-1" x1="226.65" y1="478.04" x2="226.65" y2="478.04" />
//         <circle class="cls-3" cx="226.65" cy="497.04" r="14" />
//         <text class="cls-4" transform="translate(219.15 501.04)">
//           US
//         </text>
//         <path
//           id="path34"
//           class="cls-1"
//           d="M191,128a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M191,128a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M191,128h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="268.65" y1="516.04" x2="268.65" y2="516.04" />
//         <line class="cls-1" x1="268.65" y1="478.04" x2="268.65" y2="478.04" />
//         <circle class="cls-3" cx="268.65" cy="497.04" r="14" />
//         <text class="cls-4" transform="translate(261.15 501.04)">
//           US
//         </text>
//         <path
//           id="path35"
//           class="cls-1"
//           d="M233,128a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M233,128a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M233,128h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="310.65" y1="516.04" x2="310.65" y2="516.04" />
//         <line class="cls-1" x1="310.65" y1="478.04" x2="310.65" y2="478.04" />
//         <circle class="cls-3" cx="310.65" cy="497.04" r="14" />
//         <text class="cls-4" transform="translate(303.15 501.04)">
//           US
//         </text>
//         <path
//           id="path36"
//           class="cls-5"
//           d="M275,128a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M275,128a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M275,128h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="352.65" y1="516.04" x2="352.65" y2="516.04" />
//         <line class="cls-5" x1="352.65" y1="478.04" x2="352.65" y2="478.04" />
//         <line class="cls-5" x1="352.65" y1="478.04" x2="352.65" y2="516.04" />
//         <circle class="cls-8" cx="352.65" cy="497.04" r="14" />
//         <path
//           id="path37"
//           class="cls-1"
//           d="M317,128a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M317,128a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M317,128h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="394.65" y1="516.04" x2="394.65" y2="516.04" />
//         <line class="cls-1" x1="394.65" y1="478.04" x2="394.65" y2="478.04" />
//         <circle class="cls-3" cx="394.65" cy="497.04" r="14" />
//         <text class="cls-4" transform="translate(387.15 501.04)">
//           US
//         </text>
//         <path
//           id="path38"
//           class="cls-5"
//           d="M359,128a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M359,128a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M359,128h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="436.65" y1="516.04" x2="436.65" y2="516.04" />
//         <line class="cls-5" x1="436.65" y1="478.04" x2="436.65" y2="478.04" />
//         <line class="cls-5" x1="436.65" y1="478.04" x2="436.65" y2="516.04" />
//         <circle class="cls-8" cx="436.65" cy="497.04" r="14" />
//         <path
//           id="path39"
//           class="cls-1"
//           d="M401,128a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M401,128a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M401,128h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="478.65" y1="516.04" x2="478.65" y2="516.04" />
//         <line class="cls-1" x1="478.65" y1="478.04" x2="478.65" y2="478.04" />
//         <circle class="cls-8" cx="478.65" cy="497.04" r="14" />
//         <text class="cls-4" transform="translate(471.15 501.04)">
//           US
//         </text>
//         <path
//           id="path40"
//           class="cls-1"
//           d="M23,170a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M23,170a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M23,170h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="100.65" y1="558.04" x2="100.65" y2="558.04" />
//         <line class="cls-1" x1="100.65" y1="520.04" x2="100.65" y2="520.04" />
//         <circle class="cls-3" cx="100.65" cy="539.04" r="14" />
//         <text class="cls-4" transform="translate(93.15 543.04)">
//           CH
//         </text>
//         <path
//           id="path41"
//           class="cls-1"
//           d="M65,170a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M65,170a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M65,170h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="142.65" y1="558.04" x2="142.65" y2="558.04" />
//         <line class="cls-1" x1="142.65" y1="520.04" x2="142.65" y2="520.04" />
//         <circle class="cls-3" cx="142.65" cy="539.04" r="14" />
//         <text class="cls-4" transform="translate(135.15 543.04)">
//           US
//         </text>
//         <path
//           id="path42"
//           class="cls-1"
//           d="M107,170a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M107,170a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M107,170h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="184.65" y1="558.04" x2="184.65" y2="558.04" />
//         <line class="cls-1" x1="184.65" y1="520.04" x2="184.65" y2="520.04" />
//         <circle class="cls-3" cx="184.65" cy="539.04" r="14" />
//         <text class="cls-4" transform="translate(177.15 543.04)">
//           US
//         </text>
//         <path
//           id="path43"
//           class="cls-1"
//           d="M149,170a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M149,170a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M149,170h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="226.65" y1="558.04" x2="226.65" y2="558.04" />
//         <line class="cls-1" x1="226.65" y1="520.04" x2="226.65" y2="520.04" />
//         <circle class="cls-3" cx="226.65" cy="539.04" r="14" />
//         <text class="cls-4" transform="translate(219.15 543.04)">
//           US
//         </text>
//         <path
//           id="path44"
//           class="cls-5"
//           d="M191,170a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M191,170a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M191,170h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="268.65" y1="558.04" x2="268.65" y2="558.04" />
//         <line class="cls-5" x1="268.65" y1="520.04" x2="268.65" y2="520.04" />
//         <line class="cls-5" x1="268.65" y1="520.04" x2="268.65" y2="558.04" />
//         <circle class="cls-8" cx="268.65" cy="539.04" r="14" />
//         <path
//           id="path45"
//           class="cls-1"
//           d="M233,170a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M233,170a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M233,170h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="310.65" y1="558.04" x2="310.65" y2="558.04" />
//         <line class="cls-1" x1="310.65" y1="520.04" x2="310.65" y2="520.04" />
//         <circle class="cls-3" cx="310.65" cy="539.04" r="14" />
//         <text class="cls-4" transform="translate(303.15 543.04)">
//           US
//         </text>
//         <path
//           id="path46"
//           class="cls-1"
//           d="M275,170a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M275,170a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M275,170h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="352.65" y1="558.04" x2="352.65" y2="558.04" />
//         <line class="cls-1" x1="352.65" y1="520.04" x2="352.65" y2="520.04" />
//         <circle class="cls-3" cx="352.65" cy="539.04" r="14" />
//         <text class="cls-4" transform="translate(345.15 543.04)">
//           US
//         </text>
//         <path
//           id="path47"
//           class="cls-1"
//           d="M317,170a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M317,170a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M317,170h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="394.65" y1="558.04" x2="394.65" y2="558.04" />
//         <line class="cls-1" x1="394.65" y1="520.04" x2="394.65" y2="520.04" />
//         <circle class="cls-3" cx="394.65" cy="539.04" r="14" />
//         <text class="cls-4" transform="translate(387.15 543.04)">
//           US
//         </text>
//         <path
//           id="path48"
//           class="cls-1"
//           d="M359,170a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M359,170a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M359,170h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="436.65" y1="558.04" x2="436.65" y2="558.04" />
//         <line class="cls-1" x1="436.65" y1="520.04" x2="436.65" y2="520.04" />
//         <circle class="cls-3" cx="436.65" cy="539.04" r="14" />
//         <text class="cls-4" transform="translate(429.15 543.04)">
//           US
//         </text>
//         <path
//           id="path49"
//           class="cls-1"
//           d="M401,170a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M401,170a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M401,170h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="478.65" y1="558.04" x2="478.65" y2="558.04" />
//         <line class="cls-1" x1="478.65" y1="520.04" x2="478.65" y2="520.04" />
//         <circle class="cls-3" cx="478.65" cy="539.04" r="14" />
//         <text class="cls-4" transform="translate(471.15 543.04)">
//           US
//         </text>
//         <path
//           id="path50"
//           class="cls-1"
//           d="M23,212a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M23,212a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M23,212h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="100.65" y1="600.04" x2="100.65" y2="600.04" />
//         <line class="cls-1" x1="100.65" y1="562.04" x2="100.65" y2="562.04" />
//         <circle class="cls-3" cx="100.65" cy="581.04" r="14" />
//         <text class="cls-4" transform="translate(93.15 585.04)">
//           US
//         </text>
//         <path
//           id="path51"
//           class="cls-9"
//           d="M65,212a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-9"
//           d="M65,212a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M65,212h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-9" x1="142.65" y1="600.04" x2="142.65" y2="600.04" />
//         <line class="cls-9" x1="142.65" y1="562.04" x2="142.65" y2="562.04" />
//         <circle class="cls-3" cx="142.65" cy="581.04" r="14" />
//         <text class="cls-4" transform="translate(135.15 585.04)">
//           US
//         </text>
//         <path
//           id="path52"
//           class="cls-1"
//           d="M107,212a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M107,212a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M107,212h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="184.65" y1="600.04" x2="184.65" y2="600.04" />
//         <line class="cls-1" x1="184.65" y1="562.04" x2="184.65" y2="562.04" />
//         <circle class="cls-3" cx="184.65" cy="581.04" r="14" />
//         <text class="cls-4" transform="translate(177.15 585.04)">
//           US
//         </text>
//         <path
//           id="path53"
//           class="cls-5"
//           d="M149,212a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M149,212a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M149,212h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="226.65" y1="600.04" x2="226.65" y2="600.04" />
//         <line class="cls-5" x1="226.65" y1="562.04" x2="226.65" y2="562.04" />
//         <line class="cls-5" x1="226.65" y1="562.04" x2="226.65" y2="600.04" />
//         <circle class="cls-3" cx="226.65" cy="581.04" r="14" />
//         <path
//           id="path54"
//           class="cls-1"
//           d="M191,212a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M191,212a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M191,212h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="268.65" y1="600.04" x2="268.65" y2="600.04" />
//         <line class="cls-1" x1="268.65" y1="562.04" x2="268.65" y2="562.04" />
//         <circle class="cls-3" cx="268.65" cy="581.04" r="14" />
//         <text class="cls-4" transform="translate(261.15 585.04)">
//           US
//         </text>
//         <path
//           id="path55"
//           class="cls-1"
//           d="M233,212a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M233,212a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M233,212h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="310.65" y1="600.04" x2="310.65" y2="600.04" />
//         <line class="cls-1" x1="310.65" y1="562.04" x2="310.65" y2="562.04" />
//         <circle class="cls-3" cx="310.65" cy="581.04" r="14" />
//         <text class="cls-4" transform="translate(303.15 585.04)">
//           US
//         </text>
//         <path
//           id="path56"
//           class="cls-9"
//           d="M275,212a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-9"
//           d="M275,212a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M275,212h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-9" x1="352.65" y1="600.04" x2="352.65" y2="600.04" />
//         <line class="cls-9" x1="352.65" y1="562.04" x2="352.65" y2="562.04" />
//         <circle class="cls-3" cx="352.65" cy="581.04" r="14" />
//         <text class="cls-4" transform="translate(345.15 585.04)">
//           US
//         </text>
//         <path
//           id="path57"
//           class="cls-9"
//           d="M317,212a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-9"
//           d="M317,212a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M317,212h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-9" x1="394.65" y1="600.04" x2="394.65" y2="600.04" />
//         <line class="cls-9" x1="394.65" y1="562.04" x2="394.65" y2="562.04" />
//         <circle class="cls-8" cx="394.65" cy="581.04" r="14" />
//         <text class="cls-4" transform="translate(387.15 585.04)">
//           US
//         </text>
//         <path
//           id="path58"
//           class="cls-1"
//           d="M359,212a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M359,212a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M359,212h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="436.65" y1="600.04" x2="436.65" y2="600.04" />
//         <line class="cls-1" x1="436.65" y1="562.04" x2="436.65" y2="562.04" />
//         <circle class="cls-3" cx="436.65" cy="581.04" r="14" />
//         <text class="cls-4" transform="translate(429.15 585.04)">
//           US
//         </text>
//         <path
//           id="path59"
//           class="cls-1"
//           d="M401,212a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M401,212a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M401,212h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="478.65" y1="600.04" x2="478.65" y2="600.04" />
//         <line class="cls-1" x1="478.65" y1="562.04" x2="478.65" y2="562.04" />
//         <circle class="cls-3" cx="478.65" cy="581.04" r="14" />
//         <text class="cls-4" transform="translate(471.15 585.04)">
//           US
//         </text>
//         <path
//           id="path60"
//           class="cls-1"
//           d="M23,254a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M23,254a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M23,254h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="100.65" y1="642.04" x2="100.65" y2="642.04" />
//         <line class="cls-1" x1="100.65" y1="604.04" x2="100.65" y2="604.04" />
//         <circle class="cls-3" cx="100.65" cy="623.04" r="14" />
//         <text class="cls-4" transform="translate(93.15 627.04)">
//           US
//         </text>
//         <path
//           id="path61"
//           class="cls-1"
//           d="M65,254a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M65,254a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M65,254h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="142.65" y1="642.04" x2="142.65" y2="642.04" />
//         <line class="cls-1" x1="142.65" y1="604.04" x2="142.65" y2="604.04" />
//         <circle class="cls-3" cx="142.65" cy="623.04" r="14" />
//         <text class="cls-4" transform="translate(135.15 627.04)">
//           US
//         </text>
//         <path
//           id="path62"
//           class="cls-5"
//           d="M107,254a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M107,254a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M107,254h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="184.65" y1="642.04" x2="184.65" y2="642.04" />
//         <line class="cls-5" x1="184.65" y1="604.04" x2="184.65" y2="604.04" />
//         <line class="cls-5" x1="184.65" y1="604.04" x2="184.65" y2="642.04" />
//         <circle class="cls-3" cx="184.65" cy="623.04" r="14" />
//         <path
//           id="path63"
//           class="cls-5"
//           d="M149,254a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M149,254a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M149,254h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="226.65" y1="642.04" x2="226.65" y2="642.04" />
//         <line class="cls-5" x1="226.65" y1="604.04" x2="226.65" y2="604.04" />
//         <line class="cls-5" x1="226.65" y1="604.04" x2="226.65" y2="642.04" />
//         <circle class="cls-3" cx="226.65" cy="623.04" r="14" />
//         <path
//           id="path64"
//           class="cls-1"
//           d="M191,254a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M191,254a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M191,254h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="268.65" y1="642.04" x2="268.65" y2="642.04" />
//         <line class="cls-1" x1="268.65" y1="604.04" x2="268.65" y2="604.04" />
//         <circle class="cls-3" cx="268.65" cy="623.04" r="14" />
//         <text class="cls-4" transform="translate(261.15 627.04)">
//           US
//         </text>
//         <path
//           id="path65"
//           class="cls-1"
//           d="M233,254a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M233,254a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M233,254h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="310.65" y1="642.04" x2="310.65" y2="642.04" />
//         <line class="cls-1" x1="310.65" y1="604.04" x2="310.65" y2="604.04" />
//         <circle class="cls-3" cx="310.65" cy="623.04" r="14" />
//         <text class="cls-4" transform="translate(303.15 627.04)">
//           US
//         </text>
//         <path
//           id="path66"
//           class="cls-5"
//           d="M275,254a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M275,254a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M275,254h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="352.65" y1="642.04" x2="352.65" y2="642.04" />
//         <line class="cls-5" x1="352.65" y1="604.04" x2="352.65" y2="604.04" />
//         <line class="cls-5" x1="352.65" y1="604.04" x2="352.65" y2="642.04" />
//         <circle class="cls-3" cx="352.65" cy="623.04" r="14" />
//         <path
//           id="path67"
//           class="cls-1"
//           d="M317,254a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M317,254a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M317,254h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="394.65" y1="642.04" x2="394.65" y2="642.04" />
//         <line class="cls-1" x1="394.65" y1="604.04" x2="394.65" y2="604.04" />
//         <circle class="cls-3" cx="394.65" cy="623.04" r="14" />
//         <text class="cls-4" transform="translate(387.15 627.04)">
//           US
//         </text>
//         <path
//           id="path68"
//           class="cls-1"
//           d="M359,254a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M359,254a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M359,254h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="436.65" y1="642.04" x2="436.65" y2="642.04" />
//         <line class="cls-1" x1="436.65" y1="604.04" x2="436.65" y2="604.04" />
//         <circle class="cls-3" cx="436.65" cy="623.04" r="14" />
//         <text class="cls-4" transform="translate(429.15 627.04)">
//           US
//         </text>
//         <path
//           id="path69"
//           class="cls-5"
//           d="M401,254a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M401,254a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M401,254h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="478.65" y1="642.04" x2="478.65" y2="642.04" />
//         <line class="cls-5" x1="478.65" y1="604.04" x2="478.65" y2="604.04" />
//         <line class="cls-5" x1="478.65" y1="604.04" x2="478.65" y2="642.04" />
//         <circle class="cls-8" cx="478.65" cy="623.04" r="14" />
//         <path
//           id="path70"
//           class="cls-1"
//           d="M23,296a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M23,296a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M23,296h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="100.65" y1="684.04" x2="100.65" y2="684.04" />
//         <line class="cls-1" x1="100.65" y1="646.04" x2="100.65" y2="646.04" />
//         <circle class="cls-3" cx="100.65" cy="665.04" r="14" />
//         <text class="cls-4" transform="translate(93.15 669.04)">
//           US
//         </text>
//         <path
//           id="path71"
//           class="cls-1"
//           d="M65,296a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M65,296a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M65,296h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="142.65" y1="684.04" x2="142.65" y2="684.04" />
//         <line class="cls-1" x1="142.65" y1="646.04" x2="142.65" y2="646.04" />
//         <circle class="cls-3" cx="142.65" cy="665.04" r="14" />
//         <text class="cls-4" transform="translate(135.15 669.04)">
//           US
//         </text>
//         <path
//           id="path72"
//           class="cls-1"
//           d="M107,296a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M107,296a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M107,296h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="184.65" y1="684.04" x2="184.65" y2="684.04" />
//         <line class="cls-1" x1="184.65" y1="646.04" x2="184.65" y2="646.04" />
//         <circle class="cls-3" cx="184.65" cy="665.04" r="14" />
//         <text class="cls-4" transform="translate(177.15 669.04)">
//           US
//         </text>
//         <path
//           id="path73"
//           class="cls-1"
//           d="M149,296a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M149,296a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M149,296h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="226.65" y1="684.04" x2="226.65" y2="684.04" />
//         <line class="cls-1" x1="226.65" y1="646.04" x2="226.65" y2="646.04" />
//         <circle class="cls-3" cx="226.65" cy="665.04" r="14" />
//         <text class="cls-4" transform="translate(219.15 669.04)">
//           US
//         </text>
//         <path
//           id="path74"
//           class="cls-5"
//           d="M191,296a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M191,296a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M191,296h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="268.65" y1="684.04" x2="268.65" y2="684.04" />
//         <line class="cls-5" x1="268.65" y1="646.04" x2="268.65" y2="646.04" />
//         <line class="cls-5" x1="268.65" y1="646.04" x2="268.65" y2="684.04" />
//         <circle class="cls-3" cx="268.65" cy="665.04" r="14" />
//         <path
//           id="path75"
//           class="cls-1"
//           d="M233,296a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M233,296a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M233,296h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="310.65" y1="684.04" x2="310.65" y2="684.04" />
//         <line class="cls-1" x1="310.65" y1="646.04" x2="310.65" y2="646.04" />
//         <circle class="cls-8" cx="310.65" cy="665.04" r="14" />
//         <text class="cls-4" transform="translate(303.15 669.04)">
//           US
//         </text>
//         <path
//           id="path76"
//           class="cls-1"
//           d="M275,296a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M275,296a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M275,296h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="352.65" y1="684.04" x2="352.65" y2="684.04" />
//         <line class="cls-1" x1="352.65" y1="646.04" x2="352.65" y2="646.04" />
//         <circle class="cls-3" cx="352.65" cy="665.04" r="14" />
//         <text class="cls-4" transform="translate(345.15 669.04)">
//           US
//         </text>
//         <path
//           id="path77"
//           class="cls-1"
//           d="M317,296a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M317,296a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M317,296h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="394.65" y1="684.04" x2="394.65" y2="684.04" />
//         <line class="cls-1" x1="394.65" y1="646.04" x2="394.65" y2="646.04" />
//         <circle class="cls-3" cx="394.65" cy="665.04" r="14" />
//         <text class="cls-4" transform="translate(387.15 669.04)">
//           US
//         </text>
//         <path
//           id="path78"
//           class="cls-1"
//           d="M359,296a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M359,296a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M359,296h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="436.65" y1="684.04" x2="436.65" y2="684.04" />
//         <line class="cls-1" x1="436.65" y1="646.04" x2="436.65" y2="646.04" />
//         <circle class="cls-3" cx="436.65" cy="665.04" r="14" />
//         <text class="cls-4" transform="translate(429.15 669.04)">
//           US
//         </text>
//         <path
//           id="path79"
//           class="cls-5"
//           d="M401,296a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M401,296a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M401,296h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="478.65" y1="684.04" x2="478.65" y2="684.04" />
//         <line class="cls-5" x1="478.65" y1="646.04" x2="478.65" y2="646.04" />
//         <line class="cls-5" x1="478.65" y1="646.04" x2="478.65" y2="684.04" />
//         <circle class="cls-8" cx="478.65" cy="665.04" r="14" />
//         <path
//           id="path80"
//           class="cls-5"
//           d="M23,338a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M23,338a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M23,338h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="100.65" y1="726.04" x2="100.65" y2="726.04" />
//         <line class="cls-5" x1="100.65" y1="688.04" x2="100.65" y2="688.04" />
//         <line class="cls-5" x1="100.65" y1="688.04" x2="100.65" y2="726.04" />
//         <circle class="cls-3" cx="100.65" cy="707.04" r="14" />
//         <path
//           id="path81"
//           class="cls-1"
//           d="M65,338a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M65,338a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M65,338h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="142.65" y1="726.04" x2="142.65" y2="726.04" />
//         <line class="cls-1" x1="142.65" y1="688.04" x2="142.65" y2="688.04" />
//         <circle class="cls-8" cx="142.65" cy="707.04" r="14" />
//         <text class="cls-4" transform="translate(135.15 711.04)">
//           US
//         </text>
//         <path
//           id="path82"
//           class="cls-5"
//           d="M107,338a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M107,338a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M107,338h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="184.65" y1="726.04" x2="184.65" y2="726.04" />
//         <line class="cls-5" x1="184.65" y1="688.04" x2="184.65" y2="688.04" />
//         <line class="cls-5" x1="184.65" y1="688.04" x2="184.65" y2="726.04" />
//         <circle class="cls-3" cx="184.65" cy="707.04" r="14" />
//         <path
//           id="path83"
//           class="cls-1"
//           d="M149,338a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M149,338a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M149,338h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="226.65" y1="726.04" x2="226.65" y2="726.04" />
//         <line class="cls-1" x1="226.65" y1="688.04" x2="226.65" y2="688.04" />
//         <circle class="cls-3" cx="226.65" cy="707.04" r="14" />
//         <text class="cls-4" transform="translate(219.15 711.04)">
//           US
//         </text>
//         <path
//           id="path84"
//           class="cls-1"
//           d="M191,338a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M191,338a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M191,338h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="268.65" y1="726.04" x2="268.65" y2="726.04" />
//         <line class="cls-1" x1="268.65" y1="688.04" x2="268.65" y2="688.04" />
//         <circle class="cls-3" cx="268.65" cy="707.04" r="14" />
//         <text class="cls-4" transform="translate(261.15 711.04)">
//           US
//         </text>
//         <path
//           id="path85"
//           class="cls-5"
//           d="M233,338a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M233,338a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M233,338h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="310.65" y1="726.04" x2="310.65" y2="726.04" />
//         <line class="cls-5" x1="310.65" y1="688.04" x2="310.65" y2="688.04" />
//         <line class="cls-5" x1="310.65" y1="688.04" x2="310.65" y2="726.04" />
//         <circle class="cls-8" cx="310.65" cy="707.04" r="14" />
//         <path
//           id="path86"
//           class="cls-1"
//           d="M275,338a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M275,338a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M275,338h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="352.65" y1="726.04" x2="352.65" y2="726.04" />
//         <line class="cls-1" x1="352.65" y1="688.04" x2="352.65" y2="688.04" />
//         <circle class="cls-3" cx="352.65" cy="707.04" r="14" />
//         <text class="cls-4" transform="translate(345.15 711.04)">
//           US
//         </text>
//         <path
//           id="path87"
//           class="cls-1"
//           d="M317,338a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M317,338a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M317,338h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="394.65" y1="726.04" x2="394.65" y2="726.04" />
//         <line class="cls-1" x1="394.65" y1="688.04" x2="394.65" y2="688.04" />
//         <circle class="cls-3" cx="394.65" cy="707.04" r="14" />
//         <text class="cls-4" transform="translate(387.15 711.04)">
//           US
//         </text>
//         <path
//           id="path88"
//           class="cls-9"
//           d="M359,338a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-9"
//           d="M359,338a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M359,338h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-9" x1="436.65" y1="726.04" x2="436.65" y2="726.04" />
//         <line class="cls-9" x1="436.65" y1="688.04" x2="436.65" y2="688.04" />
//         <circle class="cls-3" cx="436.65" cy="707.04" r="14" />
//         <text class="cls-4" transform="translate(429.15 711.04)">
//           US
//         </text>
//         <path
//           id="path89"
//           class="cls-1"
//           d="M401,338a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M401,338a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M401,338h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="478.65" y1="726.04" x2="478.65" y2="726.04" />
//         <line class="cls-1" x1="478.65" y1="688.04" x2="478.65" y2="688.04" />
//         <circle class="cls-3" cx="478.65" cy="707.04" r="14" />
//         <text class="cls-4" transform="translate(471.15 711.04)">
//           US
//         </text>
//         <path
//           id="path90"
//           class="cls-1"
//           d="M23,380a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M23,380a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M23,380h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="100.65" y1="768.04" x2="100.65" y2="768.04" />
//         <line class="cls-1" x1="100.65" y1="730.04" x2="100.65" y2="730.04" />
//         <circle class="cls-3" cx="100.65" cy="749.04" r="14" />
//         <text class="cls-4" transform="translate(93.15 753.04)">
//           US
//         </text>
//         <path
//           id="path91"
//           class="cls-1"
//           d="M65,380a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M65,380a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M65,380h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="142.65" y1="768.04" x2="142.65" y2="768.04" />
//         <line class="cls-1" x1="142.65" y1="730.04" x2="142.65" y2="730.04" />
//         <circle class="cls-3" cx="142.65" cy="749.04" r="14" />
//         <text class="cls-4" transform="translate(135.15 753.04)">
//           US
//         </text>
//         <path
//           id="path92"
//           class="cls-5"
//           d="M107,380a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M107,380a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M107,380h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-5" x1="184.65" y1="768.04" x2="184.65" y2="768.04" />
//         <line class="cls-5" x1="184.65" y1="730.04" x2="184.65" y2="730.04" />
//         <line class="cls-5" x1="184.65" y1="730.04" x2="184.65" y2="768.04" />
//         <circle class="cls-3" cx="184.65" cy="749.04" r="14" />
//         <path
//           id="path93"
//           class="cls-1"
//           d="M149,380a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M149,380a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M149,380h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="226.65" y1="768.04" x2="226.65" y2="768.04" />
//         <line class="cls-1" x1="226.65" y1="730.04" x2="226.65" y2="730.04" />
//         <circle class="cls-8" cx="226.65" cy="749.04" r="14" />
//         <text class="cls-4" transform="translate(219.15 753.04)">
//           US
//         </text>
//         <path
//           id="path94"
//           class="cls-1"
//           d="M191,380a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M191,380a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M191,380h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="268.65" y1="768.04" x2="268.65" y2="768.04" />
//         <line class="cls-1" x1="268.65" y1="730.04" x2="268.65" y2="730.04" />
//         <circle class="cls-3" cx="268.65" cy="749.04" r="14" />
//         <text class="cls-4" transform="translate(261.15 753.04)">
//           US
//         </text>
//         <path
//           id="path95"
//           class="cls-9"
//           d="M233,380a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-9"
//           d="M233,380a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M233,380h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-9" x1="310.65" y1="768.04" x2="310.65" y2="768.04" />
//         <line class="cls-9" x1="310.65" y1="730.04" x2="310.65" y2="730.04" />
//         <circle class="cls-3" cx="310.65" cy="749.04" r="14" />
//         <text class="cls-4" transform="translate(303.15 753.04)">
//           US
//         </text>
//         <path
//           id="path96"
//           class="cls-1"
//           d="M275,380a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M275,380a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M275,380h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="352.65" y1="768.04" x2="352.65" y2="768.04" />
//         <line class="cls-1" x1="352.65" y1="730.04" x2="352.65" y2="730.04" />
//         <circle class="cls-3" cx="352.65" cy="749.04" r="14" />
//         <text class="cls-4" transform="translate(345.15 753.04)">
//           US
//         </text>
//         <path
//           id="path97"
//           class="cls-1"
//           d="M317,380a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M317,380a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M317,380h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="394.65" y1="768.04" x2="394.65" y2="768.04" />
//         <line class="cls-1" x1="394.65" y1="730.04" x2="394.65" y2="730.04" />
//         <circle class="cls-3" cx="394.65" cy="749.04" r="14" />
//         <text class="cls-4" transform="translate(387.15 753.04)">
//           US
//         </text>
//         <path
//           id="path98"
//           class="cls-1"
//           d="M359,380a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M359,380a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M359,380h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="436.65" y1="768.04" x2="436.65" y2="768.04" />
//         <line class="cls-1" x1="436.65" y1="730.04" x2="436.65" y2="730.04" />
//         <circle class="cls-3" cx="436.65" cy="749.04" r="14" />
//         <text class="cls-4" transform="translate(429.15 753.04)">
//           US
//         </text>
//         <path
//           id="path99"
//           class="cls-1"
//           d="M401,380a19,19,0,0,0,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-1"
//           d="M401,380a19,19,0,0,1,0,38"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M401,380h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="478.65" y1="768.04" x2="478.65" y2="768.04" />
//         <line class="cls-1" x1="478.65" y1="730.04" x2="478.65" y2="730.04" />
//         <circle class="cls-3" cx="478.65" cy="749.04" r="14" />
//         <text class="cls-4" transform="translate(471.15 753.04)">
//           US
//         </text>
//         <path
//           class="cls-1"
//           d="M159.59-277.15a19,19,0,0,0,19-19,19,19,0,0,0-19-19,19,19,0,0,0-19,19A19,19,0,0,0,159.59-277.15Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-1" x1="237.24" y1="72.89" x2="237.24" y2="72.89" />
//         <line class="cls-1" x1="237.24" y1="34.89" x2="237.24" y2="34.89" />
//         <g class="cls-10">
//           <circle class="cls-11" cx="237.24" cy="53.89" r="14" />
//         </g>
//         <path
//           id="path1-2"
//           data-name="path1"
//           class="cls-5"
//           d="M314.89-309.59a19,19,0,0,0-26.87,0,19,19,0,0,0,0,26.87"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-5"
//           d="M314.89-309.59a19,19,0,0,1,0,26.87,19,19,0,0,1-26.87,0"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M314.89-309.59h0L288-282.72h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-6" x1="277.8" y1="67.33" x2="277.8" y2="67.33" />
//         <line class="cls-6" x1="268.58" y1="216.48" x2="268.58" y2="216.48" />
//         <line class="cls-7" x1="392.54" y1="40.46" x2="365.67" y2="67.33" />
//         <circle class="cls-12" cx="379.11" cy="53.89" r="14" />
//         <text class="cls-13" transform="translate(212.65 10.28)">
//           current status
//         </text>
//         <text class="cls-13" transform="translate(0 10.28)">
//           assignment
//         </text>
//         <text class="cls-13" transform="translate(231.21 98.3)">
//           on
//         </text>
//         <circle class="cls-3" cx="29.03" cy="54.49" r="14" />
//         <circle class="cls-8" cx="101.25" cy="54.49" r="14" />
//         <path
//           id="path31-2"
//           data-name="path31"
//           class="cls-9"
//           d="M231.8-315.15a19,19,0,0,0-19,19,19,19,0,0,0,19,19"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-9"
//           d="M231.8-315.15a19,19,0,0,1,19,19,19,19,0,0,1-19,19"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-2"
//           d="M231.8-315.15h0v38h0Z"
//           transform="translate(77.65 350.04)"
//         />
//         <line class="cls-9" x1="309.45" y1="72.89" x2="309.45" y2="72.89" />
//         <line class="cls-9" x1="379.67" y1="34.89" x2="379.67" y2="34.89" />
//         <circle class="cls-12" cx="309.45" cy="53.89" r="14" />
//         <path
//           class="cls-14"
//           d="M-48.62-276.56a19,19,0,0,0,19-19,19,19,0,0,0-19-19,19,19,0,0,0-19,19A19,19,0,0,0-48.62-276.56Z"
//           transform="translate(77.65 350.04)"
//         />
//         <path
//           class="cls-14"
//           d="M23.6-276.56a19,19,0,0,0,19-19,19,19,0,0,0-19-19,19,19,0,0,0-19,19A19,19,0,0,0,23.6-276.56Z"
//           transform="translate(77.65 350.04)"
//         />
//         <text class="cls-13" transform="translate(0 93.15)">
//           assigned
//         </text>
//         <text class="cls-13" transform="translate(73.03 93.15)">
//           unassigned
//         </text>
//         <text class="cls-13" transform="translate(301.06 98.3)">
//           off
//         </text>
//         <text class="cls-13" transform="translate(349.91 98.3)">
//           abandoned
//         </text>
//         <line class="cls-15" x1="202.65" x2="202.65" y2="97.56" />
//       </StyledLegend>
//     );
//   }
// }

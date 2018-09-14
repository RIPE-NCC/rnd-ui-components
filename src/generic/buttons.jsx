import React from "react";
import styled from "styled-components";
import { StopCircle, Check } from "react-feather";

import {
  oimClouds,
  oimSilver,
  atlasDarkBlue,
  atlasGreen
} from "../themes/colors";

const StyledMinimalButton = styled.button`
  margin: 10px 0 0;
  padding: 0 12px 5px 12px;
  outline: none;
  border: 1px solid ${oimSilver};
  border-radius: 4px;
  background-color: inherit;
  font-size: 14px;
  font-weight: 200;
  /* border: ${props => props.outline && `1px solid ${atlasDarkBlue}`}; */
  color: ${props => (props.active && atlasGreen) || "white"};
  line-height: ${props => (props.stopicon && "28px") || "inherit"};
  /* background-color: ${oimClouds}; */

  &:hover {
    background-color: ${atlasDarkBlue};
    border: 1px solid ${atlasDarkBlue}
    color: white;
    cursor: ${props => (props.active && "pointer") || "inherit"};

    svg {
      stroke-width: 2px;
    }
  }

  svg {
    fill: none;
    stroke-width: 1px;
  }
`;

const StyledExtraAction = styled.div`
  color: ${props => (props.active && atlasGreen) || oimSilver};
  margin-top: 6px;

  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export class MinimalButton extends React.Component {
  render() {
    return [
      <StyledMinimalButton {...this.props}>
        {this.props.stopicon && (
          <StopCircle transform="translate(-4,7)" width="24" />
        )}
        {this.props.checkIcon && (
          <Check transform="translate(-4,7)" width="24" />
        )}
        {this.props.children}
      </StyledMinimalButton>,
      this.props.extraAction && (
        <StyledExtraAction active={this.props.active}>
          or <span className="extra-action">{this.props.extraAction.text}</span>
        </StyledExtraAction>
      )
    ];
  }
}

import React from "react";
import styled from "styled-components";
import { StopCircle, Check, XCircle, AlertCircle } from "react-feather";

import {
  oimClouds,
  oimSilver,
  atlasDarkBlue,
  atlasGreen,
  ripeMagenta,
  ripeSecLightGrey
} from "../themes/colors";

const StyledMinimalButton = styled.button`
  margin: 28px 0 0;
  padding: 4px 20px 14px 18px;
  outline: none;
  border: 0;
  border-radius: 0;
  background-color: ${atlasDarkBlue};
  font-size: 14px;
  font-weight: 200;
  /* border: ${props => props.outline && `1px solid ${atlasDarkBlue}`}; */
  color: ${props => (props.active && "white") || ripeSecLightGrey};
  line-height: ${props => (props.stopicon && "28px") || "inherit"};
  /* background-color: ${oimClouds}; */
  svg {
    stroke-width: 2px;
  }

  &:hover {
    background-color: ${atlasDarkBlue};
    /* border: 1px solid ${atlasDarkBlue}; */
    color: white;
    cursor: ${props => (props.active && "pointer") || "inherit"};

    svg {
      stroke-width: 2px;
    }
  }

  svg {
    fill: none;
    stroke-width: 2px;
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
    return (
      <div>
        <StyledMinimalButton {...this.props}>
          {this.props.stopicon && (
            <StopCircle transform="translate(-4,7)" width="24" />
          )}
          {this.props.checkIcon && (
            <Check transform="translate(-4,7)" width="24" />
          )}
          {this.props.cancelicon && (
            <XCircle transform="translate(-4,7)" width="24" strokeWidth="2" />
          )}
          {this.props.alerticon && (
            <AlertCircle
              transform="translate(-4,7)"
              width="24"
              strokeWidth="2"
            />
          )}
          {this.props.children}
        </StyledMinimalButton>
        {this.props.extraAction && (
          <StyledExtraAction active={this.props.active}>
            or{" "}
            <span className="extra-action">{this.props.extraAction.text}</span>
          </StyledExtraAction>
        )}
      </div>
    );
  }
}

const StyledLinkButton = styled.a`
  border: none;
  text-decoration-line: none;
  color: ${ripeMagenta};

  &:hover {
    text-decoration-line: underline;
  }
`;

export class LinkButton extends React.Component {
  render() {
    return (
      <StyledLinkButton
        className="link-button"
        href="#"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </StyledLinkButton>
    );
  }
}

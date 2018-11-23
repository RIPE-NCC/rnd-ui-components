import React from "react";
import styled from "styled-components";
import {
  lColor,
  fColor,
  oimAntracite,
  oimSilver,
  atlasGreen,
  atlasDarkBlue
} from "../themes/colors";

const StyledSimpleTag = styled.div`
  box-sizing: border-box;
  outline: 1px solid ${atlasGreen};
  outline-offset: ${props => (props.small && "1px") || "3px"};
  color: ${oimAntracite};
  /* background-color: white; */
  font-size: 14px;
  font-style: normal;
  display: ${props => props.inline && "inline-block"};
  /* height: ${props => (props.small && "24px") || "32px"}; */
  /* padding vertical needs to be 0, otherwise the expand button will drift */
  padding: ${props => (props.small && "0 6px 3px") || "0 6px"};
  margin: ${props => (props.small && "6px 3px") || "0 6px"};
  /* make the text baseline the exact middle of the box */
  vertical-align: middle;

  /* padding vertical is unacceptable if the tags are collapsed on a new line */
  @media (max-width: 766px) {
    margin: 12px 10px 3px 3px;
  }
`;

export class SimpleTag extends React.Component {
  render() {
    return (
      <StyledSimpleTag inline={this.props.inline} small={this.props.small}>
        {this.props.name}
      </StyledSimpleTag>
    );
  }
}

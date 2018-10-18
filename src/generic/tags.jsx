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
  border: 1px solid ${atlasGreen};
  font-size: 14px;
  font-style: normal;
  display: ${props => props.inline && "inline-block"};
  padding: 0px 6px;
  height: 21px;
  margin: ${props => props.inline && "0 0 4px 8px" || "5px 0"};
`;

export class SimpleTag extends React.Component {
  render() {
    return (
      <StyledSimpleTag inline={this.props.inline}>
        {this.props.name}
      </StyledSimpleTag>
    );
  }
}

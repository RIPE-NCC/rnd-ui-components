import React from "react";
import styled from "styled-components";
import { atlasSky } from "../themes/colors";

const StyledLegend = styled.div`
  background-color: ${atlasSky};
  padding: 12px 16px;
  /* margin-top: 42px; */
  margin: 0 24px 24px 0;
  width: 327px;
  font-size: 11.9px;
  text-rendering: geometricPrecision;

  label,
  legend {
    font-weight: 400;
    font-size: 11.9px;
  }

  .title {
    margin-bottom: 24px;
  }

  form {
    margin-bottom: 0;
  }

  .legend-extra {
    margin-top: 24px;
  }
`;

export class GenericLegend extends React.Component {
  render() {
    return (
      <StyledLegend>
        <div className="title">LEGEND & DISPLAY OPTIONS</div>
        {this.props.children}
      </StyledLegend>
    );
  }
}

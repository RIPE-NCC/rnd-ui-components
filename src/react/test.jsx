import React from "react";
import styled from "styled-components";
import { oimAntracite, oimMarkerYellow } from "../themes/colors";

const TestDiv = styled.div`
  font-size: 16px;
  font-family: "courier new", serif;
  color: ${oimMarkerYellow};
`;

export class TestComponent extends React.Component {
  render() {
    return <TestDiv className="test-component">hi fom ui-components</TestDiv>;
  }
}

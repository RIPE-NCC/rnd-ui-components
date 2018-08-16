import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { lColor, oimAntracite } from "../themes/colors";
import { stringify } from "querystring";

const StyledProperyBox = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 12px 0;
  color: ${oimAntracite};

  .name {
    color: ${props => (props.readOnly && lColor) || "black"};
    font-size: 14px;
  }
`;

const booleanOrNonExistingValueToString = props => {
  let stringValue = props.value;
  switch (props.value) {
    case false:
      stringValue = "FALSE";
      break;
    case true:
      stringValue = "TRUE";
      break;
    case null:
      stringValue = "-";
      break;
    case undefined:
      stringValue = "error displaying value";
      break;
  }
  return stringValue;
};

export class SinglePropertyBox extends React.Component {
  render() {
    const negateValue = !(this.props.type === "assertion"
      ? this.props.value === true
      : true);
    return (
      <StyledProperyBox readOnly={this.props.readOnly}>
        <li className="name">{`${(negateValue && "NOT ") || ""} ${
          this.props.name
        }`}</li>
        <li>{this.props.description}</li>
        <li>
          {this.props.type !== "assertion" &&
            booleanOrNonExistingValueToString(this.props)}
          {(this.props.isDefault && " [default]") || ""}
        </li>
      </StyledProperyBox>
    );
  }
}

SinglePropertyBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  isDefault: PropTypes.bool
};

SinglePropertyBox.defaultProps = {
  type: "string"
};

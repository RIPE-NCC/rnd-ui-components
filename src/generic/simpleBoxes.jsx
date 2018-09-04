import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { lColor, oimAntracite, oimSilver, atlasGreen } from "../themes/colors";
import { ToolTip } from "@ripe-rnd/ui-components";

const StyledProperyBox = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: ${props => (props.readOnly && "0 12px 0") || "12px 0"};
  margin: ${props => (props.readOnly && "12px 0 0 12px") || "0"};
  color: ${oimAntracite};

  border-left: ${props =>
    (props.readOnly && `1px solid ${oimSilver}`) || "inherit"};

  .name {
    color: ${props => (props.readOnly && oimSilver) || lColor};
    font-size: 14px;
  }

  .desc {
    color: "#dfdfdf";
    text-rendering: geometricPrecision;
    font-style: italic;
    font-weight: 100;
  }

  .is-default {
    color: ${atlasGreen};
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
      stringValue = "No value set and no default defined";
      break;
  }
  return stringValue;
};

export class SinglePropertyBox extends React.Component {
  render() {
    const negateValue = !(this.props.type === "assertion"
        ? this.props.value === true
        : true),
      negateName = this.props.negateName || `NOT ${this.props.name}`;
    let propArray = [].concat(this.props.value);
    return (
      <StyledProperyBox
        readOnly={this.props.readOnly}
        className={this.props.extraclasses}
      >
        {/* If we get a false value we either have a negateName and display that OR we display 'NOT <name>' */}
        <li className="name">{`${(negateValue && negateName) ||
          this.props.name}`}</li>
        <li className="desc">{this.props.description}</li>
        {this.props.type !== "assertion" &&
          propArray.map((p, i) => (
            <li
              key={`prop_${i}`}
              className={
                (this.props.isDefault &&
                  this.props.value !== undefined &&
                  "is-default") ||
                ""
              }
            >
              {booleanOrNonExistingValueToString({ ...this.props, value: p })}
              {(this.props.isDefault &&
                this.props.value !== undefined &&
                " [default]") ||
                ""}
            </li>
          ))}
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
    PropTypes.bool,
    PropTypes.array,
    PropTypes.element
  ]),
  isDefault: PropTypes.bool
};

SinglePropertyBox.defaultProps = {
  type: "string"
};

const StyledTimeStampBox = styled.div`
  display: ${props => (props.inline && "inline-grid") || "inline-block"};
  margin: 0;
  padding: 0;

  .tooltip {
    display: none;
    position: absolute;
    max-width: 210px;
    overflow: hidden;
    white-space: normal;
    background-color: black;
    color: white;
    padding: 18px;
  }

  .date-primary {
    padding-right: 0;
    cursor: pointer;
  }

  .date-primary:hover .tooltip {
    display: block;
  }
`;

export class TimeStampBox extends React.Component {
  representTimeStamp(ts) {
    if (!ts) {
      return null;
      Ì;
    }
    return {
      utc: new Date(parseInt(ts) * 1000).toISOString(),
      local: new Date(parseInt(ts) * 1000).toString()
    };
  }

  render() {
    const dateFmt = this.representTimeStamp(this.props.timeStamp);
    return (
      (!dateFmt && (
        <StyledTimeStampBox inline={this.props.inline}>-</StyledTimeStampBox>
      )) || (
        <StyledTimeStampBox inline={this.props.inline}>
          <div className="date-primary">
            {dateFmt.utc}
            <ToolTip className="tooltip" width={210} height={100}>
              {dateFmt.local}
            </ToolTip>
          </div>
        </StyledTimeStampBox>
      )
    );
  }
}

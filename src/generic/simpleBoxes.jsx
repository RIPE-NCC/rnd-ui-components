import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  lColor,
  fColor,
  oimAntracite,
  oimSilver,
  atlasGreen,
  atlasDarkBlue
} from "../themes/colors";
import { ToolTip } from "@ripe-rnd/ui-components";
import { Clock } from "react-feather";

const StyledProperyBox = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: ${props => (props.readOnly && "0 24px 0 12px") || "12px 32px 6px 0"};
  margin: ${props => (props.readOnly && "12px 0 12px 12px") || "0"};
  color: ${oimAntracite};

  border-left: ${props =>
    (props.readOnly && `1px solid ${oimSilver}`) || "inherit"};

    li {
      margin-left: 0;
    }

  .name {
    color: ${props =>
      (props.isEditable && atlasGreen) ||
      (props.readOnly && oimSilver) ||
      lColor};
    font-size: 14px;
  }

  .desc {
    /* color: "#dfdfdf"; */
    color: black;
    text-rendering: geometricPrecision;
    font-style: italic;
    font-weight: 100;
  }

  /* li.value {
    font-family: ${props =>
      (props.type === "integer" && '"Roboto mono","monospace"') || "inherit"};
    color: ${props => (props.isDefault && atlasGreen) || "inherit"};
  }

  .is-default {
    color: ${atlasGreen};
  } */
`;

const StyledValue = styled.li`
  font-family: ${props =>
    (props.type !== "text" &&
      ((typeof props.value === "string" ||
        typeof props.value === "number" ||
        typeof props.value === "boolean") &&
        '"Menlo","monospace"')) ||
    "inherit"};
  font-weight: ${props => (props.isDefault && "300") || "400"};

  /* div {
    font-family: ${props =>
      (props.type === "array" && '"Roboto mono","monospace"') || "inherit"};
  } */
`;

const booleanOrNonExistingValueToString = props => {
  let stringValue = props.value,
    annotation = null;
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
      annotation = "No value set and no default defined";
      break;
  }
  return [stringValue, annotation];
};

export class SinglePropertyBox extends React.Component {
  render() {
    const negateValue = !(this.props.type === "assertion"
        ? this.props.value === true
        : true),
      negateName = this.props.negateName || `NOT ${this.props.name}`;
    let propArray = [].concat(this.props.value),
      valueOrAnnotation = [this.props.value, this.props.annotation];
    return (
      <StyledProperyBox
        readOnly={this.props.readOnly}
        isEditable={this.props.isEditable}
        className={`${this.props.className} ${this.props.extraclasses || ""}`}
      >
        {/* If we get a false value we either have a negateName and display that OR we display 'NOT <name>' */}
        <li className="name">
          {(negateValue && negateName) || this.props.name}
        </li>
        <li className="desc">{this.props.description}</li>
        {this.props.type !== "assertion" &&
          propArray.map((p, i) => {
            valueOrAnnotation = booleanOrNonExistingValueToString({
              ...this.props,
              value: p
            });
            return (
              <StyledValue
                className="value"
                isDefault={this.props.isDefault}
                type={this.props.type}
                value={p}
                key={`prop_${i}`}
              >
                {valueOrAnnotation[0]}
                {(this.props.isDefault &&
                  this.props.value !== undefined &&
                  " (default)") ||
                  ""}
              </StyledValue>
            );
          })}
        {(this.props.annotation || valueOrAnnotation[1]) && (
          <li>({this.props.annotation || valueOrAnnotation[1]})</li>
        )}
      </StyledProperyBox>
    );
  }
}

SinglePropertyBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.element
  ]),
  annotation: PropTypes.string,
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
    font-family: ${props =>
      (!props.inline && '"Menlo", "monospace"') || "inherit"};
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

    const dateTime = new Date(parseInt(ts) * 1000);
    return {
      utc: dateTime
        .toUTCString()
        .split(", ")[1]
        .replace("GMT", "UTC"),
      local: dateTime.toString()
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
            {!this.props.inline && [
              <Clock
                size={21}
                key="c"
                strokeWidth={1}
                transform="translate(0,5)"
              />,
              " "
            ]}
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

export class RadioInputBox extends React.Component {
  render() {
    return (
      <form key="${this.props.id}_switch">
        <fieldset>
          <legend>
            {this.props.legend}
          </legend>
          {this.props.choices.map(i => {
            return (
              <div>
                <input
                  type="radio"
                  id={i.id}
                  name={i.name}
                  value={i.value}
                  onChange={this.props.onChange}
                  checked={this.props.checked == i.value}
                />
                <label htmlFor={i.name}>{i.name}</label>
              </div>
            );
          })}
        </fieldset>
      </form>
    );
  }
}

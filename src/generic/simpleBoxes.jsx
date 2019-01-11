import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  lColor,
  fColor,
  oimAntracite,
  oimSilver,
  atlasGreen,
  atlasOrange,
  ripeYellow,
  ripeSecLightGrey
} from "../themes/colors";
import { ToolTip, atlasDarkBlue } from "@ripe-rnd/ui-components";
import { Clock } from "react-feather";

const DEFAULT_COLOR = fColor;

const StyledProperyBox = styled.ul`
  list-style-type: none;
  padding: ${props =>
    (props.readOnly && "0 12px 0") || "0 32px 6px 0 !important"};
  /* unfortunately we need to override the template with !important here */
  margin: ${props => (props.readOnly && "0 !important") || "0"};
  /* margin-left: ${props => props.spanAllColumns && "6px !important"}; */
  max-width: ${props =>
    props.spanAllColumns &&
    "750px"}; /* ensure readability by wrapping too long texts */
  /* color: ${oimAntracite}; */

  border-left: ${props =>
    (props.readOnly && `1px solid ${oimSilver}`) || "inherit"};
  color: ${props => (props.isDefault && DEFAULT_COLOR) || oimAntracite};
  li {
      margin-left: 0;
  }

  .name {
    color: ${props =>
      (props.isEditable && atlasGreen) ||
      (props.readOnly && fColor) ||
      (props.isDefault && DEFAULT_COLOR) ||
      atlasOrange};
    font-size: 14px;
  }

  .desc {
    /* color: "#dfdfdf"; */
    color: ${props => (props.isDefault && DEFAULT_COLOR) || oimAntracite};
    text-rendering: geometricPrecision;
    /* font-style: italic; */
    font-weight: 100;
  }

  /* li.value {
    font-family: ${props =>
      (props.type === "integer" && '"Roboto mono","monospace"') || "inherit"};
    color: ${props => (props.isDefault && atlasGreen) || "inherit"};
  } */
`;

const StyledValue = styled.div`
  font-family: ${props =>
    (props.type !== "text" &&
      ((typeof props.value === "string" ||
        typeof props.value === "number" ||
        typeof props.value === "boolean") &&
        '"Menlo","monospace"')) ||
    "inherit"};
  font-weight: ${props => (props.isDefault && "300") || "400"};

  ${props =>
    props.asListItem &&
    "li {list-style-type: circle !important; display: list-item !important; list-style-position: inside !important; }"};
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
        isDefault={this.props.isDefault}
        isEditable={this.props.isEditable}
        spanAllColumns={this.props.spanAllColumns}
        className={`${this.props.className || ""} ${this.props.extraclasses ||
          ""}`}
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
                asListItem={this.props.valuesAsList}
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
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]), //.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.element
  ]),
  annotation: PropTypes.string,
  isDefault: PropTypes.bool,
  spanAllColumns: PropTypes.bool, // span the complete width of the grid
  valuesAsList: PropTypes.bool // render the value(s) with bullets
};

SinglePropertyBox.defaultProps = {
  type: "string",
  spanAllColumns: false,
  valuesAsList: false
};

const StyledTimeStampBox = styled.div`
  display: ${props => (props.inline && "inline-grid") || "inline-block"};
  margin: 0;
  padding: 0;
  font-size: 1em; /* make sure that we stick with the scaling set by the parent */
  /* position: relative; */

  h5 {
    font-size: 14px;
    font-weight: 100;
    margin: 0 0 -4px; /* margin-top will always be overridden by template override */
  }

  .ripe-rnd-tooltip {
    /* don't set height and width here 
      set in in the components prop
    */
    margin-top: ${props => (props.inline && "-159%") || "-112%"};
    display: none;
    overflow-y: visible;
    white-space: normal;
    /* background-color: black; */
    color: white;
    padding: 17px;
  }

  .date-primary {
    position: relative;
    box-sizing: border-box;
    padding-right: 0;
    cursor: pointer;
    font-family: ${props =>
      (!props.inline && '"Menlo", "monospace"') || "inherit"};
  }

  .date-primary:hover .ripe-rnd-tooltip {
    display: block;
  }

  .success {
    color: green;
  }
`;

export class TimeStampBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clipBoardCopied: false
    };
  }

  representTimeStamp(ts) {
    if (!ts) {
      return null;
    }

    const dateTime = new Date(parseInt(ts) * 1000);
    return {
      utcAsHuman: dateTime.toLocaleString("us", {
        timeZone: "UTC",
        timeZoneName: "short",
        hourCycle: "h24",
        weekday: "short",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      }),
      localAsHuman: dateTime.toLocaleString(
        // "us" here refers to the formatting style,
        // *NOT* the timezone.
        "us",
        {
          // not setting timeZone means it will use
          // the browser setting
          hourCycle: "h24",
          weekday: "short",
          day: "2-digit",
          month: "long",
          year: "numeric",
          timeZoneName: "short",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        }
      ),
      utcAsISO: dateTime.toISOString().replace(".000", "")
    };
  }

  copyTsToClipBoard = () => {
    console.log("copy to cb");
    navigator.clipboard.writeText(this.props.timeStamp);
    this.setState({ clipBoardCopied: true });
  };

  render() {
    const dateFmt = this.representTimeStamp(this.props.timeStamp);
    return (
      (!dateFmt && (
        <StyledTimeStampBox width={275} inline={this.props.inline}>
          -
        </StyledTimeStampBox>
      )) || (
        <StyledTimeStampBox inline={this.props.inline}>
          <div className="date-primary" onClick={this.copyTsToClipBoard}>
            <ToolTip
              className="ripe-rnd-tooltip"
              width={260}
              height={161}
              inline={this.props.inline}
            >
              <h5>UTC date and time</h5>
              <p>{dateFmt.utcAsHuman}</p>
              <h5>Local date and time</h5>
              <p>{dateFmt.localAsHuman}</p>
              <h5>UNIX Timestamp (seconds)</h5>
              <p>{this.props.timeStamp}</p>
              {(this.state.clipBoardCopied && (
                <div className="success">Timestamp copied to clipboard!</div>
              )) || <div>(click to copy timestamp to clipboard)</div>}
            </ToolTip>
            {!this.props.inline && [
              <Clock
                size={21}
                key="c"
                strokeWidth={1}
                transform="translate(0,5)"
              />,
              " "
            ]}
            {dateFmt.utcAsISO}
          </div>
        </StyledTimeStampBox>
      )
    );
  }
}

const StyledRadioInputBox = styled.form`
  color: ${props => (props.disabled && oimSilver) || oimAntracite};

  fieldset {
    border: none;
    padding-left: 0;
  }

  input {
    margin-left: 0;
    padding-left: 0;
    margin-right: 8px;
  }

  div {
    line-height: 1.8em;
  }
`;

const StyledCheckBox = styled.form`
  color: ${props => (props.disabled && oimSilver) || oimAntracite};

  fieldset {
    margin-bottom: 24px;

    label {
      margin-left: 10px;
    }
  }
`;

export class RadioInputBox extends React.Component {
  render() {
    return (
      <StyledRadioInputBox
        key="${this.props.id}_switch"
        disabled={this.props.disabled}
      >
        <fieldset>
          {this.props.legend && <legend>{this.props.legend}</legend>}
          {this.props.choices.map(i => {
            return (
              <div key={`in_${i.id}`}>
                <input
                  type="radio"
                  id={i.id}
                  name={i.name}
                  value={i.value}
                  onChange={this.props.onChange}
                  checked={this.props.checked == i.value}
                  disabled={this.props.disabled}
                />
                <label htmlFor={i.name}>{i.name}</label>
              </div>
            );
          })}
        </fieldset>
      </StyledRadioInputBox>
    );
  }
}

export class CheckBoxInput extends React.Component {
  render() {
    return (
      <StyledCheckBox disabled={this.props.disabled}>
        <fieldset>
          {this.props.legend && <legend>{this.props.legend}</legend>}
          <input
            type="checkbox"
            id={this.props.id}
            name={this.props.name || null}
            onChange={this.props.onChange}
            checked={this.props.value}
          />
          {this.props.name && (
            <label htmlFor={this.props.name}>{this.props.name}</label>
          )}
        </fieldset>
      </StyledCheckBox>
    );
  }
}

const StyledModal = styled.div`
  .box {
    z-index: 11;
    opacity: 1;
    font-family: "Open Sans", Arial, sans-serif;
    background-color: white;
    position: absolute;
    left: ${props => `calc(50% - ${(props.width && props.width / 2) || 0}px)`};
    width: ${props => (props.width && `${props.width}px`) || "unset"};
    height: ${props => (props.height && `${props.height}px`) || "unset"};
    top: ${props => `calc(50% - ${(props.height && props.height / 2) || 0}px)`};
    padding: 0;

    .title {
      padding: 20px;
      font-size: 16px;
      background-color: ${atlasDarkBlue};
      color: white;
    }

    .body,
    .footer {
      font-size: 14px;
      padding: 20px 20px 0;
      p {
        margin: 0;
      }
    }
  }

  .overlay {
    /* weird, but we need to cover the entire screen 
       not just the 100%, 100% of the parent Element.
       Note that we can't make this work by propagating
       this up to the root React element, because
       it would have to live directly under body,
       *not* under the React root element.
    */
    position: fixed;
    height: 3200%;
    width: 3200%;
    top: -800%;
    left: -800%;
    background-color: black;
    opacity: 0.5;
    z-index: 10;
  }
`;

export class ModalBox extends React.Component {
  render() {
    return (
      <>
        <StyledModal width={this.props.width} height={this.props.height}>
          <div className="overlay" />
          <div className="box">
            <div className="title">{this.props.title}</div>
            <div className="body">{this.props.body}</div>
            <div className="footer">{this.props.footer}</div>
          </div>
        </StyledModal>
      </>
    );
  }
}

ModalBox.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  dismissable: PropTypes.bool
};

ModalBox.defaultProps = {
  dismissable: true
};

const StyledInfoBox = styled.div`
  background-color: ${props =>
    (props.status === "success" && ripeYellow) || ripeSecLightGrey};
  /* color: ${props => props.status === "success" && "white"}; */
  padding: 12px;
  max-width: 90%;
`;

export class InfoBox extends React.Component {
  render() {
    return (
      <StyledInfoBox status={this.props.status}>
        {this.props.children}
      </StyledInfoBox>
    );
  }
}

InfoBox.propTypes = {
  status: PropTypes.string
};

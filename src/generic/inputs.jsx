import React from "react";
import styled from "styled-components";
import {
  ripeMagenta,
  oimCarrot,
  oimSilver,
  oimEmerald,
  oimAntracite,
  lColor
} from "../themes/colors";

const StyledTextInput = styled.div`
  width: 100%;
  min-width: 300px;
  font-size: 1em;

  label {
    color: ${ripeMagenta};
    margin-top: 15px;
    margin-bottom: 5px;
    max-width: 100%;
    display: inline-block;
    font-weight: 100;
  }

  input[type="text"],
  input[type="text"]:invalid {
    font-size: 1em;
    line-height: 1.5em;
    box-shadow: none;
    border-bottom: 1px solid ${oimSilver};
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    width: 100%;
    margin-bottom: 15px;
  }

  input[type="text"]:focus,
  input[type="text"]:hover {
    border-bottom: 1px solid ${lColor};
    color: ${oimAntracite};
  }

  .input-hint {
    font-size: 0.8em;
    color: ${oimSilver};
  }
`;

export class TextInput extends React.Component {
  /*
     *  This Component will output a valid, existing measurement id.
     *
     *  - Allows only for integer input
     *  - Checks the existence of the measurement id on the API together with the type
     *  - Needs a `valueHasChanged` property (normally set by the parent component) that propagates changes to the
     *    value to its parent component.
     *
     */
  constructor(props) {
    super(props);
    this.state = {
      isFocused: props.isFocused || false
      //updatedValue: this.props.updatedValue //,
      //defaultValue: this.props.defaultValue
    };
  }

  componentWillMount() {
    // setting state.value to null||undefined will have
    // react balk that the component went from controlled to uncontrolled,
    // therefore use ""
    this.props.defaultValue &&
      this.setState({ value: this.props.defaultValue || "" });
  }

  // updating `defaultValue` in a input component won't rerender,
  // updatedValue holds the value if the parent wants to update the value for the input
  componentWillReceiveProps(nextProps) {
    // const updatedValue = nextProps.updatedValue;
    // let newState = { updatedValue: nextProps.updatedValue };
    // if (this.state.defaultValue !== updatedValue) {
    //   newState = {
    //     ...newState,
    //     value: updatedValue,
    //     defaultValue: updatedValue
    //   };
    // }

    // if (!nextProps.updatedValue) {
    //     newState = {
    //       value: this.state.defaultValue,
    //       updatedValue: this.state.defaultValue
    //     }
    // }
    // this.setState(newState);
    if (nextProps.updatedValue && this.props.updatedValue !== this.props.defaultValue) {
      this.setState({
        value: nextProps.updatedValue
      });
    }
  }

  handleChange = event => {
    event.persist();
    this.setState({ value: event.target.value });
    // make the auto-completion lookup async,
    // so the user gets his own keystrokes in the input right away.
    setTimeout(() =>
      this.props.valueHasChanged(this.props.title || "key", event.target.value)
    );
  };

  focus = () => {
    this.setState({ isFocused: true });
  };

  looseFocus = () => {
    this.setState({ isFocused: false });
    this.props.closeSuggestionPane();
  };

  render() {
    return (
      <StyledTextInput
        className={"text-input" + ((this.state.isFocused && " focus") || "")}
      >
        <label>{this.props.title}</label>
        <input
          type="text"
          className={this.props.className}
          required="true"
          placeholder={this.props.placeHolder || ""}
          defaultValue={this.props.defaultValue}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="input-hint">
          {(this.state.value === "" && this.props.emptyHint) || ""}
        </div>
      </StyledTextInput>
    );
  }
}

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  ripeMagenta,
  oimCarrot,
  oimSilver,
  oimEmerald,
  oimAntracite,
  lColor,
  ripeDarkBlue,
  ripeRed,
  ripeGreen,
  ripeSupDarkGrey,
  oimUniverse,
  atlasFog
} from "../themes/colors";

import { RipePlusIcon } from "./icons.jsx";
import { Edit3, Check, X } from "react-feather";

const StyledTextInput = styled.form`
  position: relative;
  width: 100%;
  min-width: 300px;
  font-size: 1em;
  margin: 0;
  padding: 0;

  label {
    color: ${ripeMagenta};
    margin-top: 15px;
    margin-bottom: 5px;
    max-width: 100%;
    display: inline-block;
    font-weight: 100;
  }

  div.enterkeyhint {
    /* position: absolute; */
    font-size: 12px;
    color: ${ripeSupDarkGrey};
    margin-left: 12px;
    /* left: 13px; */
    /* bottom: -6px; */
  }

  input[type="text"],
  input[type="text"]:invalid {
    font-size: 1em;
    line-height: 1.5em;
    box-shadow: none;
    border: 1px solid ${oimSilver};
    /* border-top: none; */
    /* border-left: none; */
    /* border-right: none; */
    outline: none;
    width: 100%;
    margin-bottom: 0;
    margin-top: 6px;
    padding: 6px 12px;
    height: 36px;
    background-color: ${atlasFog};
    ${props => (props.underEdit && "padding-right: 79px") || "12px"};
  }

  input[type="text"]:focus,
  input[type="text"]:hover,
  input[type="text"].focus {
    border-bottom: 1px solid ${lColor};
    color: ${oimAntracite};
    background-color: white;
  }

  .input-hint {
    font-size: 0.8em;
    color: ${oimSilver};
  }

  svg[class*="-icon"] {
    /* take out bootstratp mangling */
    box-sizing: content-box;
    background-color: ${ripeDarkBlue};
    padding: 6px;
    stroke: white;
    position: absolute;
    /* right: -36px; */
    top: 6px;

    &:hover {
      cursor: pointer;
    }
  }

  svg.edit-icon {
    right: -36px;
    background-color: ${ripeDarkBlue};
  }

  svg.cancel-icon {
    right: 0;
    background-color: ${ripeRed};
  }

  svg.submit-icon {
    right: 36px;
    background-color: ${ripeGreen};
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
    this.inputRef = React.createRef();
    this.state = {
      underEdit: props.underEdit || false,
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-enterkeyhint
      // doesn't work yet on any browser apparantly, so we implement it in react here.
      enterkeyhint: null
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
    if (
      nextProps.updatedValue &&
      this.props.updatedValue !== this.props.defaultValue
    ) {
      this.setState({
        value: nextProps.updatedValue
      });
    }
  }

  handleChange = event => {
    event.persist();
    this.props.runOnFocus();

    if (event.target.value !== this.props.defaultValue) {
      this.props.runOnFocus();
      this.setState({ underEdit: true, value: event.target.value });
    } else {
      this.setState({ underEdit: false, value: event.target.value });
    }
    // make the auto-completion lookup async,
    // so the user gets his own keystrokes in the input right away.
    setTimeout(() => {
      if (this.props.valueHasChanged) {
        this.props.valueHasChanged(
          this.props.title || "key",
          event.target.value
        );
      }
    });
  };

  focus = () => {
    this.inputRef.current.focus();
    this.inputRef.current.select();
  };

  loseFocus = () => {
    this.setState({ underEdit: false });
    if (this.props.closeSuggestionPane) {
      this.props.closeSuggestionPane();
    }
  };

  discardInput = () => {
    this.setState({ value: this.props.defaultValue });
    this.loseFocus();
  };

  submitInput = e => {
    e.preventDefault();
    this.loseFocus();
    if (this.state.value !== this.props.defaultValue) {
      this.props.submit(this.state.value).then(
        success => {
          this.loseFocus();
        },
        failure => {
          this.setState({ underEdit: true });
          this.focus();
        }
      );
    }
  };

  render() {
    return (
      <StyledTextInput
        className={"text-input" + ((this.state.underEdit && " focus") || "")}
        underEdit={this.state.underEdit}
        onSubmit={this.submitInput}
        editicon
      >
        <label>{this.props.title}</label>
        <input
          type="text"
          className={`${this.props.className || ""} ${(this.state.underEdit &&
            " focus") ||
            ""}`}
          required="true"
          placeholder={this.props.placeHolder || ""}
          ref={this.inputRef}
          // using defaultValue causes the component to be uncontrolled,
          // we don't want that.
          //defaultValue={this.props.defaultValue}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="input-hint">
          {(this.state.value === "" && this.props.emptyHint) || ""}
        </div>
        {this.state.underEdit && (
          <>
            <Check
              className="submit-icon"
              onClick={this.submitInput}
            />
            <X
              className="cancel-icon"
              onClick={this.discardInput}
            />
          </>
        )}
        <Edit3
          className="edit-icon"
          onClick={this.focus}
        />
        {this.state.underEdit && (
          <div className="enterkeyhint">{this.props.enterkeyhint}</div>
        )}
      </StyledTextInput>
    );
  }
}

TextInput.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  // Make sure submit returns a Promise!
  submit: PropTypes.func.isRequired,
  enterkeyhint: PropTypes.string,
  // This is the function that gets run when
  // a TextInput gets focus. So things
  // like resetting warning|error boxes etc.
  runOnFocus: PropTypes.func
};

TextInput.defaultProps = {
  enterkeyhint: "enter will submit changes"
};

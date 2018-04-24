import React from "react";

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
    };
  }

  componentWillMount() {
    // setting state.value to null||undefined will have
    // react balk that the component went from controlled to uncontrolled,
    // therefore use ""
    this.props.defaultValue &&
      this.setState({ value: this.props.defaultValue || ""});
  }

  // updating `defaultValue` in a input component won't rerender,
  // updatedValue holds the value if the parent wants to update the value for the input
  componentWillReceiveProps(nextProps) {
    const updatedValue = nextProps.updatedValue;
    let newState = { updatedValue: nextProps.updatedValue };
    if (this.state.defaultValue !== updatedValue || !this.state.updatedValue) {
      newState = {
        ...newState,
        value: updatedValue,
        defaultValue: updatedValue
      };
    }
    this.setState(newState);
  }

  handleChange = (event) => {
    event.persist();
    this.setState({ value: event.target.value });
    // make the auto-completion lookup async,
    // so the user gets his own keystrokes in the input right away.
    setTimeout(() =>
      this.props.valueHasChanged(this.props.title || "key", event.target.value)
    );
  }

  focus = () => {
    this.setState({ isFocused: true });
  }

  looseFocus = () => {
    this.setState({ isFocused: false });
    this.props.closeSuggestionPane();
  }

  render() {
    return (
      <div
        className={"text-input" + ((this.state.isFocused && " focus") || "")}
      >
        <label>{this.props.title}</label>
        <input
          type="text"
          className={this.props.className}
          required="true"
          placeholder={this.props.placeHolder || ""}
          defaultValue={this.state.defaultValue}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="input-hint">
          {this.state.value === "" && this.props.emptyHint || ""}
        </div>
      </div>
    );
  }
}

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { keyframes } from "styled-components";

import Dialog from "./Dialog.jsx";
import { oimSilver } from "../themes/colors";

const indeterminateAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(300%);
  }
  100% {
    transform: translateX(0);
  }
`,
  StyledAnimatedStatusBar = styled.div`
    width: 100%;
    height: 3px;
    background-color: ${props => {
      if (props.isLoading) {
        return oimSilver;
      }
      switch (props.status) {
        case "success":
          return "green";
          break;
          break;
        case "error":
          return "red";
          break;
      }
    }}
    background-image: none;
    animation: ${props =>
      (props.isLoading && `${indeterminateAnimation} 2s linear infinite`) ||
      `none`};
    height: 3px;
    width: 25%;
`;

function progressIndeterminateWithDismissButton(DialogComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: this.props.isOpen || true
      };
    }

    getIsVisibleClassName() {
      return (!!this.props.status && "show") || "hidden";
    }

    closeDialog = e => {
      e && e.stopPropagation(e);
      this.setState({ isOpen: false });
      this.props.close(); // callback for THIS dialog
      this.props.onClose && this.props.onClose(); // callback for the parent element
    };

    componentWillReceiveProps(nextProps) {
      if (this.props.closeOnSuccess && nextProps.status === "success") {
        window.setTimeout(() => {
          this.closeDialog();
        }, 2000);
      }
    }

    render() {
      let title = this.props.status,
        isVisibleClassName = this.getIsVisibleClassName(),
        body = (
          <span key="statusMessage">
            {this.props.successMessage ||
              this.props.messages[this.props.status] ||
              "unknown status"}
          </span>
        ),
        footer = (
          <div className="context-dialog-footer">
            {(!this.props.closeOnSuccess && (
              <button onClick={this.closeDialog}>DISMISS</button>
            )) ||
              (this.props.status === "success" && this.props.messages.success)}
          </div>
        ),
        progress = (
          <div
            className={
              (this.props.isLoading && "progress-indeterminate") ||
              (this.props.status === "error" && "progress-error") ||
              (this.props.status === "success" && "progress-success") ||
              ""
            }
          >
            <StyledAnimatedStatusBar
              status={this.props.status}
              isLoading={this.props.isLoading}
            />
          </div>
        );

      return (
        <DialogComponent
          className={isVisibleClassName}
          title={title}
          footer={footer}
          progress={progress}
          {...this.props}
        >
          {body}
        </DialogComponent>
      );
    }
  };
}

Dialog.propTypes = {
  status: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  messages: PropTypes.object,
  isLoading: PropTypes.bool
};

export default progressIndeterminateWithDismissButton(Dialog);

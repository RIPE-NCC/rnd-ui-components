import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  ripeMagenta,
  oimCarrot,
  oimSilver,
  oimEmerald,
  lColor
} from "../themes/colors";

const StyledDialogDiv = styled.div`
  position: ${props => (props.type === "popup" && "absolute") || "inherit"};
  margin-top: ${props => (props.type === "popup" && "65px") || "inherit"};
  background-color: white;
  line-height: 1.5em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  min-width: 250px;
  max-width: 95%;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  
  .dot {
    height: 16px;
    width: 16px;
    border-radius: 12px;
    position: relative;
    top: 0;
    left: -6px;
    padding: 0px;
    background-color: transparent;
    border: 1px solid @oim-silver;

    &.locating {
      background-color: ${ripeMagenta};
    }

    &.cannot-locate {
      background-color: ${oimCarrot};
    }

    &.located {
      background-color: ${oimEmerald};
    }
  }

  &.compact-header > .context-dialog-header {
    padding: 12px 24px 0;
  }
  .context-dialog:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .context-dialog-footer {
    text-align: right;
    padding: 0 12px 24px;
  }

  .context-dialog-body {
    //.context-dialog-footer {
    //padding: 10px 24px 15px;
    padding: 12px 24px;

    li.reverse-dns,
    li.ip {
      word-break: break-all;
    }
  }

  .context-dialog-label {
    color: @oim-antracite;
    width: initial;
    float: right;
    margin: 0;
    padding: 0;
  }

  .check-label {
    padding-left: 15px;
  }

  h4 {
    font-size: 13px;
    color: ${oimSilver};
  }

  h5 {
    font-size: 13px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    //color: ${lColor};

    .context-menu-icon {
      position: absolute;
      top: 12px;
      right: 18px;
    }

    .icon-hover-only {
      display: none;
    }
  `;

const DialogHeader = styled.div`
  padding: 12px 24px;
  //margin: 5px 0 10px;
  font-size: 13px;
  color: #bdc3c7;
`;

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id || this.props.title,
      childValues: {}
    };
  }

  render() {
    let classes = this.props.className || "";
    return (
      <StyledDialogDiv
        type={this.props.type}
        className={`${classes} context-dialog ${(this.props.center &&
          "center") ||
          ""}`}
        key={"sub-item-" + this.props.id}
      >
        <DialogHeader>
          <h5>
            {this.props.title} <span>{this.props.annotations}</span>
          </h5>
        </DialogHeader>
        {this.props.children && (
          <div className="context-dialog-body">{this.props.children}</div>
        )}
        {this.props.footer}
        {this.props.progress}
      </StyledDialogDiv>
    );
  }
}

Dialog.propTypes = {
  footer: PropTypes.object,
  progress: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  annotations: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  onToggle: PropTypes.func
};

export default Dialog;

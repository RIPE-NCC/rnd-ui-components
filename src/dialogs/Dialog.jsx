import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  ripeMagenta,
  oimCarrot,
  oimSilver,
  oimEmerald,
  lColor,
  fColor,
  atlasRed,
  oimAntracite,
  atlasOrange,
  atlasFog,
  atlasMist
} from "../themes/colors";

const ExpStyledDialog = styled.div`
  background-color: ${atlasFog};
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */

  /* &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  } */

  position: ${props => (props.type === "popup" && "absolute") || "inherit"};
  margin-top: ${props => (props.type === "popup" && "65px") || "inherit"};
  /* background-color: white; */
  line-height: 1.5em;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  min-width: 250px;
  max-width: 100%;
  /* margin-bottom: -10px; */
  font-family: "Open Sans", Helvetica, Arial, "sans-serif";
  font-size: 14px;
  display: grid;

  .annotations {
    font-style: normal;
  }

  /* show an extra bar to the left, so that 
     the on-hover bar appears inside the complete bar
  */ 
  margin-left: 8px;
  box-shadow: ${props =>
    `-8px 0 ${(props.status === "success" && "green") || atlasMist}`};

  /* This is not an actual shadow, but an orange bar on the left */
  ${props =>
    props.expandable &&
    `&:not(.expanded):hover {
    margin-left: 8px;
    box-shadow: -8px 0 ${atlasOrange}
    }`};

  &.expanded {
    margin-left: 2px;
    box-shadow: -2px 0 ${atlasOrange};
  }
`;

const ExpDialogHeader = styled.div`
  background-color: ${atlasMist};
  padding: 12px 24px;
  /* margin: 5px 0 10px; */
  /* margin-bottom: 3px; */
  font-size: 14.3px;
  color: #bdc3c7;

  li.title {
    font-size: 14.3px;
    color: ${oimAntracite};
    width: 220px;
  }

  ul.title-line li {
    display: inline-block;
  }

  h5 {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    color: ${fColor};
  }
`;

const StyledDialogDiv = styled.div`
  position: ${props => (props.type === "popup" && "absolute") || "inherit"};
  margin-top: ${props => (props.type === "popup" && "65px") || "inherit"};
  background-color: white;
  line-height: 1.5em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  min-width: 250px;
  max-width: 100%;
  margin-bottom: -10px;
  font-family: "Open Sans", Helvetica, Arial, "sans-serif";
  font-size: 14px;
  display: grid;

  .error-text {
    color: ${atlasRed};
  }

  &.expanded {
    margin-bottom: 10px;
    //margin-top: 10px;
  }

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
    border: 1px solid ${oimSilver};

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
    font-size: 14px;
    color: ${oimSilver};
  }

  h5 {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    //color: ${lColor};

    .context-menu-icon {
      position: absolute;
      //top: 12px;
      right: 18px;
      margin-top: -11px;
    }

    .icon-hover-only {
      display: none;
    }
  `;

const DialogHeader = styled.div`
  padding: 12px 24px;
  margin: 5px 0 10px;
  font-size: 14px;
  color: #bdc3c7;
`;

const StyledDialogBody = styled.div`
  font-size: 14px;
  margin-left: 24px;
  padding-top: 8px;
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
      <ExpStyledDialog
        expandable={this.props.expandable}
        status={this.props.status}
        type={this.props.type}
        className={`${classes} ${(this.props.expanded && "expanded") ||
          ""} context-dialog ${(this.props.center && "center") || ""}`}
        key={"sub-item-" + this.props.id}
      >
        {this.props.title && (
          <ExpDialogHeader expanded={this.props.expanded}>
            <h5>
              {this.props.title} <span>{this.props.annotations}</span>
            </h5>
          </ExpDialogHeader>
        )}
        {this.props.children && (
          <StyledDialogBody className="context-dialog-body">
            {this.props.children}
          </StyledDialogBody>
        )}
        {this.props.footer}
        {this.props.progress}
      </ExpStyledDialog>
    );
  }
}

Dialog.propTypes = {
  footer: PropTypes.object,
  progress: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  annotations: PropTypes.string,
  expanded: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  onToggle: PropTypes.func
};

export default Dialog;

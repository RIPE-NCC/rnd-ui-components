import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import {
  ripeMagenta,
  oimCarrot,
  oimSilver,
  oimEmerald,
  oimClouds,
  lColor
} from "../themes/colors";

import { dismissButton } from "../generic/md.jsx";

/* To be able to have both sloppy clicked elements and accurately clicked elements only
 * 
 * sloppy: where people click either the menuButton icon or the line of text, OR
 * if there's no icon you can use this component.
 * accurate: where the user can only click the button to activate the submenu
 * 
 * props:
 * activateClick: if true the props.onClick gets attached to the component
 * 
 * returns:
 * <li> with all props except activateClick and onClick based on props.activateClick
 * 
 */
export class AccuracyLi extends React.Component {
  render() {
    let onClick = this.props.onClick,
      { activateClick: deleted, onClick: deleted2, ...newState } = this.props;
    return (
      (this.props.activateClick && (
        <StyledMenuItem {...newState} onClick={onClick} />
      )) || <StyledMenuItem {...newState} />
    );
  }
}

AccuracyLi.propTypes = {
  activateClick: PropTypes.bool.isRequired
};

export class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
      contextButton: props.contextButton
    };

    this.hide = this.hide.bind(this);
    this.unfreezeAndClose = this.unfreezeAndClose.bind(this);
  }

  toggleVisibility(e) {
    e.stopPropagation();
    !this.props.isFrozen && this.setState({ isOpen: !this.state.isOpen });
    !this.props.isFrozen && this.props.toggleMenuItem();
    this.setState({ hideTitle: false });
    this.props.onMaximise();
  }

  hide(e) {
    e.stopPropagation();
    !this.props.isFrozen && this.setState({ isOpen: false });
    !this.props.isFrozen && this.props.hideMenuItem();
  }

  unfreezeAndClose() {
    this.setState({
      isOpen: false,
      isFrozen: false
    });
    this.props.hideMenuItem();
  }

  render() {
    let contextButton = this.state.contextButton,
      classNames = this.props.className;
    classNames += this.state.contextButton && " context-menu ";
    return (
      <div
        className={`menu-button ${this.props.className || ""}`}
        onClick={e => this.toggleVisibility(e)}
      >
        <svg>
          <circle cx="12" cy="12" r="20" fill="white" stroke="none">
            <title>more</title>
          </circle>
          {this.props.contextButton}
        </svg>
        {this.state.isOpen && (
          <ul className={`sub-item-list ${this.props.buttonPlacement}`}>
            {React.Children.map(this.props.children, (child, idx) => {
              return React.cloneElement(child, {
                onClose: this.unfreezeAndClose
              });
            })}
          </ul>
        )}
      </div>
    );
  }
}

MenuButton.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]), // not required, for showing only icon-based dropdown menus
  annotations: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  contextButton: PropTypes.element,
  buttonPlacement: PropTypes.string,
  accuracyClick: PropTypes.bool, // accurate click only enabled
  isFrozen: PropTypes.bool,
  isOpen: PropTypes.bool,
  hideOnMouseLeave: PropTypes.bool,
  toggleMenuItem: PropTypes.func.isRequired,
  hideMenuItem: PropTypes.func.isRequired
};

MenuButton.defaultProps = {
  hideOnMouseLeave: true,
  buttonPlacement: "right",
  accuracyClick: false
};

const StyledMenuItem = styled.div`
  list-style-type: none;
`;

const StyledTitleLine = styled.ul`
  padding: 0 0 0 0;
  margin: 2px 0;
  text-align: left;
  vertical-align: top;
  //margin-left: 0;
  //padding-left: 0;
  max-width: 95%;

  li {
    /* thanks template.css, I have to make
    sure you're not messing up my display setting here */
    display: inline-block !important;
    vertical-align: middle;
    padding-bottom: 0px;
    padding-right: 16px;
  }

  li.title {
    display: inline-block !important;
    vertical-align: middle;
    padding-bottom: 0px;
    padding-right: 16px;
  }

  .annotations {
    font-style: italic;
    font-size: 14px;
    color: #2a2a2a;
    text-overflow: ellipsis;
    max-width: 69%;
    white-space: nowrap;
    overflow: hidden;
    float: right;
  }

  .context-menu-icon:hover {
    cursor: pointer;
    border-radius: 12px;
    background-color: ${oimClouds};
  }
`;

export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
      contextButton: props.contextButton,
      hideTitle: false
    };
  }

  toggleVisibility = e => {
    e.stopPropagation();
    !this.props.isFrozen && this.setState({ isOpen: !this.state.isOpen });
    !this.props.isFrozen && this.props.toggleMenuItem();
    // Doesn't matter if it's visible or not
    // if the hamburger gets clicked show siblings
    this.setState({ hideTitle: false });
    //this.props.onMaximise(); // propagate to siblings
  };

  hide = e => {
    e.stopPropagation();
    !this.props.isFrozen && this.setState({ isOpen: false });
    !this.props.isFrozen && this.props.hideMenuItem();
  };

  unfreezeAndClose = () => {
    this.setState({
      isOpen: false,
      isFrozen: false
    });
    this.props.hideMenuItem();
  };

  onMinimise = e => {
    e.stopPropagation();
    this.setState({
      hideTitle: true
    });
    this.props.onMinimise(); // propagate to parent
  };

  onMaxmimalise = e => {
    e.stopPropagation();
    this.setState({
      hideTitle: false
    });
    this.props.onMaxmimalise();
  };

  render() {
    let contextButton = this.state.contextButton;
    return (
      <AccuracyLi
        className={`${this.props.className || ""} ${(this.state.contextButton &&
          "context-menu") ||
          ""} menu-item`}
        onClick={e => this.toggleVisibility(e)}
        activateClick={!this.props.accuracyClick}
        onMouseLeave={e =>
          this.state.isOpen && this.props.hideOnMouseLeave && this.hide(e)
        }
      >
        <StyledTitleLine className="title-line">
          {this.props.showDot && (
            <li
              className={`dot ${this.props.dotStyle || ""}`}
              style={
                (this.props.dotColor && {
                  backgroundColor: this.props.dotColor
                }) ||
                {}
              }
            />
          )}{" "}
          {this.props.buttonPlacement === "left" && (
            <AccuracyLi
              className="menu-button"
              onClick={e => this.toggleVisibility(e)}
              activateClick={this.props.accuracyClick}
            >
              {this.state.contextButton}
            </AccuracyLi>
          )}
          <li className="title">{this.props.title}</li>
          {this.props.annotations && (
            <li className="annotations">{this.props.annotations}</li>
          )}
          {this.props.onMinimise && (
            <li onClick={e => this.onMinimise(e)}>{dismissButton}</li>
          )}
          {this.props.buttonPlacement === "right" && (
            <li>{this.state.contextButton}</li>
          )}
          {this.state.isOpen && (
            <ul className={`sub-item-list ${this.props.buttonPlacement}`}>
              {React.Children.map(this.props.children, child => {
                return React.cloneElement(child, {
                  onClose: this.unfreezeAndClose
                });
              })}
            </ul>
          )}
        </StyledTitleLine>
      </AccuracyLi>
    );
  }
}

MenuItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]), // not required, for showing only icon-based dropdown menus
  annotations: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  contextButton: PropTypes.element,
  buttonPlacement: PropTypes.string,
  onMinimise: PropTypes.func,
  onMaxmimalise: PropTypes.func,
  accuracyClick: PropTypes.bool, // accurate click only enabled
  isFrozen: PropTypes.bool,
  isOpen: PropTypes.bool,
  hideOnMouseLeave: PropTypes.bool,
  toggleMenuItem: PropTypes.func.isRequired,
  hideMenuItem: PropTypes.func.isRequired
};

MenuItem.defaultProps = {
  hideOnMouseLeave: true,
  buttonPlacement: "right",
  accuracyClick: false
};

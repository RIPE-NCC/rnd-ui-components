import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { UpArrow, DownArrow, MenuButton } from "../generic/md.jsx";

import Dialog from "../dialogs/Dialog.jsx";
import { MenuItem } from "../menus/MenuItem.jsx";

import {
  indeterminateAnimation,
  StyledAnimatedStatusBar
} from "../dialogs/progressIndeterminateDialog";

const StyledExpansionPanelItem = styled.div`
  /* override template h5 */
  h5 {
    margin: 0 !important;
  }

  .title-line {
    line-height: 21px;
  }
`;

export class ExpansionPanelItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: props.showDetail
    };
  }

  toggleMenuItem = () => {
    this.setState({ showDetail: !this.state.showDetail });
  };

  componentWillReceiveProps(nextProps) {
    // Reset the showDetail state to the props every time
    // the component gets rendered.
    this.setState({
      showDetail:
        (!this.state.showDetail && nextProps.showDetail) ||
        this.state.showDetail
    });
  }

  hideMenuItem() {
    this.setState({ showDetail: false });
  }

  toggleExpandedItem() {}

  hideExpandedItem() {}

  makeTitle() {
    return (
      <MenuItem
        title={this.props.title}
        annotations={this.props.annotations}
        contextButton={this.props.expandable && DownArrow}
        accuracyClick={!this.props.expandable}
        showDot={this.props.showDot}
        dotColor={this.props.dotColor}
        dotStyle={this.props.dotStyle}
        toggleMenuItem={this.toggleMenuItem}
        hideMenuItem={this.hideMenuItem}
        hideOnMouseLeave={false}
      />
    );
  }

  render() {
    const className = `${(this.state.showDetail && "expanded") ||
        "collapsed"} ${this.props.className || ""}`,
      expandedTitle = (
        <MenuItem
          title={this.props.expandedTitle || "SUMMARY"}
          contextButton={UpArrow}
          hideOnMouseLeave={false}
          toggleMenuItem={this.toggleMenuItem}
          hideMenuItem={this.hideMenuItem}
        />
      );
    return (
      <StyledExpansionPanelItem>
        <Dialog className={className} title={this.makeTitle()} />
        {this.state.showDetail &&
          ((!this.props.doNotInlineChildren && (
            <Dialog
              //className={`generic-card col-md-12`}
              title={expandedTitle}
              footer={this.props.footer}
              expanded={this.state.showDetail}
              progress={this.props.progress}
            >
              {this.props.children}
            </Dialog>
          )) ||
            this.props.children)}
      </StyledExpansionPanelItem>
    );
  }
}

function createExpansionPanelItemWithStatus(ExpansionPanelItemComponent) {
  return class extends React.Component {
    render() {
      return (
        <ExpansionPanelItemComponent
          {...this.props}
          progress={
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
          }
        />
      );
    }
  };
}

export const ExpansionPanelItemWithStatus = createExpansionPanelItemWithStatus(
  ExpansionPanelItem
);

ExpansionPanelItem.propTypes = {
  title: PropTypes.string.isRequired,
  expandedTite: PropTypes.string,
  expandable: PropTypes.bool,
  annotations: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  doNotInlineChildren: PropTypes.bool
};

ExpansionPanelItem.defaultProps = {
  expandable: true
};

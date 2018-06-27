import React from "react";
import styled from "styled-components";

import { UpArrow, DownArrow, MenuButton } from "../generic/md.jsx";

import Dialog from "../dialogs/Dialog.jsx";
import { MenuItem } from "../menus/MenuItem.jsx";

//const StyledExpansionPanelItem = styled.div``;

export class ExpansionPanelItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: props.showDetail
    };
  }

  componentWillReceiveProps(nextProps) {
    // Reset the showDetail state to the props every time
    // the component gets rendered.
    this.setState({
      showDetail:
        (!this.state.showDetail && nextProps.showDetail) ||
        this.state.showDetail
    });
  }

  toggleTraceroute() {
    this.setState({ showDetail: !this.state.showDetail });
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
        contextButton={DownArrow}
        showDot={this.props.showDot}
        dotColor={this.props.dotColor}
        dotStyle={this.props.dotStyle}
        toggleMenuItem={this.toggleTraceroute.bind(this)}
        hideMenuItem={this.hideMenuItem.bind(this)}
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
          toggleMenuItem={this.toggleExpandedItem.bind(this)}
          hideMenuItem={this.hideExpandedItem.bind(this)}
        />
      );
    return (
      <div>
        <Dialog
          className={className}
          title={this.makeTitle()}
        />
        {this.state.showDetail && (
          <Dialog
            //className={`generic-card col-md-12`}
            title={expandedTitle}
            footer={this.props.footer}
            expanded={this.state.showDetail}
          >
            {this.props.children}
          </Dialog>
        )}
      </div>
    );
  }
}

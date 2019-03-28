import React from "react";

import Dialog from "./Dialog.jsx";

import { lowScoreTreshold, highScoreTreshold } from "~/app/config/openipmap";

function withConfirmDeny(Dialog) {
  return class extends React.Component {
    render() {
      return (
        <Dialog
          title={<div>{this.props.titleIcon || ""} LOCATION SCORE</div>}
          footer={
            <div className="context-dialog-footer">
              <button onClick={this.props.onDismiss}>DISMISS</button>
            </div>
          }
          className="generic-card confirm-location-card"
          {...this.props}
        >
          {(this.props.score > highScoreTreshold - 2 &&
            `There is a high likelihood that this is the actual location.`) ||
            (this.props.locationImpossible &&
              `Openipmap calculated that this location is highly likely wrong based on rtt to the IP address and the location of the source`) ||
            (this.props.score > lowScoreTreshold &&
              `OpenIPMap has calculated that the likelihood of this being the actual location is around ${this
                .props.score}%.`) ||
            (!this.props.score &&
              "Openipmap has not been able to verify this user supplied IP location.") ||
            "The likelihood of this being the correct location is very low. You should not consider this an accurate estimate."}
        </Dialog>
      );
    }
  };
}

export default withConfirmDeny(Dialog);

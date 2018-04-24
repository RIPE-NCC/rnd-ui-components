import React from "react";

//import { transformHostLocationToGeoLocation } from "~/app/models/geotraceroute";
import Dialog from "../dialogs/Dialog.jsx";
import { TextInput } from "../generic/inputs.jsx";
import SuggestionPane from "../generic/SuggestionPane.jsx";

//import { makeSuggestionArray } from "../../suggestionengine";
//import suggesters from "../../suggestionengine/suggesters";

//import { lowScoreTreshold } from "~/app/config/openipmap";

const EditCountryDialog = DialogComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        host: props.host,
        childValues: {},
        isActive: true,
        suggestionPaneOpen: (!props.host.location && true) || false,
        filteredSuggestions: null,
        currentLocation: props.host.location || null,
        selectedLocation: null,
        countryBlanked: false,
        submitButtonText: "CONFIRM"
      };

      this.suggestions = makeSuggestionArray({
        suggesters: [
          suggesters.dummySuggester //,
          //suggesters.geoProximitySuggester
        ],
        queryData: { host: props.host, traceroute: props.traceroute }
      });
    }

    componentWillMount() {
      this.setState({
        filteredSuggestions:
          (!this.props.host.location && this.suggestions) || null
      });
    }

    closeSuggestionPane = () => {
      this.setState({
        suggestionPaneOpen: false //,
        //selectedLocation: this.props.host.location
      });
    };

    openSuggestionPane = () => {
      this.setState({ suggestionPaneOpen: true });
    };

    onSubmit = e => {
      e.stopPropagation();
      this.setState({
        suggestionPaneOpen: false
      });

      // A filter suggestion was picked. submit it.
      if (this.state.selectedLocation) {
        // location changed, so reset score to null, since we don't
        // know if it actually makes sense
        console.log("changed the location, reset score and persist");
        this.props.onSubmit({ ...this.state.selectedLocation, score: null });
      } else if (
        !this.state.childValues.City &&
        !this.state.childValues.Country
      ) {
        console.log(
          "Nothing changed, so this is a confirmation of suggested location"
        );
        // Do not reset the score!
        // This is a reinforcement of the actual score,
        // so likely to go up.
        // The score gets boosted to be over the lowScore treshold (not persisted!),
        // to remove the warning.
        //
        // TODO: make update score mechanism server->client
        this.props.onSubmit({
          // currentLocation is not in geotraceroute format (no coords)
          // so look them up before sending
          ...transformHostLocationToGeoLocation({
            location: this.state.currentLocation.id,
            locationType: this.state.currentLocation.properties.type
          }),
          score:
            (this.props.host.score > lowScoreTreshold &&
              this.props.host.score) ||
            lowScoreTreshold + 1
        });
      } else {
        // something was typed in any of the intputs. check it.
        if (
          this.state.filteredSuggestions.length > 0 &&
          this.state.filteredSuggestions[0].suggestions.length === 1
        ) {
          console.log("one entry left; use it");
          const newLocation = this.state.filteredSuggestions[0].suggestions[0];
          this.setState({
            currentLocation: newLocation,
            selectedLocation: newLocation
          });
          // submit and set score to null,
          // so the ?-mark is shown on the score popup.
          this.props.onSubmit({ ...newLocation, score: null });
        }
      }
    };

    onCancel = e => {
      e.stopPropagation();
      this.setState({
        openSuggestionPane: false,
        selectedLocation: this.props.host.location
      });
      this.props.onCancel();
    };

    // This function basically puts the user picked
    // location into state.currentLocation, which is
    // the location to persist/confirm.
    // So this function does not persis anything on its own.
    changeLocation = newLocation => {
      console.log("suggestion picked");
      console.log(newLocation);

      // `leftover` keyings by the user saved
      // before cleaning the state.
      const otherLocationType = { Country: "City", City: "Country" }[
          this.state.childValues.currentLocationType
        ],
        otherSnippet = this.state.childValues[otherLocationType];

      this.setState({
        currentLocation: newLocation,
        selectedLocation: newLocation,
        childValues: {},
        submitButtonText:
          ((this.props.host.location &&
            this.props.host.location.properties.id) !==
            (newLocation && newLocation.properties.id) &&
            "SUBMIT") ||
          "CONFIRM"
      });

      if (otherSnippet) {
        this.valueHasChanged(otherLocationType, otherSnippet);
      } else {
        this.closeSuggestionPane();
      }
    };

    valueHasChanged = (k, v) => {
      // The country was blanked by the user,
      // reset the selectedLocation and start from scratch.
      // if (v === "" && k === "Country") {
      //   console.log("country blanked");
      //   this.setState({
      //     //currentLocation: this.props.location || null,
      //     selectedLocation: null
      //   });
      // }

      // If the user wants to select a new city, although
      // a city was already selected earlier (state.selectedLocation is set)
      // reset the selectedSelection, so the suggestions will be populated.
      if (k === "City") {
        this.setState({ selectedLocation: null });
      }

      // Filter out the entries from the global suggestions that are not matching with user input
      let filteredSuggestions = this.suggestions
        .map(so => {
          const suggestions = so.suggestions.filter(s =>
            s.content.match(new RegExp(v, "i"))
          );
          return (
            (suggestions.length > 0 && {
              ...so,
              suggestions: suggestions
            }) ||
            null
          );
        })
        .filter(s => s);

      // If all places are filtered out fall back to 'normal' autocomplete on string match.
      if (filteredSuggestions.length === 0 && v.length > 0) {
        filteredSuggestions = makeSuggestionArray({
          suggesters: [suggesters.stringMatchFromBeginSuggester],
          queryData: {
            searchString: v,
            locationType: k.toLocaleLowerCase(),
            searchContext: {
              ...this.state.childValues,
              selectedLocation: this.state.selectedLocation,
              location: this.state.currentLocation
            },
            host: this.props.host,
            traceroute: this.props.traceroute
          }
        });
      }

      filteredSuggestions &&
        this.setState({
          suggestionPaneOpen: true,
          filteredSuggestions: filteredSuggestions
        });

      // always save the actual typed values of all textinputs in the component state.
      this.setState({
        childValues: {
          ...this.state.childValues,
          [k]: v,
          currentLocationType: k
        }
      });
    };

    render() {
      const host = this.props.host,
        currentLocation = this.state.currentLocation,
        selectedLocation = this.state.selectedLocation,
        footer = (
          <div className="context-dialog-footer">
            <button onClick={this.onCancel}>CANCEL</button>
            <button onClick={this.onSubmit}>
              {this.state.submitButtonText}
            </button>
          </div>
        ),
        progress = (
          <div
            className={
              (this.props.isLoading && "progress-indeterminate") ||
              (this.props.status === "error" && "progress-error") ||
              (this.props.status === "success" && "progress-success")
            }
          >
            <div className="bar" />
          </div>
        );
      return (
        <DialogComponent
          title="EDIT HOST LOCATION"
          footer={footer}
          className="generic-card location-card"
          {...this.props}
        >
          <div className={this.props.isExpanded && "col-md-4"}>
            <h4>HOST</h4>
            <ul>
              <li className="ip">{host.ip}</li>
              {(host.reverseDns && (
                <li className="reverse-dns">
                  {host.reverseDns && host.reverseDns.complete}
                </li>
              )) || <li>REVERSE DNS NOT AVAILABLE</li>}
              {host.isIxp && "This is a host inside a well known IXP LAN"}
            </ul>
            <h4>CURRENT LOCATION</h4>
            <ul>
              <TextInput
                title="City"
                defaultValue={
                  (currentLocation && currentLocation.properties.cityName) || ""
                }
                updatedValue={
                  (selectedLocation && selectedLocation.properties.cityName) ||
                  this.state.childValues["City"] ||
                  ""
                }
                closeSuggestionPane={this.closeSuggestionPane}
                valueHasChanged={this.valueHasChanged}
                emptyHint={"Type a city name".concat(
                  ((this.state.selectedLocation || this.state.location) &&
                    " or space") ||
                    ""
                )}
              />
              <TextInput
                title="Country"
                defaultValue={
                  (currentLocation &&
                    currentLocation.properties.countryNameLong) ||
                  ""
                }
                // update the value in the textinput if the user is typing a new
                // countryname/code
                // it the user is typing a city, do not update the country
                updatedValue={
                  (selectedLocation &&
                    selectedLocation.properties.countryNameLong) ||
                  this.state.childValues["Country"] ||
                  (currentLocation &&
                    currentLocation.properties.countryNameLong) ||
                  ""
                }
                valueHasChanged={this.valueHasChanged}
                emptyHint="Type a country name, country code or space"
                closeSuggestionPane={this.closeSuggestionPane}
              />
              {this.state.suggestionPaneOpen &&
                this.state.filteredSuggestions && (
                  <SuggestionPane
                    suggestionArray={this.state.filteredSuggestions}
                    confirmSuggestion={this.changeLocation}
                    closeSuggestionPane={this.closeSuggestionPane}
                  />
                )}
            </ul>
          </div>
        </DialogComponent>
      );
    }
  };
};

export default EditCountryDialog(Dialog);

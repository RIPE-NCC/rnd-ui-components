import React from "react";
import PropTypes from "prop-types";

import { TextInput } from "../generic/inputs.jsx";
import SuggestionPane from "../generic/SuggestionPane.jsx";

class CountryAutoCompleteInPut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionPaneOpen: false,
      selectedLocation: null
    };
  }

  suggestions = [
    {
      suggestions: this.props.countries.map(c => ({
        ...c,
        content: `${c.properties.countryNameLong} (${c.properties.countryCode})`
      }))
    }
  ];

  changeCountry = newLocation => {
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
      childValues: {}
    });

    if (otherSnippet) {
      this.valueHasChanged(otherLocationType, otherSnippet);
    } else {
      this.closeSuggestionPane();
    }

    //this.closeSuggestionPane();
    this.props.onSubmit(newLocation);
  };

  valueHasChanged = (k, v) => {
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

  openSuggestionPane = () => {
    this.setState({ suggestionPaneOpen: true });
  };

  closeSuggestionPane = () => {
    console.log("no more suggestions");
    this.setState({ suggestionPaneOpen: false});
  };

  render() {
    return (
      <div>
        <TextInput
          title="Country"
          defaultValue={this.props.initialCountry.properties.countryNameLong}
          valueHasChanged={this.valueHasChanged}
          updatedValue={
            (this.state.selectedLocation &&
              this.state.selectedLocation.properties.countryNameLong) ||
            this.props.initialCountry.properties.countryNameLong
          }
          emptyHint={this.props.emptyHint}
          closeSuggestionPane={this.closeSuggestionPane}
        />
        {this.state.suggestionPaneOpen &&
          this.state.filteredSuggestions && (
            <SuggestionPane
              suggestionArray={this.state.filteredSuggestions}
              confirmSuggestion={this.changeCountry}
              closeSuggestionPane={this.closeSuggestionPane}
            />
          )}
      </div>
    );
  }
}

CountryAutoCompleteInPut.propTypes = {
  // all the countries that will be showed in the auto-complete,
  // must be in the format: [ {properties}, {properties}], ie
  // the `geometries` field of the countries geoJSON.
  countries: PropTypes.array.isRequired,
  initialCountry: PropTypes.object.isRequired,
  emptyHint: PropTypes.string,
  // the callback that fires when a new country was entered successfully
  onSubmit: PropTypes.func 
};

// CountryAutoCompleteInPut.defaultProps = {
//   emptyHint: "type a country name, a country code or a space"
// };

export default CountryAutoCompleteInPut;

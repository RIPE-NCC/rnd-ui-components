import React from "react";

class SuggestionPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSuggestion: props.selectedSuggestion || null
    };

    this.selectItem = this.selectItem.bind(this);
  }

  stepSuggestion = step => {
    const fSuggestionArray = this.props.suggestionArray
      .map(so => so.suggestions)
      .reduce((fmap, suggestions) => fmap.concat(suggestions), []),
      // curIdx en newIdx are 1-based to avoid having to check for one of them being zero separately.
      curIdx =
        (this.state.selectedSuggestion &&
          fSuggestionArray.indexOf(this.state.selectedSuggestion) + 1) ||
        null,
      newIdx =
        (!curIdx && 1) ||
        (1 <= curIdx + step &&
          curIdx + step <= fSuggestionArray.length &&
          curIdx + step) ||
        curIdx;
    this.setState({ selectedSuggestion: fSuggestionArray[newIdx - 1] });
  };

  // This uses the "transform-class-properties" babel plugin
  // to avoid using .bind(this)
  // in which case you cannot remove the eventListener.
  _keyHandler = e => {
    e.stopPropagation();
    switch (e.keyCode) {
      case 40: // arrow down
        e.preventDefault();
        this.stepSuggestion(+1);
        break;

      case 38: // arrow up
        e.preventDefault();
        this.stepSuggestion(-1);
        break;

      case 27: //escape
        e.preventDefault();
        this.props.closeSuggestionPane.bind(this)();
        break;

      case 13: //enter
        e.stopPropagation();
        e.preventDefault();
        this.props.confirmSuggestion.bind(this)(this.state.selectedSuggestion);
    }
  };

  componentWillMount() {
    document.addEventListener("keydown", this._keyHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._keyHandler);
  }

  stopHover(e) {
    e.stopPropagation();
    this.setState({ selectedSuggestion: null });
  }

  startHover(e, selectedSuggestion) {
    e.stopPropagation();
    this.setState({ selectedSuggestion: selectedSuggestion });
  }

  selectItem(e) {
    e.stopPropagation();
    this.props.confirmSuggestion.bind(this)(this.state.selectedSuggestion);
  }

  render() {
    return (
      <div className="suggestion-pane">
        {this.props.suggestionArray.map((l, l_idx) => (
          <div key={`sug_id_${l_idx}`} className="suggester">
            <span key={`h_${l_idx}`} className="suggestion-hint">
              {l.desc}
            </span>
            <ul className="sub-item-list" key={l.desc}>
              {l.suggestions.map(s => (
                <li
                  key={l_idx + "_" + s.properties.id}
                  onMouseLeave={e => this.stopHover(e)}
                  onMouseEnter={e => this.startHover(e, s)}
                  onClick={e => this.selectItem(e)}
                  className={
                    (this.state.selectedSuggestion === s && "hover") || ""
                  }
                >
                  {s.content}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default SuggestionPane;

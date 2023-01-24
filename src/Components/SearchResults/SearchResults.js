import React, { Component } from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.SearchResults} onAdd={this.props.onAdd} />
      </div>
    );
  }
}

console.log(this.props.SearchResults);

export default SearchResults;
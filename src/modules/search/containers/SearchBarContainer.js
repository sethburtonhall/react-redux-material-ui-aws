import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);

    const searchData = {
      searchString: '',
    };

    const suggestions = [];

    this.state = {
      keywordString: null,
      searchData,
      searchOpen: false,
      suggestions,
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSuggestionSelect = this.handleSuggestionSelect.bind(this);
    this.handleUnfocus = this.handleUnfocus.bind(this);
  }

  async componentDidMount() {
    const suggestions = [];

    if (suggestions.length > 0) {
      this.setState({
        suggestions,
      });
    }
  }

  handleSearchChange(name, event, newValue) {
    if (event.target.value !== undefined) {
      const { searchData } = this.state;

      this.setState({
        searchData: {
          ...searchData,
          [name]: newValue,
        },
      });
    }
  }

  async handleSuggestionSelect(event, suggestion) {
    if (event !== undefined) {
      event.preventDefault();
    }

    const { callback } = this.props;

    const { searchData } = this.state;

    if (callback === null) {
      this.setState({
        keywordString: suggestion.value,
        searchData: {
          ...searchData,
          searchString: '',
        },
        searchOpen: false,
      });
    } else {
      await callback(suggestion);

      this.setState({
        searchData: {
          ...searchData,
          searchString: '',
        },
      });
    }
  }

  handleUnfocus(event) {
    if (event.target.value === '' || event.target.value.match(/  +/g)) {
      return;
    }

    const { searchData } = this.state;

    this.setState({
      keywordString: event.target.value,
      searchData: {
        ...searchData,
        searchString: '',
      },
      searchOpen: false,
    });
  }

  render() {
    const { callback } = this.props;

    const { keywordString } = this.state;

    if (callback === null) {
      if (keywordString !== null) {
        window.location.pathname = `/Search/${keywordString}`;
      }
    }

    return (
      <SearchBar
        data={this.state}
        handleSearchChange={this.handleSearchChange}
        handleSuggestionSelect={this.handleSuggestionSelect}
        handleUnfocus={this.handleUnfocus}
      />
    );
  }
}

SearchBarContainer.defaultProps = {
  callback: null,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);

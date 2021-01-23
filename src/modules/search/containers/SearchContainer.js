import React, { Component } from 'react';

import { connect } from 'react-redux';

import Loading from '../../core/components/Loading';
import Search from '../components/Search';
import SearchActions from '../../../state/reducers/search/SearchActions';

// import { sortObjectByProperty } from '../../core/helpers/Sorting';
import { getText } from '../../core/helpers/Texts';

class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchActive: true,
      searchResults: null,
      searchString: '',
    };

    this.retrieveSearchResults = this.retrieveSearchResults.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;

    if (match !== undefined) {
      const { searchString } = match.params;

      if (searchString !== undefined) {
        await this.retrieveSearchResults(searchString);
      }
    }
  }

  async componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (match !== undefined) {
      const { searchString } = match.params;

      if (searchString !== prevProps.match.params.searchString && searchString !== undefined) {
        this.setState(
          {
            searchActive: true,
          },
          async () => {
            await this.retrieveSearchResults(searchString);
          }
        );
      }
    }
  }

  async retrieveSearchResults(searchString) {
    const searchParameters = {};

    const { resetSearch, search } = this.props;

    await resetSearch();

    await search(searchParameters);

    const { searchResponse } = this.props;

    if (searchResponse.search.status === 200) {
    } else {
    }

    this.setState({
      searchActive: false,
      searchString,
    });
  }

  render() {
    const { searchResponse } = this.props;

    const { searchActive } = this.state;

    const numberOfResults = null;

    return (
      <>
        {searchActive || searchResponse.search.loading || numberOfResults === null ? (
          <Loading message={getText('SEARCH', 'SEARCH_PROCESSING')} />
        ) : (
          <Search data={this.state} numberOfResults={numberOfResults} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResponse: state.search,
});

const mapDispatchToProps = (dispatch) => ({
  resetSearch: () => SearchActions.resetSearch(dispatch),
  search: (data) => SearchActions.search(dispatch, data),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

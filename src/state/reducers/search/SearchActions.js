import Axios from 'axios';

import EndPoints from '../../../modules/core/helpers/EndPoints';
import SearchTypes from './SearchTypes';

const SearchActions = {
  async resetSearch(dispatch) {
    dispatch({
      type: SearchTypes.RESET_SEARCH,
    });
  },

  async search(dispatch, data) {
    dispatch({
      type: SearchTypes.SEARCH,
    });

    return Axios.post(EndPoints.search, data)
      .then((response) =>
        dispatch({
          data: response.data.data,
          message: response.data.response,
          status: response.status,
          type: SearchTypes.SEARCH_SUCCESS,
        })
      )
      .catch((error) =>
        dispatch({
          data: null,
          message: error.response.data.response,
          status: error.response.status,
          type: SearchTypes.SEARCH_FAILURE,
        })
      );
  },
};

export default SearchActions;

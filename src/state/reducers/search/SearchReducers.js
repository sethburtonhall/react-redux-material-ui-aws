import CoreTypes from '../core/CoreTypes';
import SearchTypes from './SearchTypes';

const initialState = {
  search: {
    data: null,
    loading: false,
    message: null,
    status: null,
  },
};

const SearchReducers = (state = initialState, action) => {
  switch (action.type) {
    case CoreTypes.RESET_APP:
      return {
        ...initialState,
      };
    case SearchTypes.RESET_SEARCH:
      return {
        ...state,
        search: initialState.search,
      };
    case SearchTypes.SEARCH:
      return {
        ...state,
        search: {
          ...state.search,
          loading: true,
        },
      };
    case SearchTypes.SEARCH_FAILURE:
      return {
        ...state,
        search: {
          ...state.search,
          loading: false,
          message: action.message,
          status: action.status,
        },
      };
    case SearchTypes.SEARCH_SUCCESS:
      return {
        ...state,
        search: {
          data: action.data,
          loading: false,
          message: action.message,
          status: action.status,
        },
      };
    default:
      return state;
  }
};

export default SearchReducers;

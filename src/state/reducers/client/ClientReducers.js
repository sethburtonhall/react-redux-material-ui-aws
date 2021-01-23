// import ClientTypes from './ClientTypes';
import CoreTypes from '../core/CoreTypes';

const initialState = {};

const ClientReducers = (state = initialState, action) => {
  switch (action.type) {
    case CoreTypes.RESET_APP:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default ClientReducers;

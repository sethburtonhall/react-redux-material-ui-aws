import CoreTypes from '../core/CoreTypes';
// import SessionTypes from './SessionTypes';

const initialState = {};

const SessionReducers = (state = initialState, action) => {
  switch (action.type) {
    case CoreTypes.RESET_APP:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default SessionReducers;

import CoreTypes from '../core/CoreTypes';
// import ScheduleTypes from './ScheduleTypes';

const initialState = {};

const ScheduleReducers = (state = initialState, action) => {
  switch (action.type) {
    case CoreTypes.RESET_APP:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default ScheduleReducers;

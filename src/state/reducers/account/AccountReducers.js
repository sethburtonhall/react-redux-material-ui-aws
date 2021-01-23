import AccountTypes from './AccountTypes';
import CoreTypes from '../core/CoreTypes';

const initialState = {
  accountInfo: {
    data: null,
    loading: false,
    message: null,
    status: null,
  },
};

const AccountReducers = (state = initialState, action) => {
  switch (action.type) {
    case AccountTypes.UPDATE_SIGNUP_FORM:
      return {
        ...state,
        accountInfo: {
          ...state.accountInfo,
        },
      };
    case AccountTypes.CREATE_ACCOUNT:
      return {
        ...state,
        accountInfo: {
          ...state.accountInfo,
          loading: true,
        },
      };
    case AccountTypes.CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        accountInfo: {
          ...state.accountInfo,
          loading: false,
          message: action.message,
          status: action.status,
        },
      };
    case AccountTypes.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        accountInfo: {
          data: action.data,
          loading: false,
          message: action.message,
          status: action.status,
        },
      };
    case AccountTypes.LOGIN:
      return {
        ...state,
        accountInfo: {
          ...state.accountInfo,
          loading: true,
        },
      };
    case AccountTypes.LOGIN_FAILURE:
      return {
        ...state,
        accountInfo: {
          ...state.accountInfo,
          loading: false,
          message: action.message,
          status: action.status,
        },
      };
    case AccountTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        accountInfo: {
          data: action.data,
          loading: false,
          message: action.message,
          status: action.status,
        },
      };
    }
    case AccountTypes.LOGOUT:
      return {
        ...state,
        accountInfo: {
          ...state.accountInfo,
          loading: true,
        },
      };
    case AccountTypes.LOGOUT_FAILURE:
      return {
        ...state,
        accountInfo: {
          ...state.accountInfo,
          loading: false,
          message: action.message,
          status: action.status,
        },
      };
    case AccountTypes.LOGOUT_SUCCESS:
      return {
        accountInfo: {
          data: null,
          loading: false,
          message: action.message,
          status: action.status,
        },
      };
    case AccountTypes.RESEND_VERIFICATION:
      return {
        ...state,
        accountInfo: {
          ...state.accountInfo,
          loading: true,
        },
      };
    case AccountTypes.RESEND_VERIFICATION_FAILURE:
      return {
        ...state,
        accountInfo: {
          ...state.accountInfo,
          loading: false,
          message: action.message,
          status: action.status,
        },
      };
    case AccountTypes.RESEND_VERIFICATION_SUCCESS:
      return {
        ...state,
        accountInfo: {
          data: action.data,
          loading: false,
          message: action.message,
          status: action.status,
        },
      };
    case CoreTypes.RESET_APP:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default AccountReducers;

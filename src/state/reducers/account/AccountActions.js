import Axios from 'axios';

import AccountTypes from './AccountTypes';
import EndPoints from '../../../modules/core/helpers/EndPoints';

const AccountActions = {
  async createAccount(dispatch, data) {
    dispatch({
      type: AccountTypes.CREATE_ACCOUNT,
    });

    return Axios.post(EndPoints.createAccount, data)
      .then((response) =>
        dispatch({
          data: response.data.data,
          message: response.data.response,
          status: response.status,
          type: AccountTypes.CREATE_ACCOUNT_SUCCESS,
        })
      )
      .catch((error) =>
        dispatch({
          data: null,
          message: error.response.data.response,
          status: error.response.status,
          type: AccountTypes.CREATE_ACCOUNT_FAILURE,
        })
      );
  },

  async login(dispatch, data) {
    dispatch({
      type: AccountTypes.LOGIN,
    });

    return Axios.post(EndPoints.login, data)
      .then((response) =>
        dispatch({
          data: response.data.data,
          message: response.data.response,
          status: response.status,
          type: AccountTypes.LOGIN_SUCCESS,
        })
      )
      .catch((error) =>
        dispatch({
          data: null,
          message: error.response.data.response,
          status: error.response.status,
          type: AccountTypes.LOGIN_FAILURE,
        })
      );
  },

  async logout(dispatch, data) {
    dispatch({
      type: AccountTypes.LOGOUT,
    });

    return Axios.post(EndPoints.logout, data)
      .then((response) =>
        dispatch({
          data: response.data.data,
          message: response.data.response,
          status: response.status,
          type: AccountTypes.LOGOUT_SUCCESS,
        })
      )
      .catch((error) =>
        dispatch({
          data: null,
          message: error.response.data.response,
          status: error.response.status,
          type: AccountTypes.LOGOUT_FAILURE,
        })
      );
  },

  async resendVerification(dispatch, data) {
    dispatch({
      type: AccountTypes.RESEND_VERIFICATION,
    });

    return Axios.post(EndPoints.resendVerification, data)
      .then((response) =>
        dispatch({
          data: null,
          message: response.data.response,
          status: response.status,
          type: AccountTypes.RESEND_VERIFICATION_SUCCESS,
        })
      )
      .catch((error) =>
        dispatch({
          data: null,
          message: error.response.data.response,
          status: error.response.status,
          type: AccountTypes.RESEND_VERIFICATION_FAILURE,
        })
      );
  },

  // ForgotPassword - fires off to the back end, verifys email, send reset password email - entry into database table random token,
  // generate account action,
  // nothing changes to account if they don't reset
  // link sent to email is good for 24 hours
  // reset password link, make sure token is valid, asks security questions
  // generate token
  // load token
  // load security questions
  // show questions
  // validate answers
  // then force reset password through authentication server
  // redirect to login
  // how to delete hash when expired
  // prompt security questions, more secure, if not then resets go to email which could be hacked.
  // account action system
  // cronjob system
  // look into when someone starts a process, store in table, account id, hash, use table to orchestrate when people start to do things. more secure and fairly mature
};

// export { FormAction, AccountActions };
export default AccountActions;

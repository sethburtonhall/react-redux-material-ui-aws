// import Axios from 'axios';

import CoreTypes from './CoreTypes';
// import EndPoints from '../../../modules/core/helpers/EndPoints';

const CoreActions = {
  async resetApp(dispatch) {
    dispatch({
      type: CoreTypes.RESET_APP,
    });
  },

  async resetAuthRedirect(dispatch) {
    dispatch({
      type: CoreTypes.RESET_AUTH_REDIRECT,
    });
  },

  async resetLastPage(dispatch) {
    dispatch({
      type: CoreTypes.RESET_LAST_PAGE,
    });
  },

  async storeAuthRedirect(dispatch, data) {
    dispatch({
      data,
      type: CoreTypes.STORE_AUTH_REDIRECT,
    });
  },

  async storeLastPage(dispatch, data) {
    dispatch({
      data,
      type: CoreTypes.STORE_LAST_PAGE,
    });
  },
};

export default CoreActions;

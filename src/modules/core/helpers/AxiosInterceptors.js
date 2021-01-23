import Axios from 'axios';
import Cookies from 'universal-cookie';

import EndPoints from './EndPoints';

import { getText } from '../helpers/Texts';

Axios.defaults.timeout = 120 * 1000;

// only goes through if user is authenticated and if front end expects to get credentials/cookies back
const credentialedAPIs = [
  EndPoints.createAccount,
  EndPoints.login,
  EndPoints.logout,
  EndPoints.search,
];

// will go through and resolves no matter what. Anynoymous.
const whitelistedAPIs = [
  EndPoints.createAccount,
  EndPoints.login,
  EndPoints.logout,
  EndPoints.resendVerification,
  EndPoints.search,
  EndPoints.test,
  EndPoints.video,
];

const checkURLMatch = (urlToMatch, apiList) => {
  for (let listIndex = 0; listIndex < apiList.length; listIndex += 1) {
    if (urlToMatch === apiList[listIndex]) {
      return true;
    }
  }

  return false;
};

const resetApp = (store) => {
  store.getState().core.resetApp.data = true;
};

const AxiosInterceptors = (store) => {
  // defaultConfiguration comes from axios
  Axios.interceptors.request.use(async (defaultConfiguration) => {
    const cookies = new Cookies();

    // console.log(defaultConfiguration);

    let configuration;

    if (checkURLMatch(defaultConfiguration.url, credentialedAPIs)) {
      configuration = {
        ...defaultConfiguration,
        withCredentials: true,
      };
    } else {
      configuration = defaultConfiguration;
    }

    if (checkURLMatch(configuration.url, whitelistedAPIs)) {
      return Promise.resolve(configuration);
    }

    const refreshCookie = cookies.get(getText('CORE', 'HAS_REFRESH_COOKIE'));

    if (refreshCookie === null || refreshCookie === undefined) {
      // trying to make a call to somehting that wasn't whitelisted, requires authentication, wipe the state on purpose. and log them out.
      // TODO: review this. This resets all app, in each reducer file. Maybe we should only wipe a few, not all.
      resetApp(store);

      return Promise.reject(configuration);
    }

    return Promise.resolve(configuration);
  });

  Axios.interceptors.request.use((req) => {
    console.log(`${req.method} ${req.url}`);
    // Important: request interceptors **must** return the request.
    return req;
  });

  Axios.interceptors.response.use(
    // sucessHandler
    (serverResponse) => serverResponse,
    // errorHandler
    (serverError) => {
      const networkError = {
        ...serverError,
        response: {
          status: 500,
          data: {
            response: getText('CORE', 'SERVER_CONNECTION_ERROR'),
          },
        },
      };

      if (serverError.response === undefined || serverError.response.status === 500) {
        return Promise.reject(networkError);
      }

      if (serverError.response.status === 401) {
        resetApp(store);
      }
      return Promise.reject(serverError);
    }
  );
};

export default AxiosInterceptors;

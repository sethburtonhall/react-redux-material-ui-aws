import CoreTypes from './CoreTypes';

const cacheSize = 5;

const initialState = {
  authRedirect: {
    data: null,
  },
  lastPage: {
    data: null,
  },
  resetApp: {
    data: null,
  },
};

const storeLastPage = (lastPageStore, newPage) => {
  let data = null;

  if (lastPageStore === null) {
    data = [];
  } else {
    data = lastPageStore;
  }

  if (data.length < cacheSize) {
    let found = false;

    data.forEach((page) => {
      if (page.link === newPage.link) {
        found = true;
      }
    });

    if (!found) {
      data.push(newPage);
    }
  } else {
    let found = false;

    data.forEach((page) => {
      if (page.link === newPage.link) {
        found = true;
      }
    });

    if (!found) {
      data.shift();

      data.push(newPage);
    }
  }

  return data;
};

const CoreReducers = (state = initialState, action) => {
  switch (action.type) {
    case CoreTypes.RESET_APP:
      return {
        ...initialState,
      };
    case CoreTypes.RESET_AUTH_REDIRECT:
      return {
        ...state,
        authRedirect: initialState.authRedirect,
      };
    case CoreTypes.RESET_LAST_PAGE:
      return {
        ...state,
        lastPage: initialState.lastPage,
      };
    case CoreTypes.STORE_AUTH_REDIRECT:
      return {
        ...state,
        authRedirect: {
          data: action.data,
        },
      };
    case CoreTypes.STORE_LAST_PAGE:
      return {
        ...state,
        lastPage: {
          data: storeLastPage(state.lastPage.data, action.data),
        },
      };
    default:
      return state;
  }
};

export default CoreReducers;

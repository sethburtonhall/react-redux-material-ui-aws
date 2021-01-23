import expireReducer from 'redux-persist-expire';
import storage from 'redux-persist/lib/storage';

import { compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import Middleware from './Middleware';
import RootReducers from './reducers/RootReducers';

const persistConfig = {
  blacklist: ['product', 'search'],
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducers, {
  transforms: [
    expireReducer('persist:root', {
      expireSeconds: 10,
      expiredState: {},
    }),
  ],
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(persistedReducer, composeEnhancer(Middleware));

export const Persistor = persistStore(Store);

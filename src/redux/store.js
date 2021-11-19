import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contacts/contactsReducer';
import { logger } from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: contactReducer,
  middleware,
  devTools:  process.env.NODE_ENV === 'development',
});
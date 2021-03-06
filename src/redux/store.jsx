// После
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { item, filter } from './redux-redesers';
export const store = configureStore({
  reducer: { contacts: combineReducers({ item, filter }) },
});

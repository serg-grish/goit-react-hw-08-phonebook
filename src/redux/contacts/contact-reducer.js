import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactSuccess,
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
} from './contact-actions';

const items = createReducer([], {
  
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
 
  [fetchContactSuccess]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});


export default combineReducers({
  items,
  filter,
});
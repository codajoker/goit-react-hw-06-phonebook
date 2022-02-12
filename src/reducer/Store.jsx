// После
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { nanoid } from 'nanoid';

export const addItem = createAction('item/add', data => {
  return {
    payload: {
      name: data.name,
      id: nanoid(),
      number: data.number,
    },
  };
});
export const removeItem = createAction('item/remove');
export const changeFilter = createAction('filter/change');

const item = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  {
    [addItem]: (state, action) => {
      return [...state, action.payload];
    },
    [removeItem]: (state, action) => {
      return [...state.filter(item => item.id !== action.payload)];
    },
  }
);
const filter = createReducer('', {
  [changeFilter]: (state, action) => {
    return action.payload;
  },
});

export const store = configureStore({
  reducer: { contacts: combineReducers({ item, filter }) },
});

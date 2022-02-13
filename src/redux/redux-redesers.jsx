import { createReducer } from '@reduxjs/toolkit';
import { addItem, removeItem, changeFilter } from './redux-action';

export const item = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  {
    [addItem]: (state, action) => {
      window.localStorage.setItem(
        'contacts',
        JSON.stringify([...state, action.payload])
      );

      return [...state, action.payload];
    },
    [removeItem]: (state, action) => {
      window.localStorage.setItem(
        'contacts',
        JSON.stringify([...state.filter(item => item.id !== action.payload)])
      );
      return [...state.filter(item => item.id !== action.payload)];
    },
  }
);
export const filter = createReducer('', {
  [changeFilter]: (state, action) => {
    return action.payload;
  },
});

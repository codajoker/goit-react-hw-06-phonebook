import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

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

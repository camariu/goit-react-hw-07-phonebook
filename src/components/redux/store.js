import { configureStore } from '@reduxjs/toolkit';
import { contactBookReducer } from './phoneSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactBookReducer,
    filter: filterReducer,
  },
});
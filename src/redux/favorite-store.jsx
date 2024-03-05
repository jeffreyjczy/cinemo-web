import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorite-slice';

export const store = configureStore({
  reducer: favoriteReducer,
});

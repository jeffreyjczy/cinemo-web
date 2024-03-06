import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorite-slice'; 

const rootReducer = {
  favorite: favoriteReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

// Exporta o tipo RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
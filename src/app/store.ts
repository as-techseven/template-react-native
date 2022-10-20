import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counter.slice';

export const store = configureStore({
  reducer: {
    test: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

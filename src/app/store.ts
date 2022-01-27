import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import localidadeSlice from '../components/LocalidadesForm/localidadeSlice';

export const store = configureStore({
  reducer: {
    localidade: localidadeSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

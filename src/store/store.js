import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesReducer';
import { countriesApi } from '../api/countriesApi';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware),
});

export default store;
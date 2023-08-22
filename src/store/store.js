import { configureStore } from '@reduxjs/toolkit';
import api from '../api/api';
import filtersReducers from './filtersReducers';

const store = configureStore({
  reducer: {
    filters: filtersReducers,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;

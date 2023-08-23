import { configureStore } from '@reduxjs/toolkit';
import api from 'src/api/api';
import filtersReducers from './filtersReducers';
import themeReducer from './themeReducer';

const store = configureStore({
  reducer: {
    filters: filtersReducers,
    theme: themeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;

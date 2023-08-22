/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  region: '',
};

const filtersSlice = createSlice({
  initialState,
  name: 'filters',
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { setSearch, setRegion } = filtersSlice.actions;

export default filtersSlice.reducer;

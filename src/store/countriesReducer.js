import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
  },
});

export const { addCountry } = countriesSlice.actions;

export default countriesSlice.reducer;

import api from 'src/api/api';

export const countriesEndppoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => '/all',
    }),
    getCountriesByRegion: builder.query({
      query: (region) => `/region/${region}`,
    }),
    getSearchCountries: builder.query({
      query: (searchName) => `/name/${searchName}`,
    }),
  }),
});

export const {
  useGetSearchCountriesQuery,
  useGetCountriesByRegionQuery,
  useGetCountriesQuery,
} = countriesEndppoints;

import api from '../api/api';
import countryHelpers from '../helpers/country';

const { parseDataRequest } = countryHelpers;

export const countryEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getCountryByCode: builder.query({
      query: (code) => `/alpha/${code}`,
      transformResponse: async (response) => {
        const data = await parseDataRequest(response[0]);
        return data;
      },
    }),
  }),
});

export const { useGetCountryByCodeQuery } = countryEndpoints;

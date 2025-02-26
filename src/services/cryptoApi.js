import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
       'X-RapidAPI-Key': '341e11290emsh41b002da2d9fb76p1f5cdejsn3d4883354008',
       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
  
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
  
      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      }),
  
      // getExchanges: builder.query({
      //   query: () => createRequest('/exchanges'),
      // }),
    }),
  });

  export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    // useGetExchangesQuery,
    useGetCryptoHistoryQuery,
  } = cryptoApi;
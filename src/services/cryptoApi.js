import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = 'http://localhost:8000';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => `/coin/${coinId}`
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => `/coin/${coinId}/history/${timePeriod}`
        }),
        getExchanges: builder.query({
            query: () => '/exchanges'
        }),
    })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery
} = cryptoApi;
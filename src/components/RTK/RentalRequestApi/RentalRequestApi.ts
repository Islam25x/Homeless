import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQueryWithAuth ';

export const PropertyRequestApi = createApi({
    reducerPath: 'PropertyRequestRequest',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        RentProperty: builder.mutation<any, { FormData: FormData; TenantId: number; PropertyId: number }>({
            query: ({ FormData, TenantId, PropertyId }) => ({
                url: `RentMate/RentalRequest?tenantId=${TenantId}&propertyId=${PropertyId}`,
                method: 'POST',
                body: FormData,
            }),
        }),
        DeleteRentProperty: builder.mutation<any, { TenantId: number; PropertyId: number }>({
            query: ({ TenantId, PropertyId }) => ({
                url: `RentMate/RentalRequest?tenantId=${TenantId}&propertyId=${PropertyId}`,
                method: 'DELETE',
            }),
        }),
        getTenantRequests: builder.query<any, { landlordId: number }>({
            query: ({ landlordId }) => `RentMate/RentalRequest/Requests/${landlordId}`,
        }),
        getTenantProperty: builder.query<any, { tenantId: number }>({
            query: ({ tenantId }) => `RentMate/RentalRequest/MyRentRequests/${tenantId}`,
        }),
        AcceptRentRequest: builder.mutation<any, { rentId: number }>({
            query: ({ rentId }) => ({
                url: `RentMate/Landlord/AcceptRentRequest/${rentId}`,
                method: 'POST',
                body: FormData,
            }),
        }),
        RejectRentRequest: builder.mutation<any, { rentId: number }>({
            query: ({ rentId }) => ({
                url: `RentMate/Landlord/RejectRentRequest/${rentId}`,
                method: 'POST',
                body: FormData,
            }),
        }),
    }),
});

export const { useRentPropertyMutation, useDeleteRentPropertyMutation, useGetTenantRequestsQuery, useAcceptRentRequestMutation, useRejectRentRequestMutation, useGetTenantPropertyQuery } = PropertyRequestApi;

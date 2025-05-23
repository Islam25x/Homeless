import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../baseQueryWithAuth ';


export const UserApi = createApi({
    reducerPath: 'UserApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getUserPhoto: builder.query<any, { id: number }>({
            query: ({ id }) => `RentMate/User/${id}/image`,
        }),
        uploadUserPhoto: builder.mutation<void, { Id: number; file: File }>({
            query: ({ Id, file }) => {
                const formData = new FormData();
                formData.append('Id', String(Id));
                formData.append('Image', file); // لازم نفس اسم الخاصية في DTO

                return {
                    url: 'RentMate/User/image',
                    method: 'POST',
                    body: formData,
                    // لا تكتب Content-Type بنفسك، المتصفح يحددها تلقائياً
                };
            },
        }),
    }),
});

export const {
    useGetUserPhotoQuery,
    useUploadUserPhotoMutation
} = UserApi;

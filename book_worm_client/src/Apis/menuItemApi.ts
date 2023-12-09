import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const menuItemApi = createApi({
    reducerPath:"menuItemApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://redmangoapi.azurewebsites.net/api/"
    }),
    tagTypes: ["MenuItem"],
    endpoints:(builder) => ({
        getMenuItems:builder.query({
            query:()=>({
                url:"menuitem"
            }),
            providesTags:["MenuItem"]
        }),
        getMenuItemById:builder.query({
            query:(id)=>({
                url:`menuitem/${id}`,
            }),
            providesTags:["MenuItem"]
        }),
    }),
});

export const {useGetMenuItemByIdQuery,useGetMenuItemsQuery} = menuItemApi;
export default menuItemApi;
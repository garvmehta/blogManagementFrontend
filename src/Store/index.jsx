import { configureStore } from '@reduxjs/toolkit'
import blogSlice from './Slices/blogSlice';
import userSlice from './Slices/userSlice'
import dashboardSlice from './Slices/dashboardSlice';
export const Store = configureStore(
    {
        reducer: {
            user: userSlice,
            blogs: blogSlice,
            dashboard: dashboardSlice
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    }
)
export default Store;

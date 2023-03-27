import { configureStore } from '@reduxjs/toolkit'
import blogSlice from './Slices/blogSlice';
import userSlice from './Slices/userSlice'

export const Store = configureStore(
    {
        reducer:{
            user: userSlice,   
            blogs:blogSlice
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
    }
)
export default Store;

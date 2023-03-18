import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Slices/userSlice'

export const Store = configureStore(
    {
        reducer:{
            user: userSlice   
        }
    }
)
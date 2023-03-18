
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:'',
    type:'user',
    email:'',
    name:''
}

 const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{

    }
})
export const {} = userSlice.actions;
export default userSlice.reducer;
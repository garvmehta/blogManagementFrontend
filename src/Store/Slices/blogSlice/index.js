import { createSlice } from "@reduxjs/toolkit";



const initialState = [];

const blogSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    addBlogs: (state, actions) => {
      return actions.payload;
    },
    
  },
});
export const { addBlogs } = blogSlice.actions;
export default blogSlice.reducer;

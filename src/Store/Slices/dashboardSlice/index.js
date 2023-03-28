import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    allUserBlogs:[],
};

const userDashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    addUserBlogs: (state, actions) => {
      state.allUserBlogs = actions.payload;
      return state;
    },
    removeUserBlog: (state, actions) => {
      const index = actions.payload;
      state.allUserBlogs.splice(index,1);
      return state;
    },
    editSingleBlog: (state, actions) => {
      const {index, toUpdate} = actions.payload;
      state.allUserBlogs[index].title = toUpdate.title;
      state.allUserBlogs[index].description = toUpdate.description;
      return state;
    },
  },
});
export const { addUserBlogs, removeUserBlog, editSingleBlog } = userDashboardSlice.actions;
export default userDashboardSlice.reducer;

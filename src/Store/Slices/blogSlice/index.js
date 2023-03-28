import { createSlice } from "@reduxjs/toolkit";



const initialState = [];

const blogSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    addBlogs: (state, actions) => {
      return actions.payload;
    },
    likeBlog: (state, actions) => {
      const { index, isLiked } = actions.payload;
      console.log('like blog', );
      state[index].isliked = isLiked;
      if (isLiked) {
        state[index].totalLikes = state[index].totalLikes + 1;

      } else {
        state[index].totalLikes = state[index].totalLikes - 1;
      }
      return state;
    },
    addComment: (state, actions) => {
      const { index, commentDetails } = actions.payload;
      const comments = state[index].comments;
      comments.push(commentDetails);
      state[index].comments = comments;
      return state;
    }

  },
});
export const { addBlogs, likeBlog, addComment } = blogSlice.actions;
export default blogSlice.reducer;

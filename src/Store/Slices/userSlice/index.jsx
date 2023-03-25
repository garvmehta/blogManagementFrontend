import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  type: "user",
  email: "",
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, actions) => {
      console.log(actions);
      return state;
    },
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;

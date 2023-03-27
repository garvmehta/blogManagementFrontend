import { createSlice } from "@reduxjs/toolkit";

export class User {
  constructor({ _id, name, type = "user", email, logged = false }) {
    this._id = _id;
    this.email = email;
    this.name = name;
    this.type = type
    this.logged = logged
  };
}

const initialState = new User({ id: "", name: "", email: "" });

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, actions) => {
      console.log(actions);
      const { _id, email, name, type } = actions.payload;

      console.log(actions.payload, "payload");
      const user = new User({ _id, email, type, name, logged: true })
      localStorage.setItem("blogAppLogged", "true");
      localStorage.setItem("blogAppUserData", JSON.stringify(user))
      return user;
    },
    logoutUser: () => {
      localStorage.removeItem('blogAppLogged');
      localStorage.removeItem("blogAppUserData");
      return initialState;
    }
  },
});
export const { addUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

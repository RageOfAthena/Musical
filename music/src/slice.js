import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  uri: "",
};
export const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    update: (state, action) => {
      state.user = action.payload.user;
    },
    uriupdate: (state, action) => {
      state.uri = action.payload.uri;
    },
  },
});
export const authActions = slice.actions;
export default slice.reducer;

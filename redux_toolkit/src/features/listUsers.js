import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  users: [],
  error: "",
};
export const listUsers = createAsyncThunk("listUsers", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data.map((item) => item.username);
});
const listUsersSlice = createSlice({
  name: "userList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(listUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(listUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(listUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});
export default listUsersSlice.reducer;

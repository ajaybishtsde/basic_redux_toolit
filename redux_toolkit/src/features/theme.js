import { createSlice } from "@reduxjs/toolkit";
const intialStateValue = "";
const themSlice = createSlice({
  name: "theme",
  initialState: { value: intialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeColor } = themSlice.actions;
export default themSlice.reducer;

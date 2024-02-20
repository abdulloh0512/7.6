import { createSlice } from "@reduxjs/toolkit";

const require = createSlice({
  name: "require",
  initialState: {
    requirs: [],
    nameInp: null,
  },
  reducers: {
    addRequire: (state, { payload }) => {
      state.requirs.push(payload);
    },
    changeName: (state, { payload }) => {
      for (const key in state.requirs) {
        console.log((state.requirs[state.requirs.length - 1].text = payload));
      }
    },
    changeMetod: (state, { payload }) => {
      state.requirs[state.requirs.length - 1].method = payload;
    },
    addNameInp: (state, { payload }) => {
      state.nameInp = payload;
    },
  },
});

export const { addRequire, changeName, changeMetod, addNameInp } =
  require.actions;

export default require.reducer;

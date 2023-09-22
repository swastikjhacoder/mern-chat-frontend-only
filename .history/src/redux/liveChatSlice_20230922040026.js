import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: JSON.parse(localStorage.getItem("darkMode")) || false,
  userInfo: JSON.parse(localStorage.getItem("chatUserInfo")) || null,
  background: JSON.parse(localStorage.getItem("backgroundColor")) || "#fff",
  color: JSON.parse(localStorage.getItem("color")) || "#081b29",
};

export const liveChatSlice = createSlice({
  name: "liveChat",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode;
      if (!state.mode) {
        state.background = "#fff";
        state.color = "#081b29";
      } else {
        state.background = "#081b29";
        state.color = "#fff";
      }
      localStorage.setItem("darkMode", JSON.stringify(state.mode));
      localStorage.setItem("backgroundColor", JSON.stringify(state.background));
      localStorage.setItem("color", JSON.stringify(state.color));
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { toggleDarkMode, addUser, removeUser } =
  liveChatSlice.actions;
export default liveChatSlice.reducer;

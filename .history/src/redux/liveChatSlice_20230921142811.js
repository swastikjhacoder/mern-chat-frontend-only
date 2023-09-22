import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: JSON.parse(localStorage.getItem("darkMode")) || false,
  loggedIn: JSON.parse(localStorage.getItem("liveChatLoggedIn")) || false,
  userInfo: null,
};

export const liveChatSlice = createSlice({
  name: "liveChat",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode;
      localStorage.setItem("darkMode", JSON.stringify(state.mode));
      },
      
  },
} );

export const {to}

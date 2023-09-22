import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: JSON.parse( localStorage.getItem( 'darkMode' ) ) || false,
    loggedIn: JSON.parse( localStorage.getItem( 'liveChatLoggedIn' ) ) || false,
    userInfo: null,
}

export const live
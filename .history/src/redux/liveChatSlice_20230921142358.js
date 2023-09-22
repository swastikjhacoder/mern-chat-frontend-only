import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: JSON.parse(localStorage.getItem('darkMode'))||
}
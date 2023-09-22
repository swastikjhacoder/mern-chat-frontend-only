import { configureStore } from '@reduxjs/toolkit';
import liveChatReducer from './liveChatSlice';

export const store = configureStore({
  reducer: {
    liveChat,
  },
});
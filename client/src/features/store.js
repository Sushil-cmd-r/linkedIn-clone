import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./commentSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    comments: commentReducer,
    users: userReducer,
  },
});

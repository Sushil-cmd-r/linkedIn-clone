import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./commentSlice";

export const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
});

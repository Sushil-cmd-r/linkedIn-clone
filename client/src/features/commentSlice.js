import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const initialState = {
  comments: [],
  filter: [],
  err: null,
};

const getComments = createAsyncThunk("FETCH_ALL", async () => {
  try {
    const { data, status } = await api.fetchComments();
    return { data, status };
  } catch (err) {
    if (!err.response) {
      let data = "Server error";
      let status = 500;
      return { data, status };
    }
    const { data, status } = err.response;
    return { data, status };
  }
});

const createComment = createAsyncThunk("CREATE", async (newComment) => {
  const { data } = await api.createComment(newComment);
  return data;
});

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    filterComments: (state, action) => {
      state.filter = state.comments.filter((c) =>
        c.creater.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: {
    // get comments
    [getComments.fulfilled]: (state, { payload }) => {
      if (payload.status === 200) {
        state.comments = payload.data;
        state.err = null;
      } else {
        state.comments = [];
        state.err = payload.data;
      }
    },

    [getComments.rejected]: (state) => {
      state.comments = [];
      state.err = "Couldn't fetch the comments";
    },
    // create comments
    [createComment.fulfilled]: (state, { payload }) => {
      state.comments.unshift(payload);
    },
  },
});

export { getComments, createComment };
export const { filterComments } = commentSlice.actions;
export default commentSlice.reducer;

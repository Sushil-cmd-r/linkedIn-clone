import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const checkAuth = createAsyncThunk(
  "CHECK",
  async (Credential, { rejectWithValue }) => {
    try {
      const { data, status } = await api.auth();
      return { data, status };
    } catch (err) {
      if (!err.response) {
        let data = "Server error";
        let status = 500;
        return rejectWithValue({ data, status });
      }
      const { data, status } = err.response;
      return rejectWithValue({ data, status });
    }
  }
);

const signup = createAsyncThunk(
  "SIGNUP",
  async (newUser, { rejectWithValue }) => {
    try {
      const { data, status } = await api.signup(newUser);
      return { data, status };
    } catch (err) {
      if (!err.response) {
        let data = "Server error";
        let status = 500;
        return rejectWithValue({ data, status });
      }
      const { data, status } = err.response;
      return rejectWithValue({ data, status });
    }
  }
);

const login = createAsyncThunk(
  "LOGIN",
  async (newUser, { rejectWithValue }) => {
    try {
      const { data, status } = await api.login(newUser);
      return { data, status };
    } catch (err) {
      if (!err.response) {
        let data = "Server error";
        let status = 500;
        return rejectWithValue({ data, status });
      }
      const { data, status } = err.response;
      return rejectWithValue({ data, status });
    }
  }
);

const logout = createAsyncThunk("LOGOUT", async () => {
  await api.logout();
});

const initialState = {
  user: null,
  err: null,
};

export const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // check auth
    [checkAuth.fulfilled]: (state, { payload }) => {
      state.user = payload.data;
      state.err = null;
    },
    [checkAuth.rejected]: (state, { payload }) => {
      state.err = payload?.data;
      state.user = null;
    },

    // login user
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.data;
      state.err = null;
    },
    [login.rejected]: (state, { payload }) => {
      state.err = payload.data;
      state.user = null;
    },

    // logout user
    [logout.fulfilled]: (state, { payload }) => {
      state.user = null;
      state.err = null;
    },

    // signup user
    [signup.fulfilled]: (state, { payload }) => {
      state.user = payload.data;
      state.err = null;
    },
    [signup.rejected]: (state, { payload }) => {
      state.err = payload.data;
      state.user = null;
    },
  },
});

export { checkAuth, login, logout, signup };
export default useSlice.reducer;

"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  token: null,
  userData: null,
  loading: false,
  error: null,
};

// Async thunk to fetch user data
export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async () => {
    try {
      const response = await axios.get("/api/auth/checkUser", {
        withCredentials: true,
      });
      console.log("response in the authSlice is -> ", response);
      const userData = response.data;
      console.log("response.data in fetchUserData is  -> ", userData);
      return userData;
    } catch (error) {
      state.isLoggedIn = false;
      console.log("error in the authSlice is -> ", error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.userData = null;
      });

  },
});

export const { setLoggedIn, setToken } = authSlice.actions;
export default authSlice.reducer;

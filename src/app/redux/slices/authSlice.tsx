"use client";
import { TYPE_OF_INITIAL_STATE, USER_DATA_TYPE } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState: TYPE_OF_INITIAL_STATE = {
  isLoggedIn: false,
  token: null,
  userData: null,
  loading: false,
  error: null,
};

// Async thunk to fetch user data
export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      console.log("STEP 1 - THUNK CHAL GAYA");

      const response = await axios.get("/api/auth/checkUserLoggedIn", {
        withCredentials: true,
      });
      console.log("response.data in fetchUserData is  -> ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error is -> ", error);
      return rejectWithValue(error?.response?.data || "Something went wrong");
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<USER_DATA_TYPE>) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
      state.loading = false;
      console.log("action.payload in login is -> ", action.payload);
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userData = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("THUNK PENDING HAI");
      })
      .addCase(
        fetchUserData.fulfilled,
        (state, action: PayloadAction<USER_DATA_TYPE>) => {
          state.loading = false;
          state.userData = action.payload;
          state.isLoggedIn = true;
          state.token = action.payload.token;
          console.log("THUNK FULLFILL HOGAYA HAI");
        }
      )
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.userData = null;
        state.error = action.payload as string;
        console.log("THUNK REJECT HOGAYA HAI");
      });
  },
});

export const { login, setToken, logout } = authSlice.actions;
export default authSlice.reducer;

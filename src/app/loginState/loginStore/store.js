"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

export const loginStore = configureStore({
  reducer: {
    auth: authReducer,
  },
});
// npm install @reduxjs/toolkit react-redux

// redux
// the main data holder library

// react-redux
// plugin for react-developers to easily work with redux


import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";

export let meraStore = configureStore({
    reducer:authSlice.reducer,
    // customerSlice:customerSlice.reducer
});
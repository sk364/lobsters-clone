import { configureStore } from "@reduxjs/toolkit";

export default (reducer) => configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
});

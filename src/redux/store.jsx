import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;

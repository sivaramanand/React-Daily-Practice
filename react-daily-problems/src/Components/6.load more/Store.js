import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import { configure } from "@testing-library/react";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;

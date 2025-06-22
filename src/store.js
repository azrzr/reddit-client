import { configureStore } from "@reduxjs/toolkit";

import threadsReducer from "./features/threadsSlice";

const store = configureStore({
  reducer: {
    threads: threadsReducer,
  },
});

export default store;

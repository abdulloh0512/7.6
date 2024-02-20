import { configureStore } from "@reduxjs/toolkit";
import Require from "./Require";

const store = configureStore({
  reducer: {
    Require: Require,
  },
});

export default store;

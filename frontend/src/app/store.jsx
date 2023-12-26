import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../feature/employeeSlice";

const store = configureStore({
  reducer: {
    employeeKey: employeeSlice,
  },
});

export default store;
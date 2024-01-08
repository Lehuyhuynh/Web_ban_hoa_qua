import { configureStore } from "@reduxjs/toolkit";
import productSlide from "./productSlide";
import userSlice from "./userSlice";
export default configureStore({
  reducer: {
    product: productSlide,
    user: userSlice,
  },
});

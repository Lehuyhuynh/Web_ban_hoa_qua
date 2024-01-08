import { configureStore } from "@reduxjs/toolkit";
import productSlideReducer from "./productSlide";
import userSliceReducer from "./userSlice";
export default configureStore({
  reducer: {
    user: userSliceReducer,
    // product: productSlideReducer,
  },
});

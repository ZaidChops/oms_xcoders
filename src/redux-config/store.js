import { configureStore } from "@reduxjs/toolkit";
import enquiryReducer  from "./EnquirySlice";
import courseReducer  from "./CourseSlice";

export const store = configureStore({
  reducer: {
    enquiryData: enquiryReducer,
    courseData: courseReducer,
  },
});



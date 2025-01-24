import { configureStore } from "@reduxjs/toolkit";
import enquiryReducer  from "./EnquirySlice";
// import courseReducer, { loadData as loadCourseData } from "./CourseSlice";

export const store = configureStore({
  reducer: {
    enquiryData: enquiryReducer,
    // courseData: courseReducer,
  },
});



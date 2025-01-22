import { configureStore } from "@reduxjs/toolkit";
import enquiryReducer, { loadData as loadEnquiryData } from "./EnquirySlice";
import courseReducer, { loadData as loadCourseData } from "./CourseSlice";

export const store = configureStore({
  reducer: {
    enquiryData: enquiryReducer,
    courseData: courseReducer,
  },
});

// Load data from local storage into the Redux store
store.dispatch(loadEnquiryData());
store.dispatch(loadCourseData());

import { configureStore } from "@reduxjs/toolkit";
import enquiryReducer  from "./EnquirySlice";
import courseReducer  from "./CourseSlice";
import tarinerReducer  from "./TrainerSlice";

export const store = configureStore({
  reducer: {
    enquiryData: enquiryReducer,
    courseData: courseReducer,
    trainerData: tarinerReducer
  },
});



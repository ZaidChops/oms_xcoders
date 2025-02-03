import { configureStore } from "@reduxjs/toolkit";
import enquiryReducer  from "./EnquirySlice";
import courseReducer  from "./CourseSlice";
import trainerReducer from "./TrainerSlice";
import admisssionReducer from "./AdmissionSlice"

export const store = configureStore({
  reducer: {
    enquiryData: enquiryReducer,
    courseData: courseReducer,
    trainerData: trainerReducer,
    admissionData:admisssionReducer,
  },
});



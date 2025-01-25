import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allData: [], // Store for all courses
 
};

const CourseSlice = createSlice({
  name: 'courseData',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.allData = [...state.allData, action.payload];  // Using spread operator to add new course
    },
    showData: (state, action) => {
      state.allData=action.payload;
    },
    updateUser: (state, action) => {
      const index = state.allData.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.allData[index] = action.payload;
      }
    },
   
  },
});

export const { addData, updateUser, showData } = CourseSlice.actions;

export default CourseSlice.reducer;


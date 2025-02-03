import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allData: [], // Store for all courses
 
};

const TrainerSlice = createSlice({
  name: 'trainerData',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.allData = [...state.allData, action.payload];  // Using spread operator to add new course
    },
    showData: (state, action) => {
      state.allData=action.payload;
    },
    updateData: (state, action) => {
      const index = state.allData.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.allData[index] = action.payload;
      }
    },
    deleteData: (state, action) => {
      state.allData = state.allData.filter((item) => item.id !== action.payload);
    }
   
  },
});

export const { addData, updateData, showData, deleteData } = TrainerSlice.actions;

export default TrainerSlice.reducer;


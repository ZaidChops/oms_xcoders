import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],

};

const AdmissionSlice = createSlice({
  name: "enquiryData",
  initialState,
  reducers: {

    
    addData: (state, action) => {
      
      state.allData.push(action.payload);
    },
    showData:(state,action)=>
    {
      state.allData=action.payload;
    },
  
    updateData: (state, action) => {
      const index = state.allData.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.allData[index] = action.payload;
      }
    },
  
  },
});

export const { addData, updateData, resetEditUser, setEditUser,showData} = AdmissionSlice.actions;

export default AdmissionSlice.reducer;

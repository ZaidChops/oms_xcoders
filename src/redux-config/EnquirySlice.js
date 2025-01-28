import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],

};

const EnquirySlice = createSlice({
  name: "enquiryData",
  initialState,
  reducers: {

    
    addData: (state, action) => {
      // state.allData = [...state.allData, action.payload];
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

export const { addData, updateData, resetEditUser, setEditUser,showData} = EnquirySlice.actions;
export default EnquirySlice.reducer;

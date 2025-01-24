import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  editUser: { data: "", isEdit: false },
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
    setEditUser: (state, action) => {
      state.editUser = { data: action.payload, isEdit: true };
    },
    updateUser: (state, action) => {
      const index = state.allData.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.allData[index] = action.payload;
      }
    },
    resetEditUser: (state) => {
      state.editUser = { data: "", isEdit: false };
    },

    // loadData: (state) => {
    //   const data = JSON.parse(localStorage.getItem("enquiryData")) || [];
    //   state.allData = data;
    // },
  },
});

export const { addData, updateUser, resetEditUser, setEditUser,showData} = EnquirySlice.actions;
export default EnquirySlice.reducer;

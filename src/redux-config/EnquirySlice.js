import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EnquiryService from "./EnquiryService";

const initialState = {
  allData: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",

};

const EnquirySlice = createSlice({
  name: "enquiryData",
  initialState,
  reducers: {
    // addData: (state, action) => {
    //   // state.allData = [...state.allData, action.payload];
    //   state.allData.push(action.payload);
    // },
    // showData:(state,action)=>
    // {
    //   state.allData=action.payload;
    // },

    updateData: (state, action) => {
      const index = state.allData.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.allData[index] = action.payload;
      }
    },
  },
  extraReducers : (builder) => {
    builder
    .addCase(sortData.pending,(state, action)=>{
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
      })
    .addCase(sortData.fulfilled,(state, action)=>{
      state.isSuccess = true
      state.allData = action.payload?action.payload:[]
      state.isLoading = false
      // console.log("action.payload",action.payload)
      })
  .addCase(sortData.rejected,(state,action)=>{
    state.isError = true
      state.isLoading = false
      state.isSuccess = false
      state.allData = []
  })
  }
});

export const {  updateData, resetEditUser, setEditUser,showData} = EnquirySlice.actions;
export default EnquirySlice.reducer;


export const sortData = createAsyncThunk("GET/ENQUIRY", async() =>{
  try {
    return await EnquiryService.getEnquiry()
  } catch (error) {
    console.log(error)
  }
})

export const addData = createAsyncThunk("ADD/ENQUIRY", async(formData) =>{
  try {
    return await EnquiryService.addEnquiry(formData)
  } catch (error) {
    console.log(error)
  }
} )
    // import { createSlice } from "@reduxjs/toolkit";

    // const initialState = {
    //   allData: [],
    //   editUser: { data: "", isEdit: false },
    // };

    // const CourseSlice = createSlice({
    //   name: "courseData",
    //   initialState,
    //   reducers: {
    //     addData: (state, action) => {
    //       state.allData.push(action.payload);
    //     },
    //     showData:(state,action)=>
    //     {
    //       state.allData=action.payload;
    //     },
    //     setEditUser: (state, action) => {
    //       state.editUser = { data: action.payload, isEdit: true };
    //     },  
    //     updateUser: (state, action) => {
    //       const index = state.allData.findIndex((item) => item.id === action.payload.id);
    //       if (index !== -1) {
    //         state.allData[index] = action.payload;
    //       }
    //     },
    //     resetEditUser: (state) => {
    //       state.editUser = { data: "", isEdit: false };
    //     },

    //     loadData: (state) => {
    //       const data = JSON.parse(localStorage.getItem("courseData")) || [];
    //       state.allData = data;
    //     },
    //   },
    // });

    // export const { addData, updateUser, resetEditUser, setEditUser,showData, loadData } = CourseSlice.actions;
    // export default CourseSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  editUser: { data: "", isEdit: false },
};

const CourseSlice = createSlice({
    name: "courseData",
    initialState,
    reducers: {
      addData: (state, action) => {
        state.allData.push(action.payload);
      },
      showData: (state, action) => {
        state.allData = action.payload;
      },
      setEditUser: (state, action) => {
        state.editUser = { data: action.payload, isEdit: true };
      },
      updateUser: (state, action) => {
        const index = state.allData.findIndex((item) => item.courseId === action.payload.courseId);
        if (index !== -1) {
          state.allData[index] = action.payload;
        }
      },
      resetEditUser: (state) => {
        state.editUser = { data: "", isEdit: false };
      },
      loadData: (state) => {
        const data = JSON.parse(localStorage.getItem("courseData")) || [];
        state.allData = data;
      },
    },
  });
  
  export const { addData, updateUser, resetEditUser, setEditUser, showData, loadData } = CourseSlice.actions;
  export default CourseSlice.reducer;
  
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { deleteData, showData } from "../../redux-config/CourseSlice.js";
import Table from "../newComponents/Table.jsx";
import Pagination from "../newComponents/Pagination.jsx";

import {Popup}  from "../Popup.jsx";
import CoursesAction from "./CoursesAction.jsx";

const CoursesList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseData.allData);

  const [showModel, setShowModel] = useState(false);
  const [editCourse, setEditCourse] = useState(null);
  const [togglePopup, setTogglePopup] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9090/api/v1/course",
          {
            params: { page, limit: 2 },
          }
        );
        const data = response.data.courseData;
        console.log(data);
        setTotalItems(data.total);
        setTotalPages(data.pages);
        dispatch(showData(data.items));
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, [page, dispatch]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:9090/api/v1/course/${id}`
      );
      console.log(response);

      dispatch(deleteData(id));
      // fetchCourses();
      console.log("Course deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleModel = () => setShowModel(!showModel);
  

  const handleAdd = () => {
    setEditCourse(null);
    toggleModel();
  };
  const handleEdit = (enquiry) => {
    setEditCourse(enquiry);
    toggleModel();
  };

  const deletePopup = (id) => {
    console.log(id )
    setDeleteId(id);
    setTogglePopup(!togglePopup);

  };

  // const handlePreview = (enquiry) => {
  //   setPreviewData(enquiry);
  //   togglePreview();
  // };

  const columns = [
    { label: "ID", field: "courseId" },
    { label: "Course Name", field: "courseName" },
    { label: "Course Category", field: "courseCategory" },
    { label: "Course Duration", field: "courseDuration" },
    { label: "Course Fees", field: "courseFee" },
  ];

  return (
    <section className="bg-gray-50 p-3">
      <div className="max-w-screen-4xl px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Enquiry Actions */}
          <CoursesAction
            handleAdd={handleAdd}
            showModel={showModel}
            toggleModel={toggleModel}
            editUser={editCourse}
          />

          {/* Enquiry Table */}
          <Table
            data={courses}
            columns={columns}
            actions={(course) => (
              <>
                <button
                  onClick={() => handleEdit(course)}
                  // className="text-blue-600 px-2"
                  type="button"
                  className="inline-block px-2.5 py-1 text-base font-sm mr-6 rounded-lg border border-transparent text-gray-800 bg-yellow-400 hover:text-gray-600 focus:outline-none"
                >
                  <i className="fa-regular fa-pen-to-square"></i> edit
                </button>
                <button
                type="button"
                className="inline-block px-2.5 py-1 text-base font-sm mr-6 rounded-lg border border-transparent text-gray-800 bg-red-400 hover:text-gray-600 focus:outline-none"
                  onClick={() => deletePopup(course.courseId)}
                  // className="text-blue-600 px-2"
                >
                  <i className="fa-solid fa-trash"></i> delete
                </button>
              </>
            )}
          />

          {/* Pagination */}
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            totalItems={totalItems}
          />

          {/* Popup */}
          {togglePopup && (
            <Popup
              deletePopup={deletePopup}
              setDeleteId={setDeleteId}
              handleDelete={handleDelete}
              deleteId={deleteId}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CoursesList;

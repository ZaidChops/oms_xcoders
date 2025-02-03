import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseForm from "../courses/CourseForm.jsx";
import { deleteData, showData } from "../../redux-config/CourseSlice";
import axios from "axios";
import { Popup } from "../Popup.jsx";
import Pagination from "../Pagination/Pagination";

const Courses = () => {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.courseData.allData);
  // console.log("Current data:", allCourses);
  const [showModel, setShowModel] = useState(false);
  const [editCourse, setEditCourse] = useState(null);
  const [togglePopup, setTogglePopup] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);



  const toggleModel = () => {
    setShowModel(!showModel);
    if (showModel) {
      fetchCourses();
    }
  };

  const handleAdd = () => {
    setEditCourse(null);
    toggleModel();
  };

  const handleEdit = (course) => {
    setEditCourse(course);
    toggleModel();
  };

  const deletePopup = (id) => {
    setTogglePopup(!togglePopup);
    setDeleteId(id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:9090/api/v1/course/${id}`
      );
      console.log(response);

      dispatch(deleteData(id));
      fetchCourses();
      console.log("Course deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCourses = async (page=1) => {
    try {
<<<<<<< HEAD
      const response = await axios.get("http://localhost:9090/api/v1/course");
      // console.log(response.data);
      const data = response.data.courses || [];
=======
      const response = await axios.get(`http://localhost:9090/api/v1/course?page=${page}&limit=3`);
      console.log(response.data);
      const { data, totalPages } = response.data|| [];
>>>>>>> 9d139b6ab5b4dbfa66707f76bb1547a535ec5b40

      dispatch(showData(data));
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses(currentPage);
  }, [currentPage]);

  return (
    <section>
      <div className="relative mx-4 my-2 p-4 flex flex-col border-2 shadow-sm bg-white border-gray-200 border-opacity-50 rounded-lg">
        <div className="flex items-center justify-between p-2 gap-y-5">
          <h2 className="inline-block font-semibold text-xl">All Courses</h2>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="px-3 py-2 font-medium shadow-sm bg-yellow-400 text-gray-800 border rounded-lg gap-x-2 inline-flex items-center"
              onClick={handleAdd}
            >
              Add Course
            </button>
            {showModel && (
              <div
                className="fixed inset-0 pt-20 bg-gray-50 bg-opacity-50 z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <CourseForm toggleModel={toggleModel} editCourse={editCourse} />
              </div>
            )}
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col my-2">
          <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div className="min-w-full max-h-[584px] border rounded-lg overflow-y-auto">
                <table className="divide-y divide-gray-200 min-w-full">
                  <thead className="bg-yellow-400">
                    <tr className="divide-x divide-gray-200">
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        ID
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Course Name
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Course Category
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Course Duration
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Course Fees
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Course Discount
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 table-scroll">
                    {/* {console.log(
                      allCourses.map((course) => {
                        console.log(course);
                      })
                    )} */}

                    {allCourses.length > 0 ? (
                      allCourses.map((course, index) => (
                        <tr key={index}>
                          <td className="px-3 py-2 text-sm font-medium text-gray-800">
                            {course.courseId}
                          </td>
                          <td className="px-3 py-2 text-sm font-medium text-gray-800">
                            {course.courseName}
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-800">
                            {course.courseCategory}
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-800">
                            {course.courseDuration}
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-800">
                            {course.courseFee}
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-800">
                            {course.courseDiscount}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center gap-2 ">
                              <button
                                type="button"
                                className="inline-block px-2.5 py-1 text-base font-semibold mr-6 rounded-lg border border-transparent text-gray-800 bg-yellow-400 hover:text-gray-600 focus:outline-none"
                                onClick={() => handleEdit(course)}
                              >
                                <i className="fa-regular fa-pen-to-square"></i>{" "}
                                edit
                              </button>
                              <button
                                type="button"
                                className="inline-block px-2.5 py-1 text-base font-semibold mr-6 rounded-lg border border-transparent text-gray-800 bg-yellow-400 hover:text-gray-600 focus:outline-none"
                                onClick={() => deletePopup(course.courseId)}
                              >
                                <i className="fa-solid fa-trash"></i> delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="text-center p-4 text-yellow-600"
                        >
                          No courses found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
      {togglePopup && (
        <div
          className="fixed inset-0 pt-20 bg-gray-50 bg-opacity-50 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <Popup
            deletePopup={deletePopup}
            setDeleteId={setDeleteId}
            handleDelete={handleDelete}
            deleteId={deleteId}
            data={"course"}
          />
        </div>
      )}
    </section>
  );
};

export default Courses;

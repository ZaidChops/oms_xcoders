import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseForm from "./CourseForm.jsx";
import { showData } from "../../redux-config/CourseSlice";
import axios from "axios";

const Courses = () => {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.courseData.allData) 
  console.log("Current data:", allCourses);
  const [showModel, setShowModel] = useState(false);
  const [editCourse, setEditCourse] = useState(null);
  
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

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:9090/course");
      console.log(response.data);
      const data = response.data.courses ||[];

      dispatch(showData(data));


    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

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
                <CourseForm
                  toggleModel={toggleModel}
                  editCourse={editCourse}
                />
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
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 table-scroll">
                  {allCourses.length > 0 ? (
                      allCourses.map((course, index) => (
                        <tr key={index}>
                         
                          <td className="px-6 py-4 text-sm font-medium text-gray-800">
                            {course.courseId}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800">
                            {course.courseName}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800">
                            {course.courseCategory}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800">
                            {course.courseDuration}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800">
                            {course.courseFee}
                          </td>
                          <td className="px-6 py-4 text-end text-sm font-medium">
                            <div className="flex items-center">
                              <button
                                type="button"
                                className="inline-block text-base font-semibold mr-6 rounded-lg border border-transparent text-yellow-400 hover:text-yellow-600 focus:outline-none"
                                onClick={() => handleEdit(course)}
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
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
      </div>
    </section>
  );
};

export default Courses;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData, updateUser } from "../redux-config/CourseSlice";

const CourseForm = ({ toggleModel, setAllCourses, editCourse }) => {
  const dispatch = useDispatch();

  const [courseName, setCourseName] = useState(editCourse?.courseName || "");
  const [courseCategory, setCourseCategory] = useState(
    editCourse?.courseCategory || ""
  );
  const [courseDuration, setCourseDuration] = useState(
    editCourse?.courseDuration || ""
  );
  const [courseFee, setCourseFee] = useState(editCourse?.courseFee || "");

  useEffect(() => {
    if (editCourse) {
      setCourseName(editCourse.courseName);
      setCourseCategory(editCourse.courseCategory);
      setCourseDuration(editCourse.courseDuration);
      setCourseFee(editCourse.courseFee);
    }
  }, [editCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCourse = {
      courseId: editCourse?.courseId || Date.now(), // Use existing ID for editing
      courseName,
      courseCategory,
      courseDuration,
      courseFee,
    };

    if (editCourse) {
      // Update the course in the Redux store and localStorage
      dispatch(updateUser(updatedCourse));
      const existingCourses =
        JSON.parse(localStorage.getItem("courseData")) || [];
      const updatedCourses = existingCourses.map((course) =>
        course.courseId === updatedCourse.courseId ? updatedCourse : course
      );
      localStorage.setItem("courseData", JSON.stringify(updatedCourses));
    } else {
      // Add new course to the Redux store and localStorage
      dispatch(addData(updatedCourse));
      const existingCourses =
        JSON.parse(localStorage.getItem("courseData")) || [];
      localStorage.setItem(
        "courseData",
        JSON.stringify([...existingCourses, updatedCourse])
      );
    }

    setAllCourses((prevCourses) =>
      editCourse
        ? prevCourses.map((course) =>
            course.courseId === updatedCourse.courseId ? updatedCourse : course
          )
        : [...prevCourses, updatedCourse]
    );

    toggleModel(); // Close the modal after saving
  };

  return (
    <section className="course-form">
      <div className="max-w-lg  mx-auto mt-6 bg-white rounded-md shadow-md">
        <div className="p-4 flex justify-between items-center gap-2 rounded-t-md bg-gradient-to-r from-orange-300 to-yellow-300 ">
          <h2 className="text-lg font-semibold text-gray-700 capitalize">
            {editCourse ? "Edit Course" : "Add Course"}
          </h2>
          <button
            onClick={toggleModel}
            className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md"
          >
            X
          </button>
        </div>
        <form className="px-6 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 text-gray-500 sm:grid-cols-1 p-1">
            <div>
              <label className="" htmlFor="courseName">
                Course Name
              </label>
              <input
                id="courseName"
                type="text"
                placeholder="Ex: MERN Stack"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="block w-full px-4 py-2 mt-2  
                bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="courseCategories">
                Course Categories
              </label>
              <select
                id="courseCategories"
                value={courseCategory}
                onChange={(e) => setCourseCategory(e.target.value)}
                className="block w-full h-10 py-2 px-4 mt-2 text-gray-700 border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              >
                <option defaultValue="Select Category">Select Category</option>
                <option value="Job Guaranted Program">
                  Job Guaranted Program
                </option>
                <option value="MNC Expert Program">MNC Expert Program</option>
                <option value="Mastery Program">Mastery Program</option>
                <option value="Foundation Program">Foundation Program</option>
                <option value="IPB Program">IPB Program</option>
                <option value="Crash Courses">Crash Courses</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700" htmlFor="courseFee">
                Course Fee
              </label>
              <input
                id="courseFee"
                type="number"
                placeholder="3999"
                value={courseFee}
                onChange={(e) => setCourseFee(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white
                 border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40  focus:outline-none focus:ring no-arrows"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="courseDuration">
                Course Duration
              </label>
              <input
                id="courseDuration"
                type="text"
                placeholder="3 months"
                value={courseDuration}
                onChange={(e) => setCourseDuration(e.target.value)}
                className="block w-full px-4 py-2 mt-2  bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300
               focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex justify-center mx-auto my-2 pb-3">
            <button
              type="button"
              className="w-full px-12 py-2.5 leading-5 text-black/75 font-medium transition-colors duration-300 transform bg-gradient-to-r rounded-md bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-300"
              onClick={handleSubmit}
            >
              {editCourse ? "Update" : "Save"}
            </button>
          </div>
          <hr />

          <div className="flex justify-end mt-6 pb-3">
            <div className="flex justify-between items-center gap-2">
              <button
                onClick={toggleModel}
                type="button"
                className="px-8 py-2.5 leading-5 font-medium text-red-600 transition-colors duration-300 transform bg-red-300 rounded-md hover:bg-red-200 focus:outline-none focus:bg-red-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CourseForm;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData, updateUser } from "../../redux-config/CourseSlice";
import axios from "axios";

const CourseForm = ({ toggleModel, editCourse }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    fee: "",
    courseDuration: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (editCourse) {
      setFormData(editCourse);
    }
  }, [editCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting data:", formData);
    try {
      if (editCourse) {
        await axios.put(
          `http://localhost:9090/course/${editCourse.courseId}`,
          formData
        );
        dispatch(updateUser({ ...formData, id: editCourse.courseId }));
      } else {
        const response = await axios.post(
          "http://localhost:9090/course",
          formData
        );
        console.log("API Response:", response.data);

        dispatch(addData(response.data));
      }

      toggleModel();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.log(error);
      alert(`An error occurred: ${errorMessage}`);
    }
  };
  return (
    <section className="course-form">
      <div className="max-w-lg mx-auto mt-6 bg-white rounded-md shadow-md">
        <div className="p-4 flex justify-between items-center gap-2 rounded-t-md bg-gradient-to-r from-orange-300 to-yellow-300">
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
          <div className="grid grid-cols-1 gap-6 text-gray-500 sm:grid-cols-1 p-1 ">
            <div>
              <label>Course Name</label>
              <input
                type="text"
                name="name"
                placeholder="enter course name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label>Course Category</label>
              <select
                value={formData.category}
                name="category"
                onChange={handleChange}
                className="block w-full h-10 py-2 px-4 mt-2 text-gray-700 border rounded-md"
              >
                <option>Select Category</option>
                <option value="Job Guaranted Program">
                  Job Guaranted Program
                </option>
                <option value="MNC Expert Program">MNC Expert Program</option>
                <option value="Mastery Program">Mastery Program</option>
                <option value="Foundation Program">Foundation Program</option>
                <option value="Crash Courses Program">
                  Crash Courses Program
                </option>
              </select>
            </div>

            <div className="flex justify-between gap-2 ">
              <div>
                <label>Course Fee</label>
                <input
                  type="number"
                  name="fee"
                  placeholder="enter course fee"
                  value={formData.fee}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md"
                />
              </div>

              <div>
                <label>Course Fee Discount</label>
                <input
                  type="number"
                  name="fee"
                  placeholder="enter fee discount"
                  value={formData.discount}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md"
                />
              </div>
            </div>
            <div>
              <label>Duration</label>
              <input
                type="text"
                name="courseDuration"
                placeholder="enter course duration"
                value={formData.courseDuration}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md"
              />
            </div>
          </div>
          <div className="flex justify-center mx-auto mt-4 my-2 pb-3">
            <button
              type="submit"
              className="w-full px-12 py-2.5 leading-5 text-black/75 font-medium transition-colors duration-300 transform bg-gradient-to-r rounded-md bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-300"
              onClick={handleSubmit}
            >
              Add Course
            </button>
          </div>
          {/* <hr /> */}
          {/* 
          <div className="flex justify-end mt-6 pb-3">
            <div className="flex justify-between items-center gap-2">
              <button
                onClick={toggleModel}
                type="button"
                className="px-8 py-2.5 leading-5 font-medium text-red-600 transition-colors duration-300 transform bg-red-300 rounded-md hover:bg-red-200 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div> */}
        </form>
      </div>
    </section>
  );
};

export default CourseForm;

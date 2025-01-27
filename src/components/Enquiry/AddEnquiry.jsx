import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData, updateData } from "../../redux-config/EnquirySlice";
import axios from "axios";

const AddEnquiry = ({ toggleModel, editUser }) => {
  const [formData, setFormData] = useState({
    courseName: "",
    courseCategory: "",
    courseFee: "",
    courseDuration: "",
    finalizeFees: "",
    name: "",
    email: "",
    contact: "",
    academicQualification: "",
    demo: "no",
    sourceOfEnquiry: "",
    yearOfPassing: "",
    referralBy: "",
    status: "Interested",
    followUp: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting enquiry with data:", formData); 
    try {
      if (editUser) {
       
        await axios.put(
          `http://localhost:9090/api/v1/enquiry/${editUser._id}`,
          formData
        );
        dispatch(updateData({ ...formData, id: editUser._id }));
      } else {
        const response = await axios.post(
          "http://localhost:9090/api/v1/enquiry/enquiry-form",
          formData
        );
        console.log("API Response:", response.data);
        dispatch(addData(response.data));
      }

      toggleModel(); 
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.log("Error adding/updating enquiry:", error);
      alert(`An error occurred: ${errorMessage}`);
    }
  };

  return (
    <>
      <section className="enquiry-form">
        <div
          className={`max-w-96 sm:max-w-xl md:max-w-4xl mx-auto mt-6 bg-white rounded-md shadow-md duration-1000`}
        >
          <div className="p-6 flex justify-between items-center gap-2 rounded-t-md bg-gradient-to-r from-orange-300 to-yellow-300">
            <h2 className="text-lg font-semibold text-gray-600 capitalize">
              {editUser ? "Edit Enquiry" : "Add Enquiry"}
            </h2>
            <button
              onClick={toggleModel}
              className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md"
            >
              X
            </button>
          </div>

          <form onSubmit={handleSubmit} className="px-8 py-4">
            <div
              className="grid grid-cols-1 gap-6 mt-4 
              sm:grid-cols-2 md:grid-cols-3 "
            >
              <div>
                <label className="text-gray-600" htmlFor="courseCategory">
                  Course Categories<sup>*</sup>
                </label>
                <select
                  id="courseCategory"
                  name="courseCategory"
                  value={formData.courseCategory}
                  onChange={handleChange}
                  className="block w-full h-10 py-2 px-4 mt-2 
                    text-gray-600  border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                >
                  <option defaultValue="Select Category">
                    Select Category
                  </option>
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
                <label className="text-gray-600 text-sm" htmlFor="courseName">
                  Course Name<sup>*</sup>
                </label>
                <select
                  id="courseName"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  className="block w-full h-10 py-2 px-4 mt-2
                    text-gray-600  border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                >
                  <option defaultValue="Select Category">Select Course</option>
                  <option value="Fullstack Development">
                    Fullstack Development (MERN/ MEAN)
                  </option>
                  <option value="Frontend Development (ReactJS/ AngularJS)">
                    Frontend Development (ReactJS/ AngularJS)
                  </option>
                  <option value="Backend Development (ExpressJS/NodeJS)">
                    Backend Development (ExpressJS/NodeJS)
                  </option>
                  <option value="Data Analytics, Data Science & Business Analytics">
                    Data Analytics, Data Science & Business Analytics
                  </option>

                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>

              <div>
                <label className="text-gray-600" htmlFor="courseDuration">
                  Course Duration<sup>*</sup>
                </label>
                <input
                  id="courseDuration"
                  name="courseDuration"
                  type="text"
                  value={formData.courseDuration}
                  onChange={handleChange}
                  placeholder="enter course duration"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                    border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="courseFee">
                  Course Fee<sup>*</sup>
                </label>
                <input
                  id="courseFee"
                  name="courseFee"
                  type="text"
                  disabled
                  placeholder="enter course fees"
                  value={formData.courseFee}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                    border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>

              <div>
                <label className="text-gray-600" htmlFor="finalizeFees">
                  Finalize Fees<sup>*</sup>
                </label>
                <input
                  id="finalizeFees"
                  name="finalizeFees"
                  type="text"
                  value={formData.finalizeFees}
                  onChange={handleChange}
                  placeholder="enter finalized fees"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                    border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="studentName">
                  Name of the candidate<sup>*</sup>
                </label>
                <input
                  id="studentName"
                  type="text"
                  placeholder="enter name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-600 
                    bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="studentEmail">
                  Email Id<sup>*</sup>
                </label>
                <input
                  id="studentEmail"
                  name="email"
                  type="text"
                  placeholder="enter email id"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300
                  focus:ring-opacity-20  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="studentContactNo">
                  Contact Number<sup>*</sup>
                </label>
                <input
                  id="studentContactNo"
                  name="contact"
                  type="text"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="+91 | mobile number"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300
                  focus:ring-opacity-20  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-600"
                  htmlFor="studentAcademicQualification"
                >
                  Academic Qualification
                </label>
                <input
                  id="enter academicQualification"
                  name="academicQualification"
                  type="text"
                  placeholder="enter academic qualification"
                  value={formData.academicQualification}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                    border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>

              <div>
                <label className="text-gray-600" htmlFor="yearOfPassing">
                  Year of Passing
                </label>
                <input
                  id="yearOfPassing"
                  name="yearOfPassing"
                  type="text"
                  placeholder="enter passing year"
                  value={formData.yearOfPassing}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                    border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>

              <div>
                <label className="text-gray-600" htmlFor="sourceOfEnquiry">
                  Source of Enquiry
                </label>
                <input
                  id="sourceOfEnquiry"
                  name="sourceOfEnquiry"
                  type="text"
                  placeholder="enter sourceOfEnquiry"
                  value={formData.sourceOfEnquiry}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300
                  focus:ring-opacity-20  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="referralBy">
                  Referral By
                </label>
                <input
                  id="referralBy"
                  name="referralBy"
                  type="text"
                  value={formData.referralBy}
                  onChange={handleChange}
                  placeholder="enter refferral person name"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                    border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="status">
                  Enquiry Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="block w-full h-10 py-2 px-4 mt-2 text-gray-600  border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                >
                  <option defaultValue="Select Category">Select status</option>
                  <option value="interested">Interested</option>
                  <option value="callback">Callback</option>
                  <option value="not interested">Not interested</option>
                </select>
              </div>
              <div>
                <label className="text-gray-600" htmlFor="demoClass">
                  Demo Classs<sup>*</sup>
                </label>
                <select
                  id="demoClass"
                  name="demo"
                  value={formData.demo}
                  onChange={handleChange}
                  className="block w-full h-10 py-2 px-4 mt-2 text-gray-600  border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                >
                  <option defaultValue="Select Category">Select demo</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-gray-600" htmlFor="referralBy">
                  Follow up message
                </label>
                <input
                  id="referralBy"
                  name="followUp"
                  type="text"
                  value={formData.followUp}
                  onChange={handleChange}
                  placeholder="enter follow up message"
                  className="block w-full px-4 py-2 mt-2 text-gray-600 bg-white
                    border border-gray-200 rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:ring-opacity-20  focus:outline-none focus:ring no-arrows"
                />
              </div>
            </div>

            <div className="flex justify-end mt-12 pb-3">
              <div className="flex justify-between items-center gap-2">
                <button
                  onClick={toggleModel}
                  type="button"
                  className="px-8 py-2.5 leading-5 font-medium text-red-600 transition-colors duration-300 transform bg-red-300 rounded-md hover:bg-red-200 focus:outline-none focus:bg-red-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-12 py-2.5 leading-5 text-black/75 font-medium transition-colors duration-300
                      transform bg-gradient-to-r rounded-md bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:bg-yellow-300"
                  onClick={handleSubmit}
                >
                  Add Enquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddEnquiry;

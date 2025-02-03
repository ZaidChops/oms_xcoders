import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  BookOpen,
  Calendar,
  GraduationCap,
  Save,
  School,
  MessageSquare,
  UserCheck,
  Users,
  AlertCircle,
  IndianRupee,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { addData, updateData } from "../../redux-config/EnquirySlice";
import { toast } from "react-toastify";
import axios from "axios";

const EnquiryForm1 = ({ toggleModel, editUser }) => {
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
    counselorName: "",
    status: "Interested",
    followUp: "",
  });

  const [courseDetails, setCourseDetails] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    }
  }, [editUser]);

  const fetchCoursesByCategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9090/api/v1/course/getCoursesByCategory`,
        {
          params: { courseCategory: formData.courseCategory },
        }
      );
      console.log(response);
      console.log(response.data.courseNames);
      setCourseDetails(response.data.courseNames);
    } catch (error) {
      console.error("Error fetching filtered courses:", error);
    }
  };

  useEffect(() => {
    if (formData.courseCategory) {
      fetchCoursesByCategory();
    } else {
      setCourseDetails([]);
    }
  }, [formData.courseCategory]);

  useEffect(() => {
    if (formData.courseName) {
      const fetchCourseDetails = async () => {
        try {
          const response = await axios.get(
            `http://localhost:9090/api/v1/course/feeFilter`,
            {
              params: {
                courseName: formData.courseName,
                courseCategory: formData.courseCategory,
              },
            }
          );

          const { courseFee, courseDuration } = response.data.course;

          setFormData((prev) => ({
            ...prev,
            courseFee,
            courseDuration,
          }));
        } catch (error) {
          console.error("Error fetching course details:", error);
          toast.error("Failed to fetch course details");
        }
      };
      fetchCourseDetails();
    }
  }, [formData.courseName, formData.courseCategory]);

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
        toast.success("Enquiry updated successfully!");
      } else {
        const response = await axios.post(
          "http://localhost:9090/api/v1/enquiry/enquiry-form",
          formData
        );
        console.log("API Response:", response.data);
        dispatch(addData(response.data));
        toast.success("Enquiry added successfully!");
      }

      toggleModel();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.log("Error adding/updating enquiry:", error);
      alert(`An error occurred: ${errorMessage}`);
      toast.error("Failed to submit enquiry");
    }
  };

  const categories = [
    "Job Guaranteed Program",
    "MNC Expert Program",
    "Mastery Program",
    "Foundation Program",
    "IPB Program",
    "Crash Courses",
  ];

  // const statusOptions = [
  //   'New',
  //   'In Progress',
  //   'Scheduled for Demo',
  //   'Demo Completed',
  //   'Enrolled',
  //   'Not Interested',
  //   'Lost'
  // ];

  const statusOptions = ["Interested", "Callback", "Not Interested"];

  return (
    <>
      <section className="enquiry-form">
        <div className="min-h-screen fixed -space-x-0 inset-0 z-50 bg-black bg-opacity-50 py-12 px-4 sm:px-6 lg:px-8 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-300 to-yellow-300 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="h-8 w-8 text-gray-700" />
                    <h1 className="ml-3 text-2xl font-medium text-gray-700">
                      Course Enquiry Form
                    </h1>
                  </div>
                  <button
                    onClick={() =>toggleModel()}
                    className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md"
                  >
                    X
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
                {/* Course Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Course Category */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <School className="h-5 w-5 text-gray-400" />
                      <span>Course Category</span>
                    </label>
                    <select
                      name="courseCategory"
                      value={formData.courseCategory}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Course Name */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <BookOpen className="h-5 w-5 text-gray-400" />
                      <span>Course Name</span>
                    </label>
                    <select
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleChange}
                      required
                      disabled={!formData.courseCategory}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                    >
                      <option value="">Select Course</option>
                      {courseDetails.map((course, index) => (
                        <option key={index} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Duration */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <span>Duration</span>
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.courseDuration}
                      readOnly
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                      placeholder="Course duration"
                    />
                  </div>

                  {/* Course Fee */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <IndianRupee className="h-5 w-5 text-gray-400" />
                      <span>Course Fee</span>
                    </label>
                    <input
                      type="text"
                      name="courseFee"
                      value={formData.courseFee}
                      readOnly
                      className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                      placeholder="Course fee"
                    />
                  </div>

                  {/* Finalize Fee */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <IndianRupee  className="h-5 w-5 text-gray-400" />
                      <span>Finalize Fee</span>
                    </label>
                    <input
                      type="number"
                      name="finalizeFees"
                      value={formData.finalizeFees}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                      placeholder="Enter finalized fee"
                    />
                  </div>
                </div>

                {/* Personal Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Candidate Name */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <User className="h-5 w-5 text-gray-400" />
                      <span>Candidate Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                      placeholder="Enter candidate name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                      placeholder="Enter email address"
                    />
                  </div>

                  {/* Contact */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span>Contact Number</span>
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                      placeholder="Enter contact number"
                    />
                  </div>

                  {/* Academic Qualification */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <GraduationCap className="h-5 w-5 text-gray-400" />
                      <span>Academic Qualification</span>
                    </label>
                    <input
                      type="text"
                      name="academicQualification"
                      value={formData.academicQualification}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                      placeholder="Enter qualification"
                    />
                  </div>

                  {/* Year of Passing */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <span>Year of Passing</span>
                    </label>
                    <input
                      type="number"
                      name="yearOfPassing"
                      value={formData.yearOfPassing}
                      onChange={handleChange}
                      required
                      min="1900"
                      max="2099"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                      placeholder="Enter passing year"
                    />
                  </div>

                  {/* Source of Enquiry */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span>Source of Enquiry</span>
                    </label>
                    <input
                      name="sourceOfEnquiry"
                      value={formData.sourceOfEnquiry}
                      onChange={handleChange}
                      placeholder="source"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                    />
                  </div>

                  {/* Referral By */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <UserCheck className="h-5 w-5 text-gray-400" />
                      <span>Referral By</span>
                    </label>
                    <input
                      type="text"
                      name="referralBy"
                      value={formData.referralBy}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                      placeholder="Enter referral name"
                    />
                  </div>

                  {/* Enquiry Status */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <AlertCircle className="h-5 w-5 text-gray-400" />
                      <span>Enquiry Status</span>
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Demo Schedule */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <span>Demo Class</span>
                    </label>
                    <select
                      type="datetime-local"
                      name="demo"
                      value={formData.demo}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                    px-4 py-2 border outline-none"
                    >
                      <option value="">Select demo</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  {/* Counselor Name */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <User className="h-5 w-5 text-gray-400" />
                      <span>Counselor Name</span>
                    </label>
                    <input
                      type="text"
                      name="counselorName"
                      value={formData.counselorName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                           px-4 py-2 border outline-none"
                      placeholder="Enter counselor name"
                    />
                  </div>
                </div>

                {/* Follow Up Message */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                    <span>Follow Up Message</span>
                  </label>
                  <textarea
                    name="followUp"
                    value={formData.followUp}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                         px-4 py-2 border outline-none"
                    placeholder="Enter follow up message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                  >
                    <Save className="h-5 w-5 mr-2" />
                    Submit Enquiry
                  </button>
                </div>
              </form>

              <hr />

              <div className="bg-gray-50 px-6 py-4">
                <div className="text-sm text-gray-500 flex justify-end">
                  <button onClick={() => toggleModel()} className="text-red-600 bg-red-300 px-4 py-2 rounded-md">
                    close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnquiryForm1;

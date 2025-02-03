import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Save,
  Wallet,
  Book,
  Home,
  MapPin,
  NotebookTabs,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { addData, updateData } from "../../redux-config/EnquirySlice";
import axios from "axios";
import { toast } from "react-toastify";

const AdmissionForm = ({ toggleModel, editDetails }) => {
  const [formData, setFormData] = useState({
    // Personal Details
    name: "",
    // gender: "",
    dateOfBirth: "",
    contact: "",
    email: "",
    marks: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
    parentContact: "",
    academics: "",
    yearOfPassing: "",
    temporaryAddress: "",
    permanentAddress: "",
    sourceOfAdmission: "",
    refrence: "",
    course: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (editDetails) {
      setFormData(editDetails);
    }
  }, [editDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editDetails) {
        await axios.put(
          `http://localhost:9090/api/v1/admission/${editDetails._id}`,
          formData
        );
        dispatch(updateData({ ...formData, id: editDetails._id }));
        toast.success("Enquiry updated successfully!");
      } else {
        console.log(formData);
        const response = await axios.post(
          "http://localhost:9090/api/v1/admission/create",
          formData
        );
        console.log("API Response:", response.data);
        dispatch(addData(response.data));
        toast.success("Enquiry added successfully!");
      }

      toggleModel();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.log("Error adding/updating Admission:", error);
      alert(`An error occurred: ${errorMessage}`);
      toast.error("Failed to submit enquiry");
    }
  };

  return (
    <div className="min-h-screen fixed -space-x-0 inset-0 z-50 bg-black bg-opacity-50 overflow-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-300 to-yellow-300 px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <GraduationCap className="h-8 w-8 text-gray-700" />
                <h1 className="ml-3 text-2xl font-medium text-gray-700">
                  Admission Form
                </h1>
              </div>
              <button
                onClick={() => toggleModel()}
                className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md"
              >
                X
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
            {/* Personal Details Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <User className="h-5 w-5 mr-2 text-blue-500" />
                Personal Details
              </h2>
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
                    placeholder="enter candidate name"
                  />
                </div>

                {/* Gender */}
                {/*  <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <User className="h-5 w-5 text-gray-400" />
                    <span>Gender</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                               px-4 py-2 border outline-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div> */}

                {/* Date of Birth */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span>Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                               px-4 py-2 border outline-none"
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
                    placeholder="enter contact number"
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
                    placeholder="enter email address"
                  />
                </div>

                {/* Father's Name */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <User className="h-5 w-5 text-gray-400" />
                    <span>Father&apos;s Name</span>
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                               px-4 py-2 border outline-none"
                    placeholder="enter father's name"
                  />
                </div>

                {/* Mother's Name */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <User className="h-5 w-5 text-gray-400" />
                    <span>Mother&apos;s Name</span>
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                               px-4 py-2 border outline-none"
                    placeholder="enter mother's name"
                  />
                </div>

                {/* Father's Occupation */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <Wallet className="h-5 w-5 text-gray-400" />
                    <span>Father&apos;s Occupation</span>
                  </label>
                  <input
                    type="text"
                    name="fatherOccupation"
                    value={formData.fatherOccupation}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                               px-4 py-2 border outline-none"
                    placeholder="enter father's occupation"
                  />
                </div>

                {/* Parent Contact */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span>Parent Contact</span>
                  </label>
                  <input
                    type="tel"
                    name="parentContact"
                    value={formData.parentContact}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                               px-4 py-2 border outline-none"
                    placeholder="enter parent contact number"
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
                    name="academics"
                    value={formData.academics}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                               px-4 py-2 border outline-none"
                    placeholder="enter qualification"
                  />
                </div>

                {/* Marks */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <NotebookTabs className="h-5 w-5 text-gray-400" />
                    <span>Marks</span>
                  </label>
                  <input
                    type="number"
                    name="marks"
                    value={formData.marks}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                               px-4 py-2 border outline-none"
                    placeholder="enter passing year"
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
                    placeholder="enter passing year"
                  />
                </div>

                {/* Temporary Address */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>Temporary Address</span>
                  </label>
                  <input
                    type="text"
                    name="temporaryAddress"
                    value={formData.temporaryAddress}
                    onChange={handleChange}
                    required
                    // pattern="[0-9]{12}"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                               px-4 py-2 border outline-none"
                    placeholder="enter temporary address"
                  />
                </div>

                {/* Permanent Address */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <Home className="h-5 w-5 text-gray-400" />
                    <span>Permanent Address</span>
                  </label>
                  <input
                    type="text"
                    name="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={handleChange}
                    required
                    // pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                                px-4 py-2 border outline-none"
                    placeholder="enter permanent address"
                  />
                </div>

                {/* Refrence */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <User className="h-5 w-5 text-gray-400" />
                    <span>Refrence by</span>
                  </label>
                  <input
                    type="text"
                    name="refrence"
                    value={formData.refrence}
                    onChange={handleChange}
                    required
                    // pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm px-4 py-2 border outline-none"
                    placeholder="enter refrence"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <User className="h-5 w-5 text-gray-400" />
                    <span>Source of Admission</span>
                  </label>
                  <input
                    type="text"
                    name="sourceOfAdmission"
                    value={formData.sourceOfAdmission}
                    onChange={handleChange}
                    required
                    // pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm px-4 py-2 border outline-none"
                    placeholder="enter source"
                  />
                </div>

                {/* Course */}
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                    <Book className="h-5 w-5 text-gray-400" />
                    <span>Course Name</span>
                  </label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400 sm:text-sm
                                px-4 py-2 border outline-none"
                    placeholder="enter course name"
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Submit Admission Form
                </button>
              </div>
            </div>
          </form>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4">
            <div className="text-sm text-gray-500">
              All fields marked with * are required
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;

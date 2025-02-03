import {
  User,
  Mail,
  Phone,
  Code,
  Calendar,
  GraduationCap,
  Save,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData, updateData } from "../../redux-config/CourseSlice";
import axios from "axios";
import { toast } from "react-toastify";

const TrainerForm = ({ toggleModel, isEditing }) => {
  const [formData, setFormData] = useState({
    trainerName: "",
    trainerTechStack: "",
    trainerContact: "",
    trainerEmail: "",
    trainerJoiningDate: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEditing) {
      setFormData(({
        ...isEditing,
        trainerJoiningDate: isEditing.trainerJoiningDate ? new Date(isEditing.trainerJoiningDate)
          .toISOString()
          .split("T")[0] : "",
      }));
    }
  }, [isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting data:", formData);
    try {
      if (isEditing) {
        const response = await axios.put(
          `http://localhost:9090/api/v1/trainer/${isEditing.trainerId}`,
          formData
        );
        console.log(response);
        dispatch(updateData({ ...formData, id: isEditing.TrainerId }));
        toast.success("Trainer updated successfully!");
      } else {
        const response = await axios.post(
          "http://localhost:9090/api/v1/trainer",
          formData
        );
        console.log("API Response:", response.data);

        dispatch(addData(response.data));
        toast.success("Trainer added successfully!");
      }

      toggleModel();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      console.log(error);
      alert(`An error occurred: ${errorMessage}`);
    }
  };
  return (
    <section>
      <div className="min-h-screen fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="min-w-96 max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-300 to-yellow-300 px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center">
                  <GraduationCap className="h-8 w-8 text-gray-700" />
                  <h1 className="ml-3 text-2xl font-semibold text-gray-800">
                    {isEditing ? "Edit Trainer" : "Add New Trainer"}
                  </h1>
                </div>
                <button
                  onClick={toggleModel}
                  className="flex items-center px-3 py-1 bg-red-500 rounded-full text-white hover:bg-opacity-30 "
                >
                  {/* {isEditing ? (
                  <>
                    <Plus className="h-4 w-4 mr-1" />
                    New Trainer
                  </>
                ) : (
                  <>
                    <Edit2 className="h-4 w-4 mr-1" />
                    Edit Sample
                  </>
                )} */}
                  X
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6">
              {/* Trainer Name */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <User className="h-5 w-5 text-gray-400" />
                  <span>Trainer Name</span>
                </label>
                <input
                  type="text"
                  name="trainerName"
                  value={formData.trainerName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-300 sm:text-sm
                         px-4 py-2 border outline-none"
                  placeholder="Enter trainer name"
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
                  name="trainerEmail"
                  value={formData.trainerEmail}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-300 sm:text-sm
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
                  name="trainerContact"
                  value={formData.trainerContact}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-300 sm:text-sm
                         px-4 py-2 border outline-none"
                  placeholder="Enter contact number"
                />
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <Code className="h-5 w-5 text-gray-400" />
                  <span>Tech Stack</span>
                </label>
                <input
                  type="text"
                  name="trainerTechStack"
                  value={formData.trainerTechStack}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-300 sm:text-sm
                         px-4 py-2 border outline-none"
                  placeholder="Enter tech stack "
                />
              </div>

              {/* Joining Date */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span>Joining Date</span>
                </label>
                <input
                  type="date"
                  name="trainerJoiningDate"
                  value={formData.trainerJoiningDate}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-300 sm:text-sm
                  px-4 py-2 border outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                >
                  <Save className="h-5 w-5 mr-2" />
                  {isEditing
                    ? "Update Trainer Details"
                    : "Save Trainer Details"}
                </button>
              </div>
            </form>

            {/* Footer */}
            {/* <div className="bg-gray-50 px-6 py-4">
            <div className="text-sm text-gray-500">
              {isEditing ? 'Editing existing trainer details' : 'All fields are required'}
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerForm;


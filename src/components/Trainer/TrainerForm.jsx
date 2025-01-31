import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData, updateData } from "../../redux-config/TrainerSlice";
import axios from "axios";
import { toast } from "react-toastify";

const TrainerForm = ({ toggleModel, editTrainer }) => {
  const [formData, setFormData] = useState({
    trainerName: "",
    trainerEmail: "",
    trainerContact: "",
    trainerTechStack: "",
    trainerJoiningDate: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (editTrainer) {
      setFormData(editTrainer);
    }
  }, [editTrainer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting data:", formData);
    try {
      if (editTrainer) {
        const response = await axios.put(
          `http://localhost:9090/api/v1/trainer/update/${editTrainer.trainerId}`,
          formData
        );
        console.log(response);
        dispatch(updateData({ ...formData, id: editTrainer.trainerId }));
        toast.success("Course updated successfully!");
      } else {
        const response = await axios.post(
          "http://localhost:9090/api/v1/trainer/create",
          formData
        );
        console.log("API Response:", response.data);

        dispatch(addData(response.data));
        toast.success("Trainer added successfully!");
      }

      toggleModel();
    } catch (error) {
      // const errorMessage = error.response?.data?.message || error.message;
      console.log(error);
      // alert(`An error occurred: ${errorMessage}`);
    }
  };

  return (
    <section className="course-form overflow-auto">
      <div className="max-w-lg mx-auto mt-6 bg-white rounded-md shadow-md">
        <div className="p-4 flex justify-between items-center gap-2 rounded-t-md bg-gradient-to-r from-orange-300 to-yellow-300">
          <h2 className="text-lg font-semibold text-gray-700 capitalize">
            {editTrainer ? "Edit Trainer" : "Add Trainer"}
          </h2>
          <button
            onClick={toggleModel}
            className="h-8 w-8 rounded-full text-white bg-red-500 shadow-md"
          >
            X
          </button>
        </div>
        <form className="px-6 py-4" onSubmit={handleSubmit} autoComplete="off">
          <div className="grid grid-cols-1 gap-6 text-gray-500 sm:grid-cols-1 p-1 ">
            <div>
              <label htmlFor="trainerName">Trainer Name</label>
              <input
                type="text"
                id="trainerName"
                name="trainerName"
                placeholder="enter course name"
                value={formData.trainerName}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="trainerEmail">Trainer Email</label>
              <input
                type="text"
                id="trainerEmail"
                name="trainerEmail"
                placeholder="enter course name"
                value={formData.trainerEmail}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md"
              />
            </div>

            <div className="flex justify-between gap-2 ">
              <div>
                <label htmlFor="trainerContact">Trainer ContactNo</label>
                <input
                  type="number"
                  id="trainerContact"
                  name="trainerContact"
                  placeholder="enter course fees"
                  value={formData.trainerContact}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="trainerTechStack">Trainer TechStact</label>
                <input
                  type="text"
                  id="trainerTechStack"
                  name="trainerTechStack"
                  placeholder="enter fees discount"
                  value={formData.trainerTechStack}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="trainerJoiningDate">Trainer Joining Date</label>
              <input
                type="date"
                id="trainerJoiningDate"
                name="trainerJoiningDate"
                placeholder="enter course duration"
                value={formData.trainerJoiningDate}
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
              {editTrainer ? "Edit Trainer" : "Add Trainer"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TrainerForm;

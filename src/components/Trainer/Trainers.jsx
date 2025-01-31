import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showData, deleteData } from "../../redux-config/TrainerSlice";
import axios from "axios";
import TrainerForm from "./TrainerForm";
import { Popup } from "../Popup.jsx";

const Trainers = () => {
  const dispatch = useDispatch();
  const allTrainers = useSelector((state) => state.trainerData.allData);
  console.log("Current data:", allTrainers);
  const [showModel, setShowModel] = useState(false);
  const [editTrainer, setEditTrainer] = useState(null);
  const [togglePopup, setTogglePopup] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const fetchTrainers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9090/api/v1/trainer/list"
      );
      console.log(response.data.trainer);
      const data = response.data.trainer || [];
      dispatch(showData(data));
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleEdit = (trainer) => {
    setEditTrainer(trainer);
    toggleModel();
  };

  const toggleModel = () => {
    setShowModel(!showModel);
    if (showModel) {
      fetchTrainers();
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:9090/api/v1/trainer/delete/${id}`
      );
      console.log(response);

      dispatch(deleteData(id));
      fetchTrainers();
      console.log("Course deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const deletePopup = (id) => {
    setTogglePopup(!togglePopup);
    setDeleteId(id);
  };

  const handleAdd = () => {
    setEditTrainer(null);
    toggleModel();
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  return (
    <section>
      <div className="relative mx-4 my-2 p-4 flex flex-col border-2 shadow-sm bg-white border-gray-200 border-opacity-50 rounded-lg">
        <div className="flex items-center justify-between p-2 gap-y-5">
          <h2 className="inline-block font-semibold text-xl">All Trainers</h2>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="px-3 py-2 font-medium shadow-sm bg-yellow-400 text-gray-800 border rounded-lg gap-x-2 inline-flex items-center"
              onClick={handleAdd}
            >
              Add Trainer
            </button>
            {showModel && (
              <div
                className="fixed inset-0 pt-20 bg-gray-50 bg-opacity-50 z-50 overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <TrainerForm
                  toggleModel={toggleModel}
                  editTrainer={editTrainer}
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
                        Trainer Name
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Trainer Email
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Trainer Contact
                      </th>

                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Trainer Tech Stack
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Trainer Joining Date
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 table-scroll">
                    {allTrainers.length > 0 ? (
                      allTrainers.map((trainer, index) => (
                        <tr key={index}>
                          <td className="px-3 py-2 text-sm font-medium text-gray-800">
                            {trainer.trainerId}
                          </td>
                          <td className="px-3 py-2 text-sm font-medium text-gray-800">
                            {trainer.trainerName}
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-800">
                            {trainer.trainerEmail}
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-800">
                            {trainer.trainerContact}
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-800">
                            {trainer.trainerTechStack}
                          </td>
                          <td className="px-3 py-2 text-sm text-gray-800">
                            {trainer.trainerJoiningDate}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center gap-2 ">
                              <button
                                type="button"
                                className="inline-block px-2.5 py-1 text-base font-semibold mr-6 rounded-lg border border-transparent text-gray-800 bg-yellow-400 hover:text-gray-600 focus:outline-none"
                                onClick={() => handleEdit(trainer)}
                              >
                                <i className="fa-regular fa-pen-to-square"></i>{" "}
                                edit
                              </button>
                              <button
                                type="button"
                                className="inline-block px-2.5 py-1 text-base font-semibold mr-6 rounded-lg border border-transparent text-gray-800 bg-yellow-400 hover:text-gray-600 focus:outline-none"
                                onClick={() => deletePopup(trainer.trainerId)}
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
        {/* <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            /> */}
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
            data={"trainer"}
          />
        </div>
      )}
    </section>
  );
};
export default Trainers;

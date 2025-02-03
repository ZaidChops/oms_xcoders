import TrainerActions from "./TrainerActions";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { showData } from "../../redux-config/TrainerSlice";
import Table from "../newComponents/Table";
import Pagination from "../newComponents/Pagination";
import TrainerPreview from "./TrainerPreview";
// import PreviewEnquiry from "../enquiries/PreviewEnquiry";

const TrainersList = () => {
  const dispatch = useDispatch();
  const trainers = useSelector((state) => state.trainerData.allData);
  const [showModel, setShowModel] = useState(false);
  const [editTrainer, setEditTrainer] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9090/api/v1/trainer",
          {
            params: { page, limit: 2 },
          }
        );
        console.log(response);
        const data = response.data.trainersData;
        // console.log(data);
        setTotalItems(data.total);
        setTotalPages(data.pages);
        dispatch(showData(data.items));
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };
    fetchTrainers();
  }, [page, dispatch]);

  const toggleModel = () => setShowModel(!showModel);
  const togglePreview = () => setShowPreview(!showPreview);
  const handleAdd = () => {
    setEditTrainer(null);
    // console.log("add")
    toggleModel();
  };

  const handleEdit = (trainer) => {
    setEditTrainer(trainer);
    toggleModel();
  };

  const handlePreview = (trainer) => {
    setPreviewData(trainer);
    togglePreview();
  };

  const columns = [
    { label: "ID", field: "trainerId" },
    { label: "Name", field: "trainerName" },
    { label: "Tech Stack", field: "trainerTechStack" },
    { label: "Contact", field: "trainerContact" },
    { label: "Email Id", field: "trainerEmailId" },
    { label: "Joining Date", field: "trainerJoiningDate" },
  ];

  return (
    <section className="bg-gray-50 p-3">
      <div className="max-w-screen-4xl px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Enquiry Actions */}
          <TrainerActions
            handleAdd={handleAdd}
            showModel={showModel}
            toggleModel={toggleModel}
            editTrainer={editTrainer}
          />

          {/* Enquiry Table */}
          <Table
            data={trainers}
            columns={columns}
            actions={(trainer) => (
              <>
                <button
                  onClick={() => handlePreview(trainer)}
                  className="text-orange-600 px-2"
                >
                  <i className="fa-solid fa-eye"></i>
                </button>
                <button
                  onClick={() => handleEdit(trainer)}
                  className="text-blue-600 px-2"
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </>
            )}
          />

          {/* Pagination */}
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            totalItems={totalItems}
          />

          {/* Preview Modal */}
          {showPreview && (
            <TrainerPreview
              togglePrevModel={togglePreview}
              data={previewData}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TrainersList;

import { useEffect, useState } from "react";
import { AdmissionAction } from "./AdmissionAction";
import Table from "../newComponents/Table";
import { useDispatch, useSelector } from "react-redux";
import { showData } from "../../redux-config/AdmissionSlice";
import PreviewAdmission from "./PreviewAdmission";
import axios from "axios";
import Pagination from "../newComponents/Pagination";

export const AdmissionList = () => {
  const dispatch = useDispatch();
  const admissions = useSelector((state) => state.admissionData.allData);

  const [showModel, setShowModel] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9090/api/v1/admission/list",
          {
            params: { page, limit: 2 },
          }
        );
        console.log(response)
        const data = response.data.admissionData;
        console.log(data);
        setTotalItems(data.total);
        setTotalPages(data.pages);
        dispatch(showData(data.items));
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };
    fetchEnquiries();
  }, [page, dispatch]);

  const toggleModel = () => setShowModel(!showModel);
  const togglePreview = () => setShowPreview(!showPreview);
  const handleAdd = () => {
    setEditUser(null);
    toggleModel();
  };
  const handleEdit = (admission) => {
    setEditUser(admission);
    toggleModel();
  };

  const handlePreview = (admission) => {
    setPreviewData(admission);
    togglePreview();
  };

  const columns = [
    { label: "ID", field: "admissionId" },
    { label: "Name", field: "name" },
    { label: "Contact", field: "contact" },
    { label: "Course Name", field: "course" },
    {
      label : ""
    }
  ];

  return (
    <section className="bg-gray-50 p-3">
      <div className="max-w-screen-3xl px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <AdmissionAction
            handleAdd={handleAdd}
            showModel={showModel}
            toggleModel={toggleModel}
            editUser={editUser}
          />

          <Table
            data={admissions}
            columns={columns}
            actions={(admission) => (
              <>
                <button
                  onClick={() => handlePreview(admission)}
                  className="text-orange-600 px-2"
                >
                  <i className="fa-solid fa-eye"></i>
                </button>
                <button
                  onClick={() => handleEdit(admission)}
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
            <PreviewAdmission
              togglePrevModel={togglePreview}
              data={previewData}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AdmissionList;

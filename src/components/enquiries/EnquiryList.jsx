import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { showData } from "../../redux-config/EnquirySlice";
import Table from "../newComponents/Table";
import Pagination from "../newComponents/Pagination";
import EnquiryAction from "./EnquiryAction";
import PreviewEnquiry from "./PreviewEnquiry";

const EnquiryList = () => {
  const dispatch = useDispatch();
  const enquiries = useSelector((state) => state.enquiryData.allData);

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
          "http://localhost:9090/api/v1/enquiry/list",
          {
            params: { page, limit: 2 },
          }
        );
        console.log(response)
        const data = response.data.enquiryData;
        // console.log(data);
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
  const handleEdit = (enquiry) => {
    setEditUser(enquiry);
    toggleModel();
  };

  const handlePreview = (enquiry) => {
    setPreviewData(enquiry);
    togglePreview();
  };

  const columns = [
    { label: "ID", field: "enquiryId" },
    { label: "Name", field: "name" },
    { label: "Contact", field: "contact" },
    { label: "Course Name", field: "courseName" },
    { label: "Course Fees", field: "courseFee" },
    { label: "Final Fees", field: "finalizeFees" },
    { label: "Status", field: "status" },
  ];

  return (
    <section className="bg-gray-50 p-3">
      <div className="max-w-screen-4xl px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Enquiry Actions */}
          <EnquiryAction
            handleAdd={handleAdd}
            showModel={showModel}
            toggleModel={toggleModel}
            editUser={editUser}
          />

          {/* Enquiry Table */}
          <Table
            data={enquiries}
            columns={columns}
            actions={(enquiry) => (
              <>
                <button
                  onClick={() => handlePreview(enquiry)}
                  className="text-orange-600 px-2"
                >
                  <i className="fa-solid fa-eye"></i>
                </button>
                <button
                  onClick={() => handleEdit(enquiry)}
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
            <PreviewEnquiry
              togglePrevModel={togglePreview}
              data={previewData}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default EnquiryList;

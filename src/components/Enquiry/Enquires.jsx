import { useState, useEffect } from "react";
import axios from "axios";
import TableComponent from "./TableComponent";
import Pagination from "./Pagination";
import EnquiryForm from "../Enquiries/EnquiryForm";
import PreviewEnquiry from "../Enquiries/PreviewEnquiry";

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get(`http://localhost:9090/api/v1/enquiry/list?page=${page}&limit=5`);
      setEnquiries(response.data.enquiryData.items);
      setTotalPages(response.data.enquiryData.pages);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [page]);

  const handleEdit = (enquiry) => {
    setEditUser(enquiry);
    setShowModal(true);
  };

  const handlePreview = (enquiry) => {
    setPreviewData(enquiry);
    setShowPreview(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditUser(null);
    fetchEnquiries(); // Refresh data after closing
  };

  const handleClosePreview = () => {
    setShowPreview(false);
    setPreviewData(null);
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
    <section className="p-3">
      <div className="max-w-screen-lg px-4">
        <h2 className="text-lg font-bold mb-4">Enquiries</h2>
        <TableComponent
          columns={columns}
          data={enquiries}
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
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-50 z-50 flex justify-center items-center">
          <EnquiryForm toggleModel={handleCloseModal} editUser={editUser} />
        </div>
      )}

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-50 z-50 flex justify-center items-center">
          <PreviewEnquiry togglePrevModel={handleClosePreview} data={previewData} />
        </div>
      )}
    </section>
  );
};

export default Enquiries;

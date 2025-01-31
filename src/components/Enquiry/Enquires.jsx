import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddEnquiry from "./AddEnquiry";
import PreviewEnquiry from "./PreviewEnquiry";
import { showData } from "../../redux-config/EnquirySlice";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

const Enquires = () => {
  const dispatch = useDispatch();
  const enquiries = useSelector((state) => state.enquiryData.allData);
  const [showModel, setShowModel] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const toggleModel = () => {
    setShowModel(!showModel);
    if (showModel) {
      fetchEnquiries(currentPage);
    }
  };

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

  const fetchEnquiries = async (page = 1) => {
    try {
      const response = await axios.get(
        `http://localhost:9090/api/v1/enquiry/list?page=${page}&limit=3`
      );
      const { data, totalPages } = response.data;
      dispatch(showData(data));
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    }
  };

  useEffect(() => {
    fetchEnquiries(currentPage);
  }, [currentPage]);

  return (
    <section>
      <div className="mx-4 my-2 p-4 flex flex-col border-2 shadow-sm bg-white border-gray-200 border-opacity-50 rounded-lg">
        <div className="flex items-center justify-between p-2 gap-y-5">
          <div className="inline-flex justify-start items-center gap-x-2">
            <div className="m-1 p-2 rounded-md text-white bg-gray-900">
              Today enquiries: {enquiries.length}
            </div>
            <div className="m-1 p-2 rounded-md text-white bg-cyan-500">
              Total enquiries: {enquiries.length}
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="px-3 py-2 font-medium shadow-sm bg-yellow-400 text-gray-800 border rounded-lg"
              onClick={handleAdd}
            >
              Add Enquiry
            </button>
            {showModel && (
              <div className="fixed pt-10 inset-0 bg-gray-50 bg-opacity-50 z-50 overflow-auto">
                <AddEnquiry toggleModel={toggleModel} editUser={editUser} />
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
                        Name
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Course Name
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Course Fees
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Final Fees
                      </th>
                      <th className="px-6 py-3 text-end text-xs font-medium text-gray-700 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Demo
                      </th>
                      <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {enquiries.length > 0 ? (
                      enquiries.map((enquiry, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {enquiry.enquiryId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            <span className="inline-block">{enquiry.name}</span>
                            <br />
                            <span className="inline-block">
                              {enquiry.email}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.contact}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.courseName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.courseFee}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.finalizeFees}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.status}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {enquiry.demo}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                className="text-yellow-400 hover:text-yellow-600"
                                onClick={() => handlePreview(enquiry)}
                              >
                                <i className="fa-solid fa-eye"></i>
                              </button>
                              <button
                                type="button"
                                className="text-blue-600 hover:text-blue-800"
                                onClick={() => handleEdit(enquiry)}
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="8"
                          className="text-center p-4 text-yellow-600"
                        >
                          No enquiries found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>

      {showPreview && (
        <div className="fixed pt-10 inset-0 bg-gray-50 bg-opacity-50 z-50 overflow-auto">
          <PreviewEnquiry togglePrevModel={togglePreview} data={previewData} />
        </div>
      )}
    </section>
  );
};

export default Enquires;

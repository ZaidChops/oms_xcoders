import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddEnquiry from "./AddEnquiry";
// import PreviewEnquiry from "./PreviewEnquiry";
import { showData } from "../../redux-config/EnquirySlice";
import axios from "axios";
import PreviewEnquiry from "./PreviewEnquiry";
const Enquires1 = () => {
  const dispatch = useDispatch();
  const enquiries = useSelector((state) => state.enquiryData.allData);
  // console.log("Current enquiries data:", enquiries);

  const [showModel, setShowModel] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const totalItems = 20;
  const pageSize = 3;
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);


  const toggleModel = () => {
    setShowModel(!showModel);
    if (showModel) {
      fetchEnquiries();
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

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9090/api/v1/enquiry/list",
        // {query : {
        //   page: currentPage,
        //   limit: 2,
        // }}
      );
      const data = response.data.enquiryData.items || [];
      // const pages = response.data.enquiryData.pages || 1;
      
      console.log(response.data)
      dispatch(showData(data));
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    }
  };



  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <section className="bg-gray-50 p-3">
      <div className="max-w-screen-4xl px-4">
        {/* Start coding here  */}
        <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <div
                id="actionsDropdownButton"
                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white bg-blue-400 focus:outline-none rounded-lg border border-gray-200 "
              >
                Total Enquiries: {enquiries.length} Students
              </div>
              <div
                id="actionsDropdownButton"
                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white bg-cyan-400 focus:outline-none rounded-lg border border-gray-200 "
              >
                Today Enquiries: {enquiries.length} Students
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                onClick={() => handleAdd()}
                type="button"
                className="flex items-center justify-center text-gray-800 bg-yellow-400 hover:bg-primary-800 focus:ring-1 focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2"
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add enquiry
              </button>
              {showModel && (
                <div
                  className={`fixed pt-10 -inset-0 bg-gray-50 bg-opacity-50 z-50 overflow-auto`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <AddEnquiry toggleModel={toggleModel} editUser={editUser} />
                </div>
              )}
            </div>
          </div>
          <hr className="my-4" />

          <div className="overflow-x-auto mx-2 border border-gray-200 rounded-md">
            <table className="w-full divide-y divide-gray-200 text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-yellow-400 ">
                <tr className="divide-x divide-gray-300">
                  <th scope="col" className="px-4 py-3">
                    id
                  </th>
                  <th scope="col" className="px-4 py-3">
                    name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    contact
                  </th>
                  <th scope="col" className="px-4 py-3">
                    course name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    course fees
                  </th>
                  <th scope="col" className="px-4 py-3">
                    final fees
                  </th>
                  <th scope="col" className="px-4 py-3">
                    demo
                  </th>
                  <th scope="col" className="px-4 py-3">
                    status
                  </th>

                  <th scope="col" className="px-4 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {enquiries.length > 0 ? (
                  enquiries.map((enquiry, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-3">{enquiry.enquiryId}</td>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <span className="block">{enquiry.name}</span>
                        <span className="block">{enquiry.email}</span>
                      </th>
                      <td className="px-4 py-3">{enquiry.contact}</td>
                      <td className="px-4 py-3">{enquiry.courseName}</td>
                      <td className="px-4 py-3">₹ {enquiry.courseFee}</td>
                      <td className="px-4 py-3">₹ {enquiry.finalizeFees}</td>
                      <td className="px-4 py-3">{enquiry.demo}</td>
                      <td className="px-4 py-3">{enquiry.status}</td>
                      <td className="px-4 py-3 flex items-center justify-end gap-2">
                        <button
                          type="button"
                          className="flex items-center justify-center text-orange-600 text-sm px-2 py-2"
                          onClick={() => handlePreview(enquiry)}
                        >
                          <i className="fa-solid fa-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="flex items-center justify-center text-blue-600 text-sm py-2 px-2 "
                          onClick={() => handleEdit(enquiry)}
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr colSpan="8" className="text-center px-4 py-2">
                    <td>No enquiries found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span className="font-semibold px-2 text-gray-900 ">
              {startItem}-{endItem}
              </span>
              of
              <span className="font-semibold px-2 text-gray-900 ">
                {totalItems}
              </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <button
                  href="#"
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  disabled = {currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev -1)}

                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">Prev</span>
                </button>
              </li>
              
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2.5 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  {currentPage}
                </a>
              </li>
              <li>
                <button
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  disabled = {currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev +1 )}
                >
                  <span className="">Next</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {showPreview && (
        <div className="fixed pt-10 -inset-0 bg-gray-50 bg-opacity-50 z-50 overflow-auto">
          <PreviewEnquiry togglePrevModel={togglePreview} data={previewData} />
        </div>
      )}
    </section>
  );
};

export default Enquires1;

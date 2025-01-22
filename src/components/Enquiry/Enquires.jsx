import { useState } from "react";
import { useSelector } from "react-redux";
import AddEnquiry from "./AddEnquiry";

const Enquires = () => {
  const enquiries = useSelector((state) => state.enquiryData.allData);
  const [showModel, setShowModel] = useState(false);
  const [editUser, setEditUser] = useState(null); // State for editing

  const toggleModel = () => setShowModel(!showModel);

  const handleAdd = () => {
    setEditUser(null); // Reset edit user when adding
    toggleModel();
  };

  const handleEdit = (enquiry) => {
    setEditUser(enquiry); // Set the enquiry to be edited
    toggleModel();
  };

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
              className="px-3 py-2 font-medium shadow-sm bg-yellow-400 text-gray-800 border rounded-lg gap-x-2 inline-flex items-center"
              onClick={handleAdd}
            >
              Add Enquiry
            </button>
            {showModel && (
              <div
                className={`absolute -inset-0 bg-gray-50 bg-opacity-50 z-50 overflow-auto`}
                onClick={(e) => e.stopPropagation()} // Prevent closing modal on inner clicks
              >
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
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">ID</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Name</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Contact</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Course</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Course Fees</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Final Fees</th>
                      <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-700 uppercase">Status</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Demo</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 table-scroll">
                    {enquiries.map((enquiry, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{enquiry.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          <span className="inline-block">{enquiry.name}</span>
                          <br />
                          <span className="inline-block">{enquiry.email}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{enquiry.contact}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{enquiry.course}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{enquiry.courseFee}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{enquiry.finalizeFees}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{enquiry.status}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{enquiry.demo}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <div className="flex items-center  gap-2">
                            <button type="button" className="inline-block text-base font-semibold rounded-lg border border-transparent text-yellow-400 hover:text-yellow-600 focus:outline-none focus:text-yellow-600 disabled:opacity-50 disabled:pointer-events-none mr-5">
                              <i className="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" className="inline-block text-base font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none" onClick={() => handleEdit(enquiry)}>
                              <i className="fa-regular fa-pen-to-square"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquires;

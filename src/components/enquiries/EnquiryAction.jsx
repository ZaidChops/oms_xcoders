import EnquiryForm from "./EnquiryForm";

const EnquiryAction = ({ handleAdd, showModel, toggleModel, editUser }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <div
          id="actionsDropdownButton"
          className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white bg-blue-400 focus:outline-none rounded-lg border border-gray-200 "
        >
          {/* Total Enquiries: {enquiries.length} Students */}
          Total Enquires:
        </div>
        <div
          id="actionsDropdownButton"
          className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white bg-cyan-400 focus:outline-none rounded-lg border border-gray-200 "
        >
          {/* Today Enquiries: {enquiries.length} Students */}
          Today Enquiries:
        </div>
      </div>
      <div className="w-full md:w-auto flex flex-col md:flex-row  md:space-y-0 items-stretch md:items-center justify-end flex-shrink-0">
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
          <EnquiryForm toggleModel={toggleModel} editUser={editUser} />
        )}
      </div>
    </div>
  );
};

export default EnquiryAction;

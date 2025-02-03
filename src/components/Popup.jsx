export const Popup = ({
  deletePopup,
  handleDelete,
  deleteId,
  setDeleteId,
  data,
}) => {
  const changeDelete = () => {
    handleDelete(deleteId);
    deletePopup();
    setDeleteId("");
  };
  return (
    <>
      <div
        id="modal"
        className="fixed inset-0 pt-10 z-50 flex items-start justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
          <div className="flex justify-between items-center py-4 px-6 border-b">
            <h2
              id="modal-title"
              className="text-lg font-semibold text-gray-800"
            >
              Delete Enquiry
            </h2>
            <button
              type="button"
              onClick={() => deletePopup()}
              aria-label="Close"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div className="p-6">
            <p className="text-gray-700">
              Are you sure you want to delete this <span>{data}</span>?
            </p>
          </div>

          <div className="flex justify-end items-center gap-4 py-4 px-6 border-t">
            <button
              type="button"
              onClick={() => deletePopup()}
              className="py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none"
            >
              Close
            </button>
            <button
              type="button"
              className="py-2 px-4 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none"
              onClick={() => changeDelete()}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <button
  type="button"
  onClick={openModal}
  className="py-2 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  Open Modal
</button>; */
}

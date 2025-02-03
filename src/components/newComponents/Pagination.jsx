const Pagination = ({ page, setPage, totalItems, totalPages }) => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
      <span className="text-sm font-normal text-gray-500">
        Showing{" "}
        <span className="font-semibold px-2 text-gray-900 ">
          {(page - 1) * 2 + 1}-{page * 2}
        </span>
        of{" "}
        <span className="font-semibold px-2 text-gray-900 ">{totalItems}</span>
      </span>
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <button
            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100"
            disabled={page === 1}
            onClick={() => setPage(prev => prev -1)}
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
            <span>Prev</span>
          </button>
        </li>
        <li>
          <span className="flex items-center justify-center text-sm py-2.5 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
            {page}
          </span>
        </li>
        <li>
          <button
            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100"
            disabled={page === totalPages}
            onClick={() => setPage(prev => prev + 1)}
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
  );
};

export default Pagination;

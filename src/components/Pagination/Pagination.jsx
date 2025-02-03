

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (!totalPages || totalPages < 1) return null; 

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        className={`px-3 py-1 border rounded-md ${currentPage === 1 ? 'bg-yellow-500 text-gray-600' : 'bg-yellow-500 text-white'}`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      {/* Page numbers */}
      <button
        className="px-3 py-1 border rounded-md"
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        1
      </button>
      {totalPages > 1 && (
        <button
          className="px-3 py-1 border rounded-md"
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      )}

      <button
        className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? 'bg-yellow-500  text-gray-600' : 'bg-yellow-500 text-white'}`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

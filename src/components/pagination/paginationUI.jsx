import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import React from "react";

const Pagination = ({
  totalPages = 5,
  currentPage = 1,
  onPageChange = () => {},
}) => {
  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      {/* Previous Button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-md 
          ${currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-gray-200 text-gray-800 hover:bg-blue-100"}`}
      >
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`w-10 h-10 rounded-md font-medium text-sm flex items-center justify-center
            ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-blue-100"}`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-md
          ${currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-gray-200 text-gray-800 hover:bg-blue-100"}`}
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Pagination;

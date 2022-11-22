import "./index.scss";

import React from "react";

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPageClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPageClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="paginator">
      {currentPage - 1 > 0 && (
        <span className="prev-page" onClick={handlePrevPageClick}>
          {`<< Page ${currentPage - 1}`}
        </span>
      )}

      {currentPage - 1 > 0 && currentPage + 1 <= totalPages && (
        <span className="divider">
          {` | `}
        </span>
      )}

      {currentPage + 1 <= totalPages && (
        <span className="next-page" onClick={handleNextPageClick}>
          {`Page ${currentPage + 1} >>`}
        </span>
      )}
    </div>
  );
};

export default Paginator;

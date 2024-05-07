import React from 'react';

const Pagination = ({ onPageChange }) => {
  return (
    <div>
      <button onClick={() => onPageChange(1)}>First</button>
      <button onClick={() => onPageChange(2)}>Next</button>
      {/* Add more pagination buttons as needed */}
    </div>
  );
};

export default Pagination;
import React from 'react';

const Filters = ({ onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div>
      <label htmlFor="category">Category:</label>
      <input type="text" id="category" name="category" onChange={handleChange} />

      {/* Add more filter options here */}
    </div>
  );
};

export default Filters;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import Filters from './Filters';
import Pagination from './Pagination';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });

  useEffect(() => {
    fetchData();
  }, [filters, pagination]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/categories/${filters.category}/products', {
        params: { ...filters, ...pagination }
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPagination({ ...pagination, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setPagination({ ...pagination, page: newPage });
  };

  return (
    <div>
      <h1>All Products</h1>
      <Filters onChange={handleFilterChange} />
      <ProductList products={products} />
      <Pagination onPageChange={handlePageChange} />
    </div>
  );
};

export default AllProductsPage;
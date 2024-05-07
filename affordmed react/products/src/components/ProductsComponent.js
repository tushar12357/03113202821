import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products', {
          params: {
            top: 'n', // Replace 'n' with your desired value
            minPrice: 'p', // Replace 'p' with your desired value
            maxPrice: 'q' // Replace 'q' with your desired value
          }
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {/* Display product information here */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductsComponent;
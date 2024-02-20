import React, { useState, useEffect } from 'react';
import Products from './Products';

const Shop = () => {
  // Define state to store the fetched product data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch product data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch(' https://happy-farmers.onrender.com/happy-farmers/v1/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        // Set the fetched product data to the state
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Call the fetchProducts function when the component mounts
    fetchProducts();
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      <div>
        {/* Map through the products state to render each product */}
        {products.map(product => (
          <Products
            key={product.id} // Ensure each product has a unique key
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;

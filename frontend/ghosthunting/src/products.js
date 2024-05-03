import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Products() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/products');
        setProducts(response.data); // Assuming the response.data is an array of products
    } catch (error) {
        console.error('Error fetching products:', error);
    }
    };

    useEffect(() => {
    fetchProducts();
    }, []); // Empty dependency array means this effect runs once, after the initial render

    return (
        <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4 rounded" />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-blue-600">Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Products;




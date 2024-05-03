import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover mb-4 rounded" />
      <p className="text-lg">{product.description}</p>
      <p className="text-lg font-bold text-blue-600">{product.price} &#107;&#114;!</p>
    </div>
  );
}

export default ProductDetails;

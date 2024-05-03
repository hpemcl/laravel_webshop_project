import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductsFrontpage({ numberOfProductsToShow }) {
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


    const slicedProducts = products.slice(0, numberOfProductsToShow);

    return (
        <div className="container mx-auto p-6 bg-gray-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {slicedProducts.map(product => (
                    <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
                        <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4 rounded" />
                        <div className='flex flex-row items-center justify-between'>
                        <h2 className="text-xl font-light text-white">{product.name}</h2>
                            <p className="text-lg font-bold text-white">{product.price} &#107;&#114;.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsFrontpage;

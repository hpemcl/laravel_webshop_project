import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Products({ numberOfProductsToShow }) {
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

    const sliceText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    const slicedProducts = products.slice(0, numberOfProductsToShow);

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {slicedProducts.map(product => (
                    <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
                        <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4 rounded" />
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-700 mb-2">{sliceText(product.description, 100)}</p>
                        <div className='flex flex-row items-center justify-between'>
                            <Link to={`/products/${product.id}`} className="bg-white hover:bg-gray-900 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">View Details</Link>
                            <p className="text-lg font-bold text-blue-600">{product.price} &#107;&#114;.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;

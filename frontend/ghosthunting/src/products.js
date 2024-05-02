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
    <div>
        <h1>Product List</h1>
        <ul>
        
        {products.map(product => (
            <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.name} />
            </li>
        ))}
        </ul>
    </div>
    );
}

export default Products;




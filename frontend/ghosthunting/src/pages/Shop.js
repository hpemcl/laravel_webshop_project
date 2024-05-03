import React from 'react';
import Products from '../components/products';

function Shop() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Shop</h1>
            <p>Welcome to the Shop page! Browse our products.</p>
        <Products />
        </div>
    );
}

export default Shop;
import React from 'react';
import extraCollection from '../assets/extra_collection.png';
import equipmentCollection from '../assets/equipment_collection.png';
import clothesCollection from '../assets/clothes_collection.png';

function Collection() {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Equipment Collection */}
                <div className="relative">
                    <img src={equipmentCollection} alt="Equipment" className="h-64 w-full object-cover rounded-lg" />
                </div>

                {/* Clothes Collection */}
                <div className="relative">
                    <img src={clothesCollection} alt="Clothes" className="h-64 w-full object-cover rounded-lg" />
                </div>

                {/* Extra Collection */}
                <div className="relative">
                    <img src={extraCollection} alt="Extra" className="h-64 w-full object-cover rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default Collection;

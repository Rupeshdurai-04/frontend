
import React from 'react';
import './TopProducts.css';

const TopProducts = () => {
    const products = [
        { name: 'Niky - Icon 3D Pack',  },
        { name: 'Liko - 3D Abstract', },
        { name: 'Cube 3D',  },
        { name: 'Heady - 3D Head',  },
        { name: 'Astro Illustrations',  },
    ];

    return (
        <div className="top-products">
            <h3>Top Products</h3>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} </li>
                ))}
            </ul>
        </div>
    );
};

export default TopProducts;

import React, { useState } from 'react';
import NikyImage from './NikyImage.jpg';
import './TopProducts.css';

const TopProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { name: 'Niky - Icon 3D Pack', image: NikyImage, description: '30 Illustrations' },
        { name: 'Liko - 3D Abstract', image: 'path/to/LikoImage.png', description: '30 Illustrations' },
        { name: 'Cube 3D', image: 'path/to/CubeImage.png', description: '30 Illustrations' },
        { name: 'Heady - 3D Head', image: 'path/to/HeadyImage.png', description: '30 Illustrations' },
        { name: 'Astro Illustrations', image: 'path/to/AstroImage.png', description: 'New Pack' },
    ];

    const handleSelect = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="top-products">
            <div className="header">
                <div className="square"></div>
                <h3>Top Products</h3>
            </div>
            <ul>
                {products.map((product, index) => (
                    <li key={index} onClick={() => handleSelect(product)} className={selectedProduct === product ? 'selected' : ''}>
                        <img src={product.image} alt={product.name} />
                        <div>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopProducts;

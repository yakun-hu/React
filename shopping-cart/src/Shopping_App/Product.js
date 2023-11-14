import './ShoppingApp.css';
import React from 'react';

export default function Product ({product, onClick}) {
    return (
    <>
    <li key = {product.id}>
            <p>{product.name} | Price: ${product.price}<br></br>   
    <button onClick={() => onClick(product.id)}>Add to Cart</button></p>
    </li>
    </>
    )
}
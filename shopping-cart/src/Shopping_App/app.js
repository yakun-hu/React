import './ShoppingApp.css';
import React from 'react';
import { useState } from "react";
import {ProductList} from './ProductList'
import Product from './Product'
import Cart from './Cart'

function Application() {
    const [cartCounts, setCartCounts] = useState([0,0,0,]);
    function handleAdd(productID) {
        const newCounts = cartCounts.map((currentCount,index) => {
            if (index === productID-1){
                return currentCount+1;
            } else {
                return currentCount;
            }
        });
        setCartCounts(newCounts);}
    const listItems = ProductList.map(product => 
        <Product product={product} onClick={handleAdd}></Product>
        ); 
        return (
            <div className="container">
                <div><h2>Store:</h2>
            <ul>{listItems}</ul></div>
            <div><h2>Cart:</h2> <Cart count={cartCounts}/></div>
            </div>
        )
}

export default Application;

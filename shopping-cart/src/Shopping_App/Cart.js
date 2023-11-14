import './ShoppingApp.css';
import React from 'react';
import TotalPrice from './TotalPrice'


export default function Cart (props) {
    /* Look through product list, and if the product.id is in the count array, print it */
    return (
    <div><TotalPrice count={props.count}/></div>
    )
    /* Use <li> to list active cartItems */
    /*Total Price will be displayed within Cart, which will also use count # to compute which items to display, in the cart*/
}

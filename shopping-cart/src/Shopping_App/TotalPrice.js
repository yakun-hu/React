import './ShoppingApp.css';
import React from 'react';
import {ProductList} from './ProductList'

export default function TotalPrice (props) {
    const food_total = props.count[0] * ProductList[0].price; 
    const car_total = props.count[1] * ProductList[1].price; 
    const keyboard_total = props.count[2] * ProductList[2].price; 
    const cost = food_total + car_total + keyboard_total;
    return (
        <>
        <p>food_total = {props.count[0]} | ${food_total}</p> 
        <p>car_total = {props.count[1]} | ${car_total}</p>
        <p>keyboard_total = {props.count[2]} | ${keyboard_total}</p>
        <p><b>Total cost</b> = ${cost}</p>
        </>
    )
}
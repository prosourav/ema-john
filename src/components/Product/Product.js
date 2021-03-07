import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product);
    const {img, name,seller,price,stock, key} = props.product;
    return (
        <div className="product">
            <div>
            <img src={img} alt=""/>
            </div>
            <div className="product-name">
            <h3><Link to={"/product/"+key}>{name}</Link></h3>
            <br></br>
            <p>by:{seller}</p>
            <h2>${price}</h2>
            <p><small>only{stock} left in stock</small></p>
           {props.showAddButton && <button className="main-button" onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faCartPlus} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;
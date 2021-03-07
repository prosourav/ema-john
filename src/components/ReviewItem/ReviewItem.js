import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,removeProduct,key} = props.product;
    return (
        <div>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>props.removeProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;
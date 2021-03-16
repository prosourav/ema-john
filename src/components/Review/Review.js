import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'

const Review = () => {
    const [cart, setCart] = useState([]);
    const history = useHistory();
    const handleProceedCheckOut =() =>{
       history.push('/shipment');
    }
    const removeProduct = (productKey)=>{
        console.log("remove clicked",productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cart = productKeys.map(key => {
            const products = fakeData.find(pd => pd.key === key);
            products.quantity = savedCart[key];
            return products;
        });
      setCart(cart);
    },[]);
    return (
        <div className="twin-container">
            <div className="product-container">
            {
                   cart.map(pd=> <ReviewItem 
                   removeProduct={removeProduct}
                   product={pd} key={pd.key}></ReviewItem>)
            }
            </div>
            <div className={"cart-container"}>
                <Cart cart={cart}>
                <button onClick={handleProceedCheckOut} className="main-button">CheckOut</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;
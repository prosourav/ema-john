import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
 const Shop = () => {
 const firstTen = fakeData.slice(0,10);
 const [products,setProducts] = useState(firstTen);
 const [cart,setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(pdkey=>{
            const product = fakeData.find(pd => pd.key === pdkey);
            product.quantity = savedCart[pdkey];
            return product;
        })
        setCart(previousCart);
    },[])

 const handleAddProduct = (product)=>{
     const toBeAddeded = product.key;
    const sameProduct = cart.find(pd=> pd.key === toBeAddeded);
    let count = 1; 
    let newCart;
    if(sameProduct){
        count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const others = cart.filter(pd => pd.key !== toBeAddeded);
        newCart = [...others,sameProduct];
    }
    else{
        product.quantity = 1;
        newCart = [...cart,product];
    }
  
     setCart(newCart);
     
     addToDatabaseCart(product.key, count);
 }

    return (
        <div className="twin-container">
            <div className="product-container">
            {
           products.map(pd => <Product showAddButton={true} handleAddProduct={handleAddProduct} key={pd.key} product={pd}></Product>)
            }
            </div>
            <div className="cart-container">
            <Cart cart={cart}> <Link to='/review'> <button className="main-button">Review order </button></Link> </Cart>
            </div>
        </div>
    );
};

export default Shop;
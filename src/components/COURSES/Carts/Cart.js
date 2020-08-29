import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.carts;
    const total = cart.reduce((total,product)=> total + product.price,0);
    const tax =(total / 10).toFixed(2); 
    const TotalPrice = total + parseFloat(tax);
    return (
        
            <div className="cart-container">
            <h2>Summary</h2>
            <p><small>items Ordered:{cart.length}</small></p>
            <p><small>Price:{total}</small></p>
            <p><small>tax:{tax}</small></p>
            <h4>Total Price:{TotalPrice}</h4>
            </div>
   
    );
};

export default Cart;
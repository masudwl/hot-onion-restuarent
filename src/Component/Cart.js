import React from 'react';
import './Style.css';
import {CartContext} from './CartContext'; 
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartForm from './CartForm';

const Cart = () => {
const data = useContext (CartContext); 
if(data.cart.shoppingCart[0]){
const {name, price, img} = data.cart.shoppingCart[0]; 

const subTotal = (price * data.cart.qty).toFixed(2); 
const tax = (subTotal * 5 /100).toFixed(2); 

let shipping = 0;
if (subTotal < 50){
    shipping = 20; 
}else if (subTotal > 50){
    shipping = 30; 
}

const totalPrice = subTotal + tax + shipping; 
    return (
        <div className="container">
            <div className="row">
                <CartForm></CartForm>

                <div className="col-md-5">
                    <div className="addText">
                        <p>From <strong>Gulshan Plaza Restora</strong></p>
                        <p>Ariving in 20-30M</p>
                        <p>152, Road, House # 20</p>
                    </div>
                    <div className="cart-main">
                        <div className="cart-item">
                            <div>
                                <img src={img} alt="cart image"/>
                            </div>
                            <div className="cart-text">
                            <h6>{name}</h6>
                            <h5>$ {price}</h5>
                            <p>Delivery Free</p>
                            </div>
                            <div className="cart-qty">
                                <span></span>
                                <input type="text" value={data.cart.qty}/>
                                <span></span>
                            </div>
                        </div>
                        <div className="totalValue">
                            <div>
                                <h5>SubTotal</h5>
                                <h5>Tax</h5>
                                <h5>Delivery Fee</h5>
                                <h4>Total</h4>
                            </div>
                            <div className="figure">
                            <h5>{subTotal}</h5>
                            <h5>{tax}</h5>
                            <h5>{shipping}</h5>
                            <h4>{totalPrice}</h4>
                            </div>
                            
                        </div>
                        <Link to="/signup"><button>Place Order</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
} else{
    return (
        <div className="container">
            <h1>Your cart is Empty Please Prodcut add your cart list here <a href="/">Add Products</a></h1>
        </div>
    )
} 
}

export default Cart;
import React from 'react';
import { useForm} from "react-hook-form";
import './Style.css';
import {CartContext} from './CartContext'; 
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {


const data = useContext (CartContext); 
console.log(data); 

    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h4 className="display-6">Edit Delivery Details</h4>
                    <hr></hr>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" name="name"  placeholder="deliver to door" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
                    <input className="form-control" name="address"  placeholder="address" ref={register({ required: true })} />
                    {errors.address && <span>This field is required</span>}
                    <input className="form-control" name="address-one"  placeholder="address 2" />
                    {errors.name && <span>This field is required</span>}
                    <input className="form-control" name="business"  placeholder="Business Name" ref={register({ required: true })} />
                    {errors.business && <span>This field is required</span>}
                    <input className="form-control" name="delivery"  placeholder="Add Delivery Instruction" ref={register({ required: true })} />
                    {errors.delivery && <span>This field is required</span>}
                    
                    <input type="submit" className="form-control submit" value="Save and Continue" />
                </form>
                </div>
                <div className="col-md-5">
                    <div className="addText">
                        <p>From <strong>Gulshan Plaza Restora</strong></p>
                        <p>Ariving in 20-30M</p>
                        <p>152, Road, House # 20</p>
                    </div>
                    <div className="cart-main">
                        <div className="cart-item">
                            <div>
                                <img src="" alt="cart image"/>
                            </div>
                            <div className="cart-text">
                                <h6>Butter Nan</h6>
                                <h5>$40.00</h5>
                                <p>Delivery Free</p>
                            </div>
                            <div className="cart-qty">
                                <span></span>
                                <input type="text" value="02"/>
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
                                <h5>500.00</h5>
                                <h5>00.00</h5>
                                <h5>00.00</h5>
                                <h4>00.00</h4>
                            </div>
                            
                        </div>
                        <Link to="/signup"><button>Place Order</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
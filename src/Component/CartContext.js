import React from 'react';
import { createContext, useReducer } from 'react';
import {CartReducer} from '../Component/CartReducer'; 

export const CartContext = createContext(); 

const CartContextProvider = (props) => {

    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [ ], totalPrice: 0, qty: 1 }); 


    return (
        <CartContext.Provider value={{cart: cart, dispatch: dispatch}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
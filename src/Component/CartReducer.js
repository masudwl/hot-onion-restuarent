export const CartReducer = (state, action) => {
    
    let theFood;
    let updatePrice; 
    let updatedQty;

    switch(action.type){

        case 'ADD_TO_CART':
            if(state){
                const {shoppingCart, totalPrice, qty} = state; 
                const check = shoppingCart.find(food => food.id === action.id); 
           
                theFood = action.theFood;

            if(check){
                const newQty = qty + 1;
                const newPrice = qty * theFood.price; 
                return {shoppingCart: [theFood], totalPrice: newPrice, qty: newQty}; 
            } else{
                theFood['qty'] = 1; 
                updatedQty = qty + 1; 
                updatePrice = totalPrice + theFood.price; 
                updatePrice = totalPrice + theFood.price; 
                return {shoppingCart : [theFood, ...shoppingCart], totalPrice: updatePrice, qty: updatedQty}
                }
            }
            break; 
            default: 
            return state; 
    }
}
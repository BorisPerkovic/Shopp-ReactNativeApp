import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cartItem";

const initialState = {
  items: {},
  totalAmount: 0
};

/* ADD TO CART LOGIC FOR EXISTING OR ADDING NEW ITEM TO CART */
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].sum + productPrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, productPrice, productTitle, productPrice);
      }
      return {
        //...state,
        items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
        totalAmount: state.totalAmount + productPrice
      };
    case REMOVE_FROM_CART:
      const selectedItem = state.items[action.pid]; 
      const currentQty = selectedItem.quantity;
      let updatedCartItems;
      if( currentQty > 1) {
        const updatedCartItem = new CartItem(selectedItem.quantity - 1, selectedItem.productPrice, selectedItem.productTitle, selectedItem.sum - parseFloat(selectedItem.productPrice));
        updatedCartItems = {...state, [action.pid]: updatedCartItem};
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - parseFloat(selectedItem.productPrice)
      }
      
  }
  return state;
};
import cartActionTypes from './cart.action.types';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

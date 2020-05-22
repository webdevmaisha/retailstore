import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart-actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const cartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const matchDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, matchDispatchToProps)(cartIcon);
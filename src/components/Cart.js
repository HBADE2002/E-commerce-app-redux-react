
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';
import Button from "react-bootstrap/Button";

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  }

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.title} - ${item.price}</span>
          <Button variant="danger" onClick={() => handleRemoveFromCart(item)}>Remove</Button>
        </div>
      ))}
    </div>
  );
}

export default Cart;

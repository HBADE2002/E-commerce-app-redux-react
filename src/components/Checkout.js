import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../features/cartSlice';
import Card from "react-bootstrap/Card";
function Checkout() {
  const cartItems = useSelector(selectCartItems);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <Card key={item.id} className="checkout-item">
            <Card.Img variant="top" src={item.image} />
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>${item.price.toFixed(2)}</Card.Text>
          </Card>
        ))}
      </div>
      <div className="checkout-total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <button className="checkout-button">Complete Purchase</button>
    </div>
  );
}

export default Checkout;
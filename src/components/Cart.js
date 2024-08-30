import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, selectCartItems } from "../features/cartSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleCardClick = (item) => {
    alert("Card clicked");
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-message">
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <>
      <h2>Cart</h2>
      <div className="item-cards-container">
        {cartItems.map((item) => (
          <div key={item.id} className="card-container" onClick={() => handleCardClick(item)}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title ? item.title.slice(0, 39) : ""}</Card.Title>
                <Card.Text>
                  {item.description ? item.description.slice(0, 90) : ""}
                </Card.Text>
                <Card.Text>Price: ${item.price}</Card.Text>
              </Card.Body>
              <Button 
                variant="danger" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFromCart(item);
                }}
              >
                Remove
              </Button>
            </Card>
          </div>
        ))}
      </div>
      <Button variant="primary" onClick={handleProceedToCheckout}>
        Proceed to Checkout
      </Button>
    </>
  );
}

export default Cart;
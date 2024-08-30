import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, selectCartItems } from "../features/cartSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useNavigate } from 'react-router-dom';



function Cart() {
  // The Cart component now uses useSelector
  // to access the cart items from the Redux store,
  // and useDispatch to dispatch the removeFromCart
  // action when removing items.
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
  return (
    <>
      <h2>Cart</h2>
      < div className="item-cards-container">
      {cartItems.map((item) => (
          <div className="card-container" onClick={() => handleCardClick(item)}>
            <Card style={{ width: "18rem" }} key={item.id}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body >
                <Card.Title className="card-title-container">
                  {item.title ? item.title.slice(0, 39) : ""}
                </Card.Title>
                <Card.Text className="card-text-container">
                  {item.description ? item.description.slice(0, 90) : ""}
                </Card.Text>
                <Card.Text>Price: ${item.price}</Card.Text>
              </Card.Body>
              <Button
                variant="danger"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </Button>
            </Card>
          </div>
        ))}
        </div>

      {cartItems.length > 0 && (
        <Button variant="primary" onClick={handleProceedToCheckout}>
          Proceed to Checkout
        </Button>
      )}

    </>
  );
}

export default Cart;

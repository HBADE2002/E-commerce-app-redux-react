import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, selectCartItems } from "../features/cartSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cart() {

  // The Cart component now uses useSelector 
  // to access the cart items from the Redux store, 
  // and useDispatch to dispatch the removeFromCart 
  // action when removing items.
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div >
    
      <h2>Cart</h2>
      <div className="item-cards-container">
      {cartItems.map((item) => (
        <Card style={{ width: "18rem" }} key={item.id}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title ? item.title.slice(0, 39) : ""}</Card.Title>
            <Card.Text>
              {item.description ? item.description.slice(0, 90) : ""}
            </Card.Text>
            <Card.Text>Price: ${item.price}</Card.Text>
          </Card.Body>
          <Button variant="danger" onClick={() => handleRemoveFromCart(item)}>
            Remove
          </Button>
        </Card>
      ))}
      </div>
      
    </div>
  );
}

export default Cart;

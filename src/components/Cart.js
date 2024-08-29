import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
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
          {/* <span>{item.title} - ${item.price}</span> */}
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

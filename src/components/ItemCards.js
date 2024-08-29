import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";



function ItemCards() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);

// In ItemCards.js, we now use the 
// useDispatch hook to dispatch the addToCart 
// action when a product is added to the cart.
// dispatches the action that send product details to Cart component
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className="item-cards-container">
      {products.map((product) => (
        <Card style={{ width: "18rem" }} key={product.id}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title ? product.title.slice(0, 39) : ""}</Card.Title>
            <Card.Text>{product.description ? product.description.slice(0, 90) : ""}</Card.Text>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ItemCards;

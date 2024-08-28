import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Cart from './Cart';
import { useState, useEffect } from "react";

function ItemCards() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data); // Uncomment this line to log fetched data to console for debugging purposes.
    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);
  const PassDataToCart = (product) => {
    // Add the product to the cart state here
    // Example: setCart([...cart, product]);
  }

  return (
    <>
      <div className="item-cards-container">
        {products.map((product) => (
          <Card style={{ width: "18rem" }} key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title >
                {product.title ? product.title.slice(0, 39) : ""}
              </Card.Title>
              <Card.Text>
                {product.description ? product.description.slice(0, 90) : ""}
              </Card.Text>
              <Card.Text>Price: ${product.price}</Card.Text>
              <Button variant="primary" onClick = {()=>PassDataToCart(product)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
        {/* <Cart props={products}></Cart> */}
      </div>
    </>
  );
}

export default ItemCards;

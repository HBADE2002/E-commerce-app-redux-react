import React from 'react'

function Cart(props) {
  return (
    <div>
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
        <p>{props.title}</p>
      <button>Checkout</button>
    </div>
  )
}

export default Cart
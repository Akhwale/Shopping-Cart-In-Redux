import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "./actions/cartActions";


function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch(); // Get the dispatch function

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product)); // Dispatch the removeFromCart action
  };

  const calculateSubtotal = (cart) => {
    return cart.reduce((subtotal, product) => {
      const itemTotal = product.price * product.quantity;
      return subtotal + itemTotal;
    }, 0);
  };






  const subtotal = calculateSubtotal(cartItems);

  return (
    <div className="shopping-cart">
      <Navbar />
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price} -

            <button onClick={() => dispatch(decreaseQuantity(product._id))}>
              Decrease
            </button>
            Quantity: {product.quantity}
            <button onClick={() => dispatch(increaseQuantity(product._id))}>
              Increase
            </button>

            <button onClick={() => handleRemoveFromCart(product)}>
              Remove
            </button>
          </li>

        ))}
        <p><b>Subtotal :</b> {subtotal} </p>
      </ul>
    </div>
  );
}

export default ShoppingCart;

import React, { useEffect, useState } from "react";
import axios from "axios";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items when the component mounts
  useEffect(() => {
    fetchCartItems();
  }, []);

  // Function to fetch cart items
  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/cartitems");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  // Function to remove an item from the cart
  const removeItem = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:8000/api/cartitems/${cartItemId}`);
      fetchCartItems(); // Refresh the cart items after deletion
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.book.title}</h3>
            <p>Price: ${item.book.price}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default AddToCart;

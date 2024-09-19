import React from "react";

const AddToCartButton = ({ book, onAddToCart }) => {
  return (
    <button className="btn" onClick={() => onAddToCart(book)}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;

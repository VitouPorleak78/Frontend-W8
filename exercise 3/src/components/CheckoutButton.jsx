import React from "react";

export default function CheckoutButton({ total }) {
  return (
    <button className="checkout-button">
      <span>Checkout</span>
      <span>{"$ " + total.toFixed(2)}</span>
    </button>
  );
}
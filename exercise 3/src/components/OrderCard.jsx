import React from "react";

export default function OrderCard({product, price, quantity, onIncrease, onDecrease}) {
  const isMinusDisabled = quantity ===0;
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small className="price">{"$ " + price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button"
        onClick={onDecrease}
        disabled={isMinusDisabled}
        style={{ backgroundColor: isMinusDisabled ? '#bfbfbf' : '' }}
        >-
        </div>

        <h4>{quantity}</h4>
        <div className="order-button" onClick={onIncrease}
        >+
        </div>
      </div>
    </div>
  );
}

import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  const handleQuantityChange = (indexToUpdate, amount) => {
    const updatedOrders = orders.map((order, index) => {
      if (index === indexToUpdate) {
      const newQuantity = Math.max(0, order.quantity + amount);
        return { ...order, quantity: newQuantity };
      }
      return order;
    });
    setOrders(updatedOrders);
  };
  const total = orders.reduce((sum, item) => 
  sum + (item.price * item.quantity)
, 0);

  return (
    <> 
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            onIncrease={() => handleQuantityChange(index, 1)}
            onDecrease={() => handleQuantityChange(index, -1)}
          />
        ))}
      </div>

      <CheckoutButton total={total}></CheckoutButton>
    </>
  );
}

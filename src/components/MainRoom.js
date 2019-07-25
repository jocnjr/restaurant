import React from 'react';
import Lounge from './Lounge';

const MainRoom = ({ orders, addOrder }) => {
  return (
    <div className="component">
      <h1>MainRoom</h1>
      <h2>Orders: {orders}</h2>
      <h3>props.orders</h3>
      <h3>props.addOrder</h3>
      <button onClick={() => addOrder()}>Add new order</button>
      <Lounge totalOrders={orders} addNewOrder={addOrder} />
    </div>
  )
}
export default MainRoom;
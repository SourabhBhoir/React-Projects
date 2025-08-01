import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <div style={{ padding: '20px', border: '1px solid black', marginTop: '20px' }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>
                {item.name} - ${item.price}
              </span>
              <button onClick={() => removeFromCart(item)} style={{ marginLeft: '10px' }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

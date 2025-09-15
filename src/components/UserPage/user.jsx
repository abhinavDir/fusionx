import React from "react";
import "./UserPage.css";

const UserPage = ({ cartItems, user, orders }) => {
  if (!user) {
    return <p>Please login to view your profile.</p>;
  }

  return (
    <div className="user-page">
      <header className="user-header">
        <div className="avatar">{user.name.charAt(0)}</div>
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.mobile}</p>
        </div>
      </header>

      <section className="user-section cart-summary">
        <h3>Cart Summary</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} x {item.qty || 1} - ₹{parseInt(item.price.replace("₹", "")) * (item.qty || 1)}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="user-section orders">
        <h3>Order History</h3>
        {orders.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          <div className="orders-list">
            {orders.map(order => {
              // Calculate total dynamically
              const total = order.items.reduce((sum, item) => {
                const price = item.price ? parseInt(item.price.replace("₹","")) : 0;
                const qty = item.qty || 1;
                return sum + price * qty;
              }, 0);

              return (
                <div key={order.id} className="order-card">
                  <p><strong>Order ID:</strong> {order.id}</p>

                  <p><strong>Items:</strong></p>
                  <ul>
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.title || item} x {item.qty || 1} - ₹{item.price ? parseInt(item.price.replace("₹","")) * (item.qty || 1) : "-"}
                      </li>
                    ))}
                  </ul>

                  <p><strong>Total:</strong> ₹{total}</p>
                  <p>✅ Thank you for your order!</p>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default UserPage;

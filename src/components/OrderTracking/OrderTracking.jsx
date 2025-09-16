import React from "react";
import "./OrderTracking.css";

const stages = ["Order Received", "Preparing", "Out for Delivery", "Delivered"];

const OrderTracking = ({ orders, setOrders }) => {
  // Try multiple places for the logged-in user (signup/login flows)
  const storedUser =
    JSON.parse(localStorage.getItem("currentUser")) || // preferred
    JSON.parse(localStorage.getItem("userSignup")) ||  // fallback
    null;

  // canonical id to compare with order.userId or order.mobile
  const userId = storedUser?.uid || storedUser?.mobile || storedUser?.email || null;
  const userMobile = storedUser?.mobile || null;

  // Filter orders so the user only sees their own orders
  const userOrders = userId
    ? (orders || []).filter(
        (o) =>
          // match by explicit stored userId OR fallback to mobile
          (o.userId && String(o.userId) === String(userId)) ||
          (o.mobile && String(o.mobile) === String(userMobile))
      )
    : [];

  // Cancel order (only if not delivered yet) — updates react state only;
  // if you want to persist to Firestore updateDoc instead.
  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      const updated = (orders || []).map((o) =>
        o.id === id ? { ...o, status: "Cancelled" } : o
      );
      setOrders(updated);
    }
  };

  return (
    <div className="tracking-page">
      <h2>Order Tracking</h2>

      {userOrders.length === 0 ? (
        <div className="tracking-card">
          <h3>No Active Orders</h3>
          <div className="tracking-stages">
            {stages.map((stage, index) => (
              <div key={index} className="stage">
                <div className={`circle ${index === 0 ? "active" : ""}`}>
                  {index + 1}
                </div>
                <p className={index === 0 ? "active" : ""}>{stage}</p>
                {index < stages.length - 1 && <div className="line"></div>}
              </div>
            ))}
          </div>
        </div>
      ) : (
        userOrders.map((order) => {
          const currentStageIndex = Math.max(0, stages.indexOf(order.status));

          return (
            <div key={order.id} className="tracking-card">
              <h3>Order #{order.id}</h3>
              <p>
                <strong>Items:</strong>{" "}
                {(order.items || []).map((i) => i.title || i.name || i).join(", ")}
              </p>
              <p>
                <strong>Total:</strong> ₹{order.total}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>

              <button
                className="cancel-btn"
                onClick={() => handleCancel(order.id)}
                disabled={order.status === "Delivered"}
              >
                Cancel Order
              </button>

              <div className="tracking-stages">
                {stages.map((stage, index) => (
                  <div key={index} className="stage">
                    <div
                      className={`circle ${index <= currentStageIndex ? "active" : ""}`}
                    >
                      {index + 1}
                    </div>
                    <p className={index <= currentStageIndex ? "active" : ""}>
                      {stage}
                    </p>
                    {index < stages.length - 1 && (
                      <div className={`line ${index < currentStageIndex ? "active" : ""}`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default OrderTracking;

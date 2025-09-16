// src/components/admin/AdminPanel.js
import React, { useEffect, useState } from "react";
import "./admin.css";
import { db } from "../../firebase";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const adminName = localStorage.getItem("adminUser") || "Admin";

  // 🔄 Real-time listener for all orders
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "orders"), (snapshot) => {
      const allOrders = snapshot.docs.map((doc) => {
        const data = doc.data();
        const items = Array.isArray(data.items) ? data.items : [];
        return { id: doc.id, ...data, items };
      });

      allOrders.sort((a, b) => b.createdAt - a.createdAt);
      setOrders(allOrders);
    });

    return () => unsubscribe();
  }, []);

  // 🔔 Notifications = only unassigned orders
  useEffect(() => {
    const unassignedOrders = orders.filter(
      (o) => o.status === "Order Received" && !o.assignedTo
    );
    setNotifications(unassignedOrders);

    if (unassignedOrders.length > notifications.length) {
      const audio = new Audio("/notify.mp3");
      audio.play().catch(() =>
        console.log("Sound blocked until user interaction")
      );
    }
  }, [orders]);

  // ✅ Update order status
  const updateOrderStatus = async (id, status) => {
    const orderRef = doc(db, "orders", id);
    await updateDoc(orderRef, { status, assignedTo: adminName });
  };

  const handleAccept = (id) => updateOrderStatus(id, "Preparing");
  const handleReject = (id) => updateOrderStatus(id, "Rejected");
  const handleOutForDelivery = (id) =>
    updateOrderStatus(id, "Out for Delivery");
  const handleDelivered = (id) => updateOrderStatus(id, "Delivered");

  const getStatusClass = (status) => {
    switch (status) {
      case "Order Received":
        return "badge received blink";
      case "Preparing":
        return "badge preparing";
      case "Out for Delivery":
        return "badge delivery";
      case "Delivered":
        return "badge delivered";
      case "Rejected":
        return "badge rejected";
      case "Cancelled":
        return "badge cancelled";
      default:
        return "badge";
    }
  };

  // Show only orders assigned to current admin
  const myOrders = orders.filter((o) => o.assignedTo === adminName);

  return (
    <div className="admin-panel">
      <h2>📊 Admin Dashboard</h2>

      {/* 🔔 Notifications */}
      {notifications.length > 0 && (
        <div className="notifications">
          <h3>🔔 New Orders</h3>
          {notifications.map((n) => (
            <div key={n.id} className="card notification-card">
              <p><strong>Order #{n.id}</strong></p>
              <p>{n.items.map((i) => i.title || i).join(", ")}</p>
              <p>₹{n.total}</p>
              <div className="card-buttons">
                <button className="accept" onClick={() => handleAccept(n.id)}>Accept</button>
                <button className="reject" onClick={() => handleReject(n.id)}>Reject</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 📋 Orders Table (Removed Assigned Column) */}
      <div className="desktop-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.items.map((i) => i.title || i).join(", ")}</td>
                <td>₹{o.total}</td>
                <td><span className={getStatusClass(o.status)}>{o.status}</span></td>
                <td>{o.mobile}</td>
                <td>
                  {o.status === "Preparing" && (
                    <button onClick={() => handleOutForDelivery(o.id)}>Out for Delivery</button>
                  )}
                  {o.status === "Out for Delivery" && (
                    <button onClick={() => handleDelivered(o.id)}>Mark Delivered</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📱 Mobile Cards (Removed Assigned Field) */}
      <div className="mobile-cards">
        {myOrders.map((o) => (
          <div key={o.id} className="card order-card">
            <p className="order-id">Order #{o.id}</p>
            <p><strong>Items:</strong> {o.items.map((i) => i.title || i).join(", ")}</p>
            <p><strong>Total:</strong> ₹{o.total}</p>
            <p><strong>Status:</strong> <span className={getStatusClass(o.status)}>{o.status}</span></p>
            <p><strong>Mobile:</strong> {o.mobile}</p>
            <div className="card-buttons">
              {o.status === "Preparing" && (
                <button className="action-btn" onClick={() => handleOutForDelivery(o.id)}>Out for Delivery</button>
              )}
              {o.status === "Out for Delivery" && (
                <button className="action-btn" onClick={() => handleDelivered(o.id)}>Mark Delivered</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;

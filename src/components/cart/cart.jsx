import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart({ cartItems, placeOrder }) {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [orderStatus, setOrderStatus] = useState(""); // "", "processing", "success"

  // Calculate total price dynamically
  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + parseInt(item.price.replace("₹", "")) * (item.qty || 1),
    0
  );

  const handleOrder = () => {
    if (cartItems.length === 0) return alert("Cart is empty!");
    if (!mobile || mobile.length !== 10)
      return alert("Enter valid mobile number!");

    setOrderStatus("processing");

    setTimeout(() => {
      placeOrder(mobile);
      setOrderStatus("success");
    }, 1500);
  };

  return (
    <div className="cart-page">
      <h2>🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items-list">
          {cartItems.map((item, idx) => (
            <div key={idx} className="cart-item">
              <img src={item.img} alt={item.title} />
              <div className="item-details">
                <p>{item.title}</p>
                <p>Quantity: {item.qty || 1}</p>
                <p>Price: ₹{parseInt(item.price.replace("₹", "")) * (item.qty || 1)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Total Amount Section */}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total Amount: ₹{totalPrice}</h3>
        </div>
      )}

      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <button onClick={handleOrder} disabled={orderStatus === "processing"}>
        {orderStatus === "processing" ? "Processing..." : "Place Order"}
      </button>

      {orderStatus === "success" && (
        <div className="order-success">
          <p>✅ Order placed! Admin will contact you.</p>
          <button onClick={() => navigate("/tracking")}>
            View Tracking
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;

import React, { useState, useEffect } from "react";
import "./food.css";

const ALL_ITEMS = [
  { id: 1, title: "Margherita Pizza", emoji: "🍕", price: "₹299", desc: "Classic cheese and tomato pizza." },
  { id: 2, title: "Cheese Burger", emoji: "🍔", price: "₹199", desc: "Juicy cheese burger with fries." },
  { id: 3, title: "Cold Drink", emoji: "🥤", price: "₹50", desc: "Refreshing cold beverage." },
  { id: 4, title: "Coffee", emoji: "☕", price: "₹80", desc: "Hot coffee to boost energy." },
  { id: 5, title: "Veg Salad", emoji: "🥗", price: "₹120", desc: "Fresh and healthy veg salad." },
  { id: 6, title: "Chicken Salad", emoji: "🥗🐔", price: "₹150", desc: "Protein-rich chicken salad." },
  { id: 7, title: "Pasta Meal", emoji: "🍝", price: "₹180", desc: "Delicious pasta with sauce." },
  { id: 8, title: "Chocolate Cake", emoji: "🍰", price: "₹250", desc: "Rich chocolate cake slice." },
  { id: 9, title: "Ice Cream", emoji: "🍨", price: "₹100", desc: "Cold and sweet dessert." },
  { id: 10, title: "French Fries", emoji: "🍟", price: "₹90", desc: "Crispy golden fries." },
  // add remaining items as needed
];

function AllItemsPage1({ addToCart }) {
  const [items, setItems] = useState([]);
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    setItems(ALL_ITEMS);
  }, []);

  const openModal = (item) => setOpenItem(item);
  const closeModal = () => setOpenItem(null);

  return (
    <div className="food-page">
      <h2>All Items</h2>
      <div className="food-grid">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className="food-card"
            style={{ "--delay": `${idx * 0.05}s`, cursor: "pointer" }}
            onClick={() => openModal(item)}
          >
            <div className="emoji" style={{ fontSize: "2rem" }}>
              {item.emoji}
            </div>
            <h3 style={{ fontWeight: "bold", marginTop: "5px" }}>{item.title}</h3>
            <p>{item.price}</p>
            <button
              className="add-btn"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}
            >
           
            </button>
          </div>
        ))}
      </div>

      {openItem && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <span style={{ fontSize: "4rem" }}>{openItem.emoji}</span>
            <h3 style={{ fontWeight: "bold" }}>{openItem.title}</h3>
            <p>{openItem.price}</p>
            <p>{openItem.desc}</p>
            <div className="modal-actions">
              <button
                className="btn"
                onClick={() => {
                  addToCart(openItem);
                  closeModal();
                }}
              >
            Add to cart
              </button>
              <button className="btn secondary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllItemsPage1;

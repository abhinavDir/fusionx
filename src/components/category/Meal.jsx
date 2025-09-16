import React, { useState } from "react";
import "./Meal.css"; // Use the same CSS as AllItemsPage1

const MEAL_ITEMS = [
  { id: 1, title: "Veg Salad", emoji: "🥗", price: "₹120", desc: "Fresh and healthy veg salad." },
  { id: 2, title: "Chicken Salad", emoji: "🍗", price: "₹150", desc: "Protein-rich chicken salad." },
  { id: 3, title: "Pasta Meal", emoji: "🍝", price: "₹180", desc: "Delicious pasta with sauce." },
  { id: 4, title: "Burger Meal", emoji: "🍔", price: "₹200", desc: "Juicy burger with fries." },
  { id: 5, title: "Pizza Meal", emoji: "🍕", price: "₹250", desc: "Cheesy pizza meal." },
  { id: 6, title: "Sandwich Meal", emoji: "🥪", price: "₹150", desc: "Tasty sandwich combo." },
  { id: 7, title: "Fried Chicken Meal", emoji: "🍗", price: "₹220", desc: "Crispy fried chicken." },
  { id: 8, title: "Steak Meal", emoji: "🥩", price: "₹300", desc: "Grilled steak with sides." },
  { id: 9, title: "Fish Meal", emoji: "🐟", price: "₹280", desc: "Grilled fish with salad." },
  { id: 10, title: "Rice Bowl", emoji: "🍚", price: "₹160", desc: "Rice with veggies and meat." },
  { id: 11, title: "Noodles Meal", emoji: "🍜", price: "₹180", desc: "Stir-fried noodles." },
  { id: 12, title: "Taco Meal", emoji: "🌮", price: "₹170", desc: "Tasty taco with fillings." },
  { id: 13, title: "Soup Meal", emoji: "🥣", price: "₹120", desc: "Warm soup to start." },
  { id: 14, title: "Grilled Veg Meal", emoji: "🥦", price: "₹140", desc: "Grilled veggies combo." },
  { id: 15, title: "Chicken Wrap", emoji: "🌯", price: "₹160", desc: "Spicy chicken wrap." },
  { id: 16, title: "Breakfast Platter", emoji: "🍳", price: "₹200", desc: "Full breakfast platter." },
  { id: 17, title: "Omelette Meal", emoji: "🍳", price: "₹130", desc: "Fluffy omelette meal." },
  { id: 18, title: "Cheese Pasta", emoji: "🧀", price: "₹180", desc: "Cheesy pasta delight." },
  { id: 19, title: "Veggie Burger", emoji: "🍔", price: "₹170", desc: "Veggie burger combo." },
  { id: 20, title: "Chicken Pizza", emoji: "🍕", price: "₹250", desc: "Chicken pizza special." },
];

function MealPage({ addToCart }) {
  const [openItem, setOpenItem] = useState(null);

  const openModal = (item) => setOpenItem(item);
  const closeModal = () => setOpenItem(null);

  return (
    <div className="food-page">
      <h2>Meals Menu</h2>
      <div className="food-grid">
        {MEAL_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            className="food-card"
            style={{ "--delay": `${idx * 0.05}s` }}
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
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {openItem && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
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
                Add to Cart
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

export default MealPage;

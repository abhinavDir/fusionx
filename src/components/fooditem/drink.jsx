import React, { useState } from "react";
import "./food.css"; // reuse existing CSS

const DRINKS = [
  { id: 1, title: "Cold Drink", emoji: "🥤", price: "₹50", desc: "Refreshing cold drink." },
  { id: 2, title: "Coffee", emoji: "☕", price: "₹80", desc: "Hot brewed coffee." },
  { id: 3, title: "Lemonade", emoji: "🍋", price: "₹60", desc: "Fresh lemonade." },
  { id: 4, title: "Pepsi", emoji: "🥤", price: "₹50", desc: "Chilled Pepsi." },
  { id: 5, title: "Coke", emoji: "🥤", price: "₹50", desc: "Chilled Coke." },
  { id: 6, title: "Mojito", emoji: "🍹", price: "₹120", desc: "Minty mojito." },
  { id: 7, title: "Smoothie", emoji: "🥛", price: "₹100", desc: "Fruit smoothie." },
  { id: 8, title: "Espresso", emoji: "☕", price: "₹90", desc: "Strong espresso." },
  { id: 9, title: "Cappuccino", emoji: "☕", price: "₹110", desc: "Creamy cappuccino." },
  { id: 10, title: "Tea", emoji: "🍵", price: "₹40", desc: "Hot tea." },
  { id: 11, title: "Green Tea", emoji: "🍵", price: "₹50", desc: "Healthy green tea." },
  { id: 12, title: "Iced Tea", emoji: "🥤", price: "₹60", desc: "Refreshing iced tea." },
  { id: 13, title: "Chocolate Shake", emoji: "🥤", price: "₹90", desc: "Chocolate milkshake." },
  { id: 14, title: "Vanilla Shake", emoji: "🥤", price: "₹90", desc: "Vanilla milkshake." },
  { id: 15, title: "Mango Shake", emoji: "🥭", price: "₹100", desc: "Mango milkshake." },
  { id: 16, title: "Strawberry Shake", emoji: "🍓", price: "₹100", desc: "Strawberry milkshake." },
  { id: 17, title: "Orange Juice", emoji: "🍊", price: "₹70", desc: "Fresh orange juice." },
  { id: 18, title: "Apple Juice", emoji: "🍎", price: "₹70", desc: "Fresh apple juice." },
  { id: 19, title: "Pineapple Juice", emoji: "🍍", price: "₹80", desc: "Tropical pineapple juice." },
  { id: 20, title: "Watermelon Juice", emoji: "🍉", price: "₹80", desc: "Refreshing watermelon juice." },
  { id: 21, title: "Banana Shake", emoji: "🍌", price: "₹90", desc: "Banana milkshake." },
  { id: 22, title: "Berry Smoothie", emoji: "🍇", price: "₹110", desc: "Mixed berry smoothie." },
  { id: 23, title: "Coconut Water", emoji: "🥥", price: "₹60", desc: "Fresh coconut water." },
  { id: 24, title: "Herbal Tea", emoji: "🍵", price: "₹50", desc: "Refreshing herbal tea." },
  { id: 25, title: "Ginger Tea", emoji: "🍵", price: "₹50", desc: "Hot ginger tea." },
  { id: 26, title: "Mint Lemonade", emoji: "🍋", price: "₹70", desc: "Cool mint lemonade." },
  { id: 27, title: "Black Coffee", emoji: "☕", price: "₹80", desc: "Strong black coffee." },
  { id: 28, title: "Iced Coffee", emoji: "🥤", price: "₹90", desc: "Cold iced coffee." },
  { id: 29, title: "Mocha", emoji: "☕", price: "₹110", desc: "Chocolate coffee." },
  { id: 30, title: "Latte", emoji: "☕", price: "₹100", desc: "Creamy latte." },
];

function DrinkGallery({ addToCart }) {
  const [openItem, setOpenItem] = useState(null);

  const openModal = (item) => setOpenItem(item);
  const closeModal = () => setOpenItem(null);

  return (
    <div className="food-page">
      <h2>Drinks Menu</h2>
      <div className="food-grid">
        {DRINKS.map((item, idx) => (
          <div
            key={item.id}
            className="food-card"
            style={{ "--delay": `${idx * 0.05}s`, cursor: "pointer" }}
            onClick={() => openModal(item)}
          >
            <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
            <h3 style={{ fontWeight: "bold", marginTop: "5px" }}>{item.title}</h3>
            <p>{item.price}</p>
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
              <button className="btn" onClick={() => { addToCart(openItem); closeModal(); }}>
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

export default DrinkGallery;

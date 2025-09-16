import React, { useState, useEffect } from "react";
import "./food.css";

const ALL_ITEMS = [
  { id: 1, title: "Margherita Pizza", price: "₹299", emoji: "🍕" },
  { id: 2, title: "Cheese Burger", price: "₹199", emoji: "🍔" },
  { id: 3, title: "Cold Drink", price: "₹50", emoji: "🥤" },
  { id: 4, title: "Coffee", price: "₹80", emoji: "☕" },
  { id: 5, title: "Veg Salad", price: "₹120", emoji: "🥗" },
  { id: 6, title: "Chicken Salad", price: "₹150", emoji: "🥗🐔" },
  { id: 7, title: "Pasta Meal", price: "₹180", emoji: "🍝" },
  { id: 8, title: "Chocolate Cake", price: "₹250", emoji: "🍰" },
  { id: 9, title: "Ice Cream", price: "₹100", emoji: "🍨" },
  { id: 10, title: "French Fries", price: "₹90", emoji: "🍟" },
  { id: 11, title: "Grilled Sandwich", price: "₹120", emoji: "🥪" },
  { id: 12, title: "Donut", price: "₹60", emoji: "🍩" },
  { id: 13, title: "Taco", price: "₹150", emoji: "🌮" },
  { id: 14, title: "Sushi", price: "₹350", emoji: "🍣" },
  { id: 15, title: "Steak", price: "₹400", emoji: "🥩" },
  { id: 16, title: "Fried Chicken", price: "₹250", emoji: "🍗" },
  { id: 17, title: "Veg Sandwich", price: "₹100", emoji: "🥪🥬" },
  { id: 18, title: "Pancakes", price: "₹180", emoji: "🥞" },
  { id: 19, title: "Waffles", price: "₹200", emoji: "🧇" },
  { id: 20, title: "Bagel", price: "₹70", emoji: "🥯" },
  { id: 21, title: "Smoothie", price: "₹120", emoji: "🍹" },
  { id: 22, title: "Lemonade", price: "₹60", emoji: "🍋" },
  { id: 23, title: "Hot Dog", price: "₹150", emoji: "🌭" },
  { id: 24, title: "Popcorn", price: "₹80", emoji: "🍿" },
  { id: 25, title: "Pizza Slice", price: "₹99", emoji: "🍕🍕" },
  { id: 26, title: "Spaghetti", price: "₹220", emoji: "🍝" },
  { id: 27, title: "Muffin", price: "₹60", emoji: "🧁" },
  { id: 28, title: "Croissant", price: "₹70", emoji: "🥐" },
  { id: 29, title: "Bagel Sandwich", price: "₹150", emoji: "🥯🥪" },
  { id: 30, title: "Cappuccino", price: "₹100", emoji: "☕" },
  { id: 31, title: "Latte", price: "₹120", emoji: "☕🥛" },
  { id: 32, title: "Espresso", price: "₹90", emoji: "☕" },
  { id: 33, title: "Macaron", price: "₹50", emoji: "🫖" },
  { id: 34, title: "Brownie", price: "₹80", emoji: "🍫" },
  { id: 35, title: "Cheesecake", price: "₹250", emoji: "🍰" },
  { id: 36, title: "Churros", price: "₹100", emoji: "🫓" },
  { id: 37, title: "Omelette", price: "₹120", emoji: "🍳" },
  { id: 38, title: "Fried Rice", price: "₹180", emoji: "🍚" },
  { id: 39, title: "Noodles", price: "₹160", emoji: "🍜" },
  { id: 40, title: "Burger Combo", price: "₹299", emoji: "🍔🥤" },
];

function AllItemsPage1({ addToCart }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(ALL_ITEMS);
  }, []);

  return (
    <div className="food-page">
      <h2>All Items</h2>
      <div className="food-grid">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className="food-card"
            style={{ "--delay": `${idx * 0.05}s` }}
          >
            <div className="emoji">{item.emoji}</div>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <button
              className="add-btn"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllItemsPage1;

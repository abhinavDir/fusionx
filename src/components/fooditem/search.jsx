import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

// Combine all items from pages
const ITEMS = [
  { id: 1, name: "Margherita Pizza", category: "allitems" },
  { id: 2, name: "Cheese Burger", category: "allitems" },
  { id: 3, name: "Cold Drink", category: "drink" },
  { id: 4, name: "Coffee", category: "drink" },
  { id: 5, name: "Veg Salad", category: "meal" },
  { id: 6, name: "Chicken Salad", category: "allitems" },
  { id: 7, name: "Pasta Meal", category: "meal" },
  { id: 8, name: "Chocolate Cake", category: "allitems" },
  { id: 9, name: "Ice Cream", category: "allitems" },
  { id: 10, name: "French Fries", category: "food" },
  { id: 11, name: "Burger", category: "food" },
  { id: 12, name: "Pizza", category: "food" },
  { id: 13, name: "Pasta", category: "food" },
  { id: 14, name: "Salad", category: "food" },
  { id: 15, name: "Sandwich", category: "food" },
  { id: 16, name: "Taco", category: "food" },
  { id: 17, name: "Steak", category: "food" },
  { id: 18, name: "Fried Chicken", category: "food" },
  { id: 19, name: "Coke", category: "drink" },
  { id: 20, name: "Pepsi", category: "drink" },
  { id: 21, name: "Lemonade", category: "drink" },
  { id: 22, name: "Smoothie", category: "drink" },
  { id: 23, name: "Coffee Latte", category: "drink" },
  { id: 24, name: "Espresso", category: "drink" },
  { id: 25, name: "Cappuccino", category: "drink" },
  { id: 26, name: "Veg Meal", category: "meal" },
  { id: 27, name: "Chicken Meal", category: "meal" },
  { id: 28, name: "Fish Meal", category: "meal" },
  { id: 29, name: "Pasta Meal", category: "meal" },
  { id: 30, name: "Rice Bowl", category: "meal" },
  { id: 31, name: "Noodles Meal", category: "meal" },
  { id: 32, name: "Burger Meal", category: "meal" },
  { id: 33, name: "Sandwich Meal", category: "meal" },
];

function SearchPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredItems = ITEMS.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleItemClick = (item) => {
    const routeMap = {
      allitems: "/All-item",
      food: "/food",
      drink: "/drink",
      meal: "/Meal",
    };
    const path = routeMap[item.category] || "/All-item";
    navigate(`${path}`);
  };

  return (
    <div className="search-page">
      <h2>🔍 Search Food</h2>
      <input
        type="text"
        placeholder="Search food items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-box"
      />
      <div className="results">
        {query &&
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="food-card"
              onClick={() => handleItemClick(item)}
            >
              <span role="img" aria-label="food">
              
              </span>{" "}
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchPage;

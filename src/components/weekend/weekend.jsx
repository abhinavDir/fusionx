import React from "react";
import { useNavigate } from "react-router-dom";
import './weekend.css';

function WeekendFood() {
  const navigate = useNavigate();

  const weekendItems = [
    {
      day: "Monday",
      foods: [
        { icon: "🍕", name: "Pizza", content: "Cheesy and delicious pizza." },
        { icon: "🍔", name: "Burger", content: "Juicy burgers with fries." },
        { icon: "🥗", name: "Salad", content: "Fresh and healthy greens." },
        { icon: "🍣", name: "Sushi", content: "Fresh sushi rolls." },
      ],
    },
    {
      day: "Wednesday",
      foods: [
        { icon: "🌮", name: "Tacos", content: "Spicy Mexican tacos." },
        { icon: "🍣", name: "Sushi", content: "Fresh sushi rolls." },
        { icon: "🥗", name: "Salad", content: "Fresh and healthy greens." },
        { icon: "🥘", name: "Paella", content: "Spanish rice delicacy." },
      ],
    },
    {
      day: "Saturday",
      foods: [
        { icon: "🍩", name: "Donuts", content: "Sweet and soft donuts." },
        { icon: "🥪", name: "Sandwich", content: "Healthy sandwiches." },
        { icon: "🥗", name: "Salad", content: "Fresh and healthy greens." },
        { icon: "🍜", name: "Noodles", content: "Hot and tasty noodles." },
      ],
    },
  ];

  // Navigate to All Items page
  const goToAllItems = () => {
    navigate("/All-item");
  };

  return (
    <div className="container">
      <h2 className="heading">Weekend Special Dish</h2>

      {weekendItems.map((dayItem, index) => (
        <div className="day-section" key={index}>
          <h3 className="day-title">{dayItem.day}</h3>
          <div className="grid">
            {dayItem.foods.map((food, idx) => (
              <div
                className="icon-card"
                key={idx}
                onClick={goToAllItems} // <-- Navigate on click
                style={{ cursor: "pointer" }}
              >
                <div className="icon">{food.icon}</div>
                <h4 className="name">{food.name}</h4>
                <p className="content">{food.content}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeekendFood;

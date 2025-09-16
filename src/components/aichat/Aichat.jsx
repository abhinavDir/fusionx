import React, { useState } from "react";
import "./aichat.css";

// Predefined 100+ Q&A
const PREDEFINED_QA = [
  // 1-20 Price & Availability
  
  // Pizzaconst PREDEFINED_QA = [
  /* =========================
  /* =========================
   11. Breakfast Items
========================== */
{ questions: ["breakfast menu"], answer: "🍳 Breakfast: Idli ₹40, Dosa ₹50, Poha ₹35, Sandwich ₹120." },
{ questions: ["idli"], answer: "2 Idlis with chutney & sambar ₹40." },
{ questions: ["dosa"], answer: "Crispy Masala Dosa ₹50." },
{ questions: ["poha"], answer: "Poha with peanuts & coriander ₹35." },
{ questions: ["upma"], answer: "Upma ₹40." },
{ questions: ["paratha"], answer: "Stuffed Aloo Paratha ₹60." },
{ questions: ["omelette"], answer: "2 Egg Omelette ₹40." },
{ questions: ["bread omelette"], answer: "Bread Omelette ₹50." },
{ questions: ["pancake"], answer: "Pancake with honey ₹80." },
{ questions: ["cornflakes"], answer: "Cornflakes with milk ₹50." },

/* =========================
   12. Lunch / Meals
========================== */
{ questions: ["lunch menu"], answer: "🍛 Lunch: Thali ₹120, Biryani ₹150, Fried Rice ₹130, Noodles ₹120." },
{ questions: ["veg thali"], answer: "Veg Thali with 2 sabzi, dal, rice, roti ₹120." },
{ questions: ["chicken thali"], answer: "Chicken Thali ₹180." },
{ questions: ["fish thali"], answer: "Fish Thali ₹200." },
{ questions: ["paneer thali"], answer: "Paneer Thali ₹150." },
{ questions: ["biryani"], answer: "Hyderabadi Chicken Biryani ₹150." },
{ questions: ["veg biryani"], answer: "Veg Biryani ₹120." },
{ questions: ["egg biryani"], answer: "Egg Biryani ₹130." },
{ questions: ["fried rice"], answer: "Chinese Fried Rice ₹130." },
{ questions: ["noodles"], answer: "Veg Noodles ₹120, Chicken Noodles ₹150." },

/* =========================
   13. Snacks
========================== */
{ questions: ["snacks"], answer: "🍟 Snacks: Samosa ₹20, Pakoda ₹25, Fries ₹70, Momos ₹80." },
{ questions: ["samosa"], answer: "2 pcs Samosa ₹20." },
{ questions: ["pakoda"], answer: "Crispy Pakoda ₹25 per plate." },
{ questions: ["french fries"], answer: "Golden French Fries ₹70." },
{ questions: ["cheese fries"], answer: "Cheese Loaded Fries ₹90." },
{ questions: ["momos"], answer: "Steamed Veg Momos ₹80, Chicken Momos ₹100." },
{ questions: ["spring roll"], answer: "Veg Spring Roll ₹90." },
{ questions: ["pasta"], answer: "White Sauce Pasta ₹120, Red Sauce Pasta ₹130." },
{ questions: ["maggi"], answer: "Masala Maggi ₹50." },
{ questions: ["burger fries combo"], answer: "Burger + Fries Combo ₹199." },

/* =========================
   14. Evening Specials
========================== */
{ questions: ["tea"], answer: "☕ Tea ₹20." },
{ questions: ["coffee"], answer: "Hot Coffee ₹30." },
{ questions: ["green tea"], answer: "Green Tea ₹25." },
{ questions: ["lemon tea"], answer: "Lemon Tea ₹25." },
{ questions: ["hot chocolate"], answer: "Hot Chocolate ₹60." },
{ questions: ["soup"], answer: "Tomato Soup ₹50, Sweet Corn Soup ₹60." },
{ questions: ["sweet corn"], answer: "Sweet Corn ₹40." },
{ questions: ["pakora"], answer: "Onion Pakora ₹30." },
{ questions: ["cutlet"], answer: "Veg Cutlet ₹40." },
{ questions: ["evening snacks"], answer: "🍽️ Evening specials: Tea, Pakoda, Cutlet, Maggi." },

/* =========================
   15. Weekend Specials
========================== */
{ questions: ["weekend special"], answer: "🎉 Weekend Specials: Tandoori Chicken ₹250, Paneer Butter Masala ₹180, Gulab Jamun ₹50." },
{ questions: ["tandoori chicken"], answer: "🔥 Tandoori Chicken (Half ₹150 / Full ₹250)." },
{ questions: ["paneer butter masala"], answer: "Paneer Butter Masala ₹180." },
{ questions: ["butter naan"], answer: "Butter Naan ₹30." },
{ questions: ["chole bhature"], answer: "Chole Bhature ₹90." },
{ questions: ["dal makhani"], answer: "Dal Makhani ₹120." },
{ questions: ["kadhai paneer"], answer: "Kadhai Paneer ₹170." },
{ questions: ["chicken curry"], answer: "Chicken Curry ₹190." },
{ questions: ["mutton curry"], answer: "Mutton Curry ₹250." },
{ questions: ["biryani weekend"], answer: "Weekend Special Dum Biryani ₹160." },

/* =========================
   16. Student Queries
========================== */
{ questions: ["student discount"], answer: "🎓 Student Discount 10% available on weekdays." },
{ questions: ["student id"], answer: "Show Student ID to claim discount." },
{ questions: ["canteen wifi"], answer: "📶 Free WiFi available for students." },
{ questions: ["canteen study"], answer: "📚 Students can sit & study during off-peak hours." },
{ questions: ["canteen music"], answer: "🎵 Yes! Music system available during evenings." },
{ questions: ["canteen party"], answer: "🥳 You can book tables for small student parties." },
{ questions: ["canteen games"], answer: "🎮 Board games available at weekends." },
{ questions: ["canteen events"], answer: "🎤 Open Mic events every Saturday!" },
{ questions: ["canteen fest"], answer: "🎉 Special menu during College Fest." },
{ questions: ["canteen offers"], answer: "🔥 Ongoing: Buy 1 Get 1 Pizza on Fridays." },

/* =========================
   17. Health & Diet
========================== */
{ questions: ["healthy food"], answer: "🥗 Healthy Options: Salad ₹80, Soup ₹50, Multigrain Sandwich ₹140." },
{ questions: ["salad"], answer: "Veg Salad ₹80, Fruit Salad ₹100." },
{ questions: ["fruit bowl"], answer: "Fresh Fruit Bowl ₹90." },
{ questions: ["oats"], answer: "Oats Porridge ₹60." },
{ questions: ["diet food"], answer: "Low Calorie Options: Oats, Salad, Soup." },
{ questions: ["protein shake"], answer: "💪 Protein Shake ₹150." },
{ questions: ["vegan options"], answer: "🌱 Vegan: Salad, Fruit Bowl, Black Coffee, Vegan Wrap." },
{ questions: ["gluten free"], answer: "Gluten-free options: Salad, Corn Soup." },
{ questions: ["sugar free"], answer: "Sugar-Free Desserts available." },
{ questions: ["low calorie"], answer: "Low calorie snacks: Sprouts ₹40." },

/* =========================
   18. Tech & AI Fun
========================== */
{ questions: ["do you have ai"], answer: "🤖 Yes! I’m your AI buddy in FusionX Canteen." },
{ questions: ["ai bot help"], answer: "I can help with food, orders, and offers instantly." },
{ questions: ["are you smart"], answer: "😎 I’m smart enough to get you food quickly!" },
{ questions: ["can you learn"], answer: "📖 I improve with feedback." },
{ questions: ["can you cook"], answer: "👨‍🍳 I don’t cook, but I know all recipes here." },
{ questions: ["tell me recipe"], answer: "📚 Sorry, I don’t share recipes yet, only menu info." },
{ questions: ["do you chat"], answer: "💬 Yes! I can chat about food and fun." },
{ questions: ["can you play"], answer: "🎮 I don’t play games, but I can recommend snacks for gamers." },
{ questions: ["future of ai"], answer: "🚀 AI will make canteen smarter and faster." },
{ questions: ["are you funny"], answer: "😂 I try! Want another food joke?" }

     1. Greetings & Small Talk
  ========================== */
  { questions: ["hi", "hey", "hello"], answer: "👋 Hello! Welcome to FusionX Canteen. How can I help you?" },
  { questions: ["good morning"], answer: "🌞 Good morning! Ready for a delicious breakfast?" },
  { questions: ["good afternoon"], answer: "☀️ Good afternoon! What’s your lunch plan?" },
  { questions: ["good evening"], answer: "🌆 Good evening! Dinner time vibes?" },
  { questions: ["good night"], answer: "🌙 Good night! See you tomorrow with tasty food." },
  { questions: ["who are you"], answer: "🤖 I’m FusionX Canteen’s AI Bot. I help with menus, offers, and orders." },
  { questions: ["your name"], answer: "You can call me FusionX Bot! 🚀" },
  { questions: ["what can you do"], answer: "🍔 I can show food menus, special offers, and help track orders." },
  { questions: ["how are you"], answer: "😊 I’m great! Excited to serve you food info today." },
  { questions: ["are you there"], answer: "👀 Always here for you! Ask me about food or orders." },
  { questions: ["thank you", "thanks"], answer: "🙏 You’re most welcome! Happy to help." },
  { questions: ["bye", "goodbye", "see you"], answer: "👋 Bye! Have a tasty day ahead." },
  { questions: ["nice to meet you"], answer: "🤝 Nice to meet you too!" },
  { questions: ["are you human"], answer: "😅 Nope, I’m an AI, but I love food like humans!" },
  { questions: ["do you eat"], answer: "🍕 I don’t eat, but I know all about food!" },
  { questions: ["who created you"], answer: "👨‍💻 I was created by the FusionX Dev Team for Canteen services." },
  { questions: ["tell me a joke"], answer: "😂 Why don’t burgers tell secrets? They might spill the beans!" },
  { questions: ["tell me a riddle"], answer: "❓ What has keys but can’t open locks? → A piano 🎹" },
  { questions: ["sing a song"], answer: "🎶 La la la… I’m better with food than music 😅" },
  { questions: ["tell me a fact"], answer: "📚 Fun fact: Pizza was invented in Naples, Italy 🍕" },

  /* =========================
     2. Menu - Pizzas
  ========================== */
  { questions: ["pizza"], answer: "🍕 Pizza Menu: Margherita ₹299, Veg ₹349, Chicken ₹399." },
  { questions: ["margherita pizza"], answer: "Classic Margherita Pizza ₹299." },
  { questions: ["veg pizza"], answer: "Fresh Veg Pizza ₹349 with cheese and veggies." },
  { questions: ["chicken pizza"], answer: "Chicken Pizza ₹399 loaded with chicken chunks." },
  { questions: ["paneer pizza"], answer: "Paneer Pizza ₹379 with Indian spices." },
  { questions: ["cheese burst pizza"], answer: "🧀 Cheese Burst Pizza ₹399 filled with melted cheese." },
  { questions: ["double cheese pizza"], answer: "🧀🧀 Double Cheese Pizza ₹449 extra cheesy delight." },
  { questions: ["spicy pizza"], answer: "🌶️ Spicy Pizza ₹359 with jalapenos & chili flakes." },
  { questions: ["corn pizza"], answer: "🌽 Corn & Cheese Pizza ₹329." },
  { questions: ["mushroom pizza"], answer: "🍄 Mushroom Pizza ₹349." },
  { questions: ["deluxe pizza"], answer: "Deluxe Veggie Pizza ₹399." },
  { questions: ["tandoori pizza"], answer: "🔥 Tandoori Chicken Pizza ₹449." },
  { questions: ["bbq pizza"], answer: "BBQ Chicken Pizza ₹459." },
  { questions: ["party pizza"], answer: "🍕 Large Party Pizza ₹699 (serves 4-5)." },
  { questions: ["pizza combo"], answer: "Pizza + Drink Combo ₹399." },

  /* =========================
     3. Menu - Burgers
  ========================== */
  { questions: ["burger"], answer: "🍔 Burgers: Veg ₹150, Chicken ₹220." },
  { questions: ["veg burger"], answer: "Veg Burger ₹150." },
  { questions: ["chicken burger"], answer: "Chicken Burger ₹220." },
  { questions: ["cheese burger"], answer: "Cheese Burger ₹180." },
  { questions: ["double patty burger"], answer: "🔥 Double Patty Burger ₹250." },
  { questions: ["paneer burger"], answer: "Paneer Tikka Burger ₹200." },
  { questions: ["spicy burger"], answer: "🌶️ Spicy Veg Burger ₹160." },
  { questions: ["crispy burger"], answer: "Crispy Chicken Burger ₹240." },
  { questions: ["burger combo"], answer: "Burger + Fries Combo ₹199." },

  /* =========================
     4. Menu - Sandwiches
  ========================== */
  { questions: ["sandwich"], answer: "🥪 Sandwiches: Veg ₹120, Chicken ₹150." },
  { questions: ["grilled sandwich"], answer: "Grilled Sandwich ₹140." },
  { questions: ["club sandwich"], answer: "Club Sandwich ₹160." },
  { questions: ["paneer sandwich"], answer: "Paneer Sandwich ₹150." },
  { questions: ["chicken tikka sandwich"], answer: "Chicken Tikka Sandwich ₹180." },

  /* =========================
     5. Menu - Drinks
  ========================== */
  { questions: ["drinks"], answer: "🥤 Drinks: Coke, Pepsi, Cold Coffee, Mojito, Milkshake." },
  { questions: ["coke"], answer: "Coca Cola ₹40." },
  { questions: ["pepsi"], answer: "Pepsi ₹40." },
  { questions: ["cold coffee"], answer: "Cold Coffee ₹80." },
  { questions: ["iced tea"], answer: "Iced Tea ₹70." },
  { questions: ["mojito"], answer: "Virgin Mojito ₹120." },
  { questions: ["milkshake"], answer: "Milkshake ₹90 (Chocolate, Strawberry, Vanilla)." },
  { questions: ["chocolate shake"], answer: "🍫 Chocolate Shake ₹100." },
  { questions: ["strawberry shake"], answer: "🍓 Strawberry Shake ₹100." },
  { questions: ["vanilla shake"], answer: "Vanilla Shake ₹90." },

  /* =========================
     6. Menu - Desserts
  ========================== */
  { questions: ["dessert"], answer: "🍰 Desserts: Cake, Pastry, Brownie, Ice Cream." },
  { questions: ["cake"], answer: "Fresh Cream Cake Slice ₹80." },
  { questions: ["pastry"], answer: "Pastry ₹60 (Chocolate/Strawberry)." },
  { questions: ["brownie"], answer: "Hot Chocolate Brownie ₹100." },
  { questions: ["ice cream"], answer: "Ice Cream ₹70 (Vanilla, Chocolate, Mango)." },
  { questions: ["gulab jamun"], answer: "🍮 Gulab Jamun ₹50 (2 pieces)." },

  /* =========================
     7. Orders & Tracking
  ========================== */
  { questions: ["how to order"], answer: "🛒 Add items to cart and proceed to checkout." },
  { questions: ["track order"], answer: "🚚 Track orders in the Tracking section." },
  { questions: ["order status"], answer: "Order stages: Received → Preparing → Out for Delivery → Delivered." },
  { questions: ["cancel order"], answer: "❌ You can cancel before 'Out for Delivery'." },
  { questions: ["reorder"], answer: "🔁 Go to previous orders and reorder easily." },
  { questions: ["delivery time"], answer: "⏱️ Average delivery time: 25-30 minutes." },
  { questions: ["order delayed"], answer: "😔 Sorry! Your order might be late due to high demand." },
  { questions: ["wrong order"], answer: "🙇 Contact support for replacement/refund." },

  /* =========================
     8. Payments & Refunds
  ========================== */
  { questions: ["payment methods"], answer: "💳 We accept UPI, Cards, Wallets, and Cash." },
  { questions: ["cash on delivery"], answer: "Yes! COD available 🚚💵" },
  { questions: ["upi payment"], answer: "UPI accepted via PhonePe, GPay, Paytm." },
  { questions: ["refund"], answer: "Refunds processed within 3-5 days." },
  { questions: ["failed payment"], answer: "⚠️ Retry or use another method." },
  { questions: ["invoice"], answer: "📄 Digital invoice sent via email." },
  { questions: ["gst bill"], answer: "GST invoice available on request." },

  /* =========================
     9. Canteen Info
  ========================== */
  { questions: ["canteen timing"], answer: "🕒 Open 9 AM – 9 PM, all days." },
  { questions: ["canteen address"], answer: "📍 FusionX Canteen, Block A, Campus." },
  { questions: ["holiday"], answer: "Closed only on National Holidays." },
  { questions: ["capacity"], answer: "👥 Seating capacity: 100+." },
  { questions: ["self service"], answer: "Yes, self-service system here." },
  { questions: ["hygiene"], answer: "💯 We follow high hygiene standards." },

  /* =========================
     10. Fun & Extra
  ========================== */
  { questions: ["tell me trivia"], answer: "🍔 The world’s largest burger weighed over 1 ton!" },
  { questions: ["your favorite food"], answer: "🤖 I love Pizza 🍕 (at least in theory 😅)." },
  { questions: ["are you single"], answer: "😂 I’m just code, no relationships." },
  { questions: ["can you dance"], answer: "💃 I can’t, but I can send dancing emojis 🎉🕺." },
  { questions: ["emoji"], answer: "🥳 🎉 🍕 🍔 🥤" }
];



function AIChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { type: "user", text: input };
    const matched = PREDEFINED_QA.find(q =>
      q.question.toLowerCase().includes(input.toLowerCase())
    );
    const aiMsg = {
      type: "ai",
      text: matched ? matched.answer : "Sorry, I don't have an answer for that."
    };

    setMessages([...messages, userMsg, aiMsg]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="ai-chat-page">
      <h2>🤖 FusionX Canteen Chat</h2>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-bubble ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default AIChatPage;

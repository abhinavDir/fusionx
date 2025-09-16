import React, { useState } from "react";
import "./aichat.css";

// Predefined 100+ Q&A
const PREDEFINED_QA = [
  // 1-20 Price & Availability
  
  // Pizza
  { question: "pizza", answer: "🍕 Pizza Details:\n- Types: Margherita (₹299), Veg (₹349), Chicken (₹399)\n- Offers: Pizza + Drink combo ₹399\n- Available: All week\n- Customize toppings while ordering." },
  { question: "pizza price", answer: "Pizza prices: Margherita ₹299, Veg ₹349, Chicken ₹399." },
  { question: "price of pizza", answer: "Pizza costs: Margherita ₹299, Veg ₹349, Chicken ₹399." },
  { question: "how much is pizza", answer: "Pizza costs: Margherita ₹299, Veg ₹349, Chicken ₹399." },
  { question: "pizza offer", answer: "Pizza Offer: Pizza + Drink combo ₹399." },
  
  // Burger
  { question: "burger", answer: "🍔 Burger Details:\n- Types: Veg ₹150, Cheese ₹180, Chicken ₹220\n- Offers: Burger + Fries + Drink combo ₹250\n- Available: All week\n- Extra cheese ₹50." },
  { question: "burger price", answer: "Burger prices: Veg ₹150, Cheese ₹180, Chicken ₹220." },
  { question: "price of burger", answer: "Burger costs: Veg ₹150, Cheese ₹180, Chicken ₹220." },
  { question: "how much is burger", answer: "Burger costs: Veg ₹150, Cheese ₹180, Chicken ₹220." },
  { question: "burger offer", answer: "Burger Offer: Burger + Fries + Drink combo ₹250." },
  
  // Cold Drink
  { question: "cold drink", answer: "🥤 Cold Drink Details:\n- Types: Cola, Pepsi, Lemonade, Juice\n- Price: ₹40 each\n- Offers: Buy 1 Get 1 free today\n- Sugar-free option available." },
  { question: "cold drink price", answer: "Cold Drinks cost ₹40 each." },
  { question: "price of cold drink", answer: "Cold Drinks cost ₹40 each." },
  { question: "how much is cold drink", answer: "Cold Drinks cost ₹40 each." },
  { question: "cold drink offer", answer: "Cold Drink Offer: Buy 1 Get 1 free today." },
  
  // Sushi
  { question: "sushi", answer: "🍣 Sushi Details:\n- Types: Veg, Chicken, Seafood\n- Price: ₹250 per serving\n- Offers: Sushi meal combos available\n- Vegetarian sushi available." },
  { question: "sushi price", answer: "Sushi costs ₹250 per serving." },
  { question: "price of sushi", answer: "Sushi costs ₹250 per serving." },
  { question: "how much is sushi", answer: "Sushi costs ₹250 per serving." },
  { question: "sushi offer", answer: "Sushi Offer: Meal combos available." },
  
  // Salad
  { question: "salad", answer: "🥗 Salad Details:\n- Types: Veg Salad ₹120, Caesar Salad ₹150, Chicken Salad ₹180\n- Offers: Salad + Drink combo ₹180\n- Customize toppings." },
  { question: "salad price", answer: "Salad prices: Veg ₹120, Caesar ₹150, Chicken ₹180." },
  { question: "price of salad", answer: "Salad prices: Veg ₹120, Caesar ₹150, Chicken ₹180." },
  { question: "how much is salad", answer: "Salad prices: Veg ₹120, Caesar ₹150, Chicken ₹180." },
  { question: "salad offer", answer: "Salad Offer: Salad + Drink combo ₹180." },

  // Canteen Timings
  { question: "canteen time", answer: "⏰ Canteen Timings:\n- Open: 10 AM\n- Close: 10 PM\n- Delivery available 10 AM - 10 PM." },
  { question: "opening time", answer: "Canteen opens at 10 AM." },
  { question: "closing time", answer: "Canteen closes at 10 PM." },

  { question: "coffee", answer: "☕ Coffee Details:\n- Types: Hot, Cold, Latte, Cappuccino\n- Price: ₹50 each\n- Offers: Coffee + Cookie combo ₹70\n- Available: 10 AM - 10 PM" },
  { question: "coffee price", answer: "Coffee costs ₹50 each." },
  { question: "price of coffee", answer: "Coffee costs ₹50 each." },
  { question: "how much is coffee", answer: "Coffee costs ₹50 each." },
  { question: "coffee offer", answer: "Coffee Offer: Coffee + Cookie combo ₹70." },

  { question: "juice", answer: "🍹 Juice Details:\n- Types: Orange, Apple, Mixed Fruit\n- Price: ₹60 each\n- Offers: Juice + Snack combo ₹100\n- Available: 10 AM - 10 PM" },
  { question: "juice price", answer: "Juices cost ₹60 each." },
  { question: "price of juice", answer: "Juices cost ₹60 each." },
  { question: "how much is juice", answer: "Juices cost ₹60 each." },
  { question: "juice offer", answer: "Juice Offer: Juice + Snack combo ₹100." },

  // MEALS & COMBOS
  { question: "veg meal", answer: "🥗 Veg Meal: ₹200\n- Includes: Veg main dish + Rice + Salad + Drink\n- Offers: Combo discount available\n- Available: 10 AM - 10 PM" },
  { question: "chicken meal", answer: "🍗 Chicken Meal: ₹250\n- Includes: Chicken main dish + Rice + Salad + Drink\n- Offers: Combo discount available\n- Available: 10 AM - 10 PM" },
  { question: "breakfast combo", answer: "🍳 Breakfast Combo: ₹150\n- Includes: Sandwich + Juice + Dessert\n- Available: 8 AM - 11 AM" },

  // CANTEEN INFO
  { question: "canteen time", answer: "⏰ Canteen Timings: Open 10 AM, Close 10 PM\n- Delivery available 10 AM - 10 PM" },
  { question: "opening time", answer: "Canteen opens at 10 AM." },
  { question: "closing time", answer: "Canteen closes at 10 PM." },
  { question: "delivery time", answer: "Delivery available from 10 AM to 10 PM." },

  // OFFERS & DISCOUNTS
  { question: "current offer", answer: "🔥 Current Offer:\n- Pizza + Drink combo ₹399\n- Burger + Fries + Drink combo ₹250\n- Buy 1 Get 1 Cold Drink today" },
  { question: "flash sale", answer: "⚡ Flash Sale: Up to 20% off on selected meals today." },
  { question: "combo discount", answer: "🎉 Combo Discount: All meal combos get 10% off today." },
{ question: "pizza", answer: "🍕 Pizza Details:\n- Types: Veg ₹299, Cheese ₹350, Chicken ₹399\n- Offers: 1 Large + Drink ₹399\n- Available: 10 AM - 10 PM\n- Extra toppings ₹50 each." },
  { question: "what is pizza", answer: "🍕 Pizza is a baked flatbread topped with tomato sauce, cheese, and your choice of toppings. Price: ₹299-₹399. Combos and extra toppings available. Served 10 AM - 10 PM." },
  { question: "pizza price", answer: "Pizza prices: Veg ₹299, Cheese ₹350, Chicken ₹399. Extra toppings ₹50 each. Combo with drink ₹399." },
  { question: "price of pizza", answer: "Pizza costs ₹299-₹399 depending on type. Combo offers available." },

  // SUSHI
  { question: "sushi", answer: "🍣 Sushi Details:\n- Types: Veg, Chicken, Seafood\n- Price: ₹250 per serving\n- Offers: Sushi meal combos available\n- Available: 10 AM - 10 PM\n- Vegetarian option available." },
  { question: "what is sushi", answer: "🍣 Sushi is a Japanese dish made with rice, seafood, and vegetables. Price: ₹250 per serving. Available from 10 AM - 10 PM. Combos and vegetarian options available." },

  // BURGER
  { question: "burger", answer: "🍔 Burger Details:\n- Types: Veg ₹150, Cheese ₹180, Chicken ₹220\n- Offers: Burger + Fries + Drink combo ₹250\n- Available: 10 AM - 10 PM\n- Extra cheese ₹50." },
  { question: "what is burger", answer: "🍔 Burger is a sandwich with a patty, lettuce, tomato, and sauces. Types: Veg ₹150, Cheese ₹180, Chicken ₹220. Combo offer: Burger + Fries + Drink ₹250. Available 10 AM - 10 PM." },

  // SANDWICH
  { question: "sandwich", answer: "🥪 Sandwich Details:\n- Types: Veg ₹120, Cheese ₹150, Chicken ₹180\n- Offers: Sandwich + Drink combo ₹200\n- Available: 10 AM - 10 PM\n- Add extra filling ₹30." },
  { question: "what is sandwich", answer: "🥪 Sandwich is made with bread, lettuce, tomato, cheese, and your choice of protein. Price: ₹120-₹180. Combo offers available. Served 10 AM - 10 PM." },

  // NOODLES
  { question: "noodles", answer: "🍜 Noodles Details:\n- Types: Veg ₹180, Chicken ₹220, Hakka ₹250\n- Offers: Noodles + Drink ₹250\n- Available: 10 AM - 10 PM\n- Extra toppings ₹40." },
  { question: "what is noodles", answer: "🍜 Noodles are stir-fried with vegetables or protein. Price: ₹180-₹250. Combos available. Served 10 AM - 10 PM." },

  // DRINKS
  { question: "drink", answer: "🥤 Drink Options:\n- Types: Cold Drink ₹40-₹60, Juice ₹80, Smoothie ₹120, Tea/Coffee ₹50-₹70\n- Offers: Buy 1 Get 1 Free on Cold Drinks\n- Available: 10 AM - 10 PM." },
  { question: "what is drink", answer: "🥤 Drinks include Cold Drinks, Juice, Smoothies, Tea, and Coffee. Price ranges ₹40-₹120. Offers available. Served 10 AM - 10 PM." },

  // SALADS
  { question: "salad", answer: "🥗 Salad Details:\n- Types: Veg ₹120, Chicken ₹180, Caesar ₹150\n- Offers: Salad + Drink ₹200\n- Available: 10 AM - 10 PM\n- Customize toppings available." },
  { question: "what is salad", answer: "🥗 Salad includes fresh vegetables and optional protein. Price: ₹120-₹180. Combos available. Served 10 AM - 10 PM." },

  // DESSERTS
  { question: "dessert", answer: "🍰 Dessert Options:\n- Donuts ₹50, Cakes ₹120, Shakes ₹100\n- Offers: Buy 2 get 1 free on Donuts\n- Available: 10 AM - 10 PM." },
  { question: "what is dessert", answer: "🍰 Desserts include Donuts, Cakes, and Shakes. Prices ₹50-₹120. Offers available. Served 10 AM - 10 PM." },

  // MEALS
  { question: "meal", answer: "🍛 Meal Details:\n- Veg Meal ₹180, Chicken Meal ₹250, Pasta Meal ₹220\n- Offers: Meal + Drink combo ₹250-₹300\n- Available: 10 AM - 10 PM" },
  { question: "what is meal", answer: "🍛 Meals include main course with rice or pasta and optional protein. Price: ₹180-₹250. Combos available. Served 10 AM - 10 PM." },
  // GENERIC QUESTIONS
  { question: "menu", answer: "📋 Menu available: Pizza, Burger, Sandwich, Noodles, Sushi, Salads, Desserts, Drinks, Meals & Combos." },
  { question: "food", answer: "🍴 We have Pizza, Burger, Sandwich, Noodles, Sushi, Salads, Desserts, Meals & Combos." },
  { question: "drink", answer: "🥤 Drinks available: Cold Drinks, Coffee, Juice, Smoothies, Tea." },
   { question: "What is the price of pizza?", answer: "Pizza starts at ₹299 depending on type." },
  { question: "How much is a Margherita pizza?", answer: "Margherita Pizza costs ₹299." },
  { question: "How much is a Veg Pizza?", answer: "Veg Pizza costs ₹349." },
  { question: "How much does a Chicken Pizza cost?", answer: "Chicken Pizza costs ₹399." },
  { question: "What is the price of sushi?", answer: "Sushi costs ₹250 per serving." },
  { question: "Price of burger?", answer: "Burgers range from ₹150 to ₹250." },
  { question: "How much is a cheese burger?", answer: "Cheese Burger costs ₹180." },
  { question: "Price of sandwich?", answer: "Sandwich starts at ₹150." },
  { question: "Cost of salad?", answer: "Salads are priced ₹120-₹180." },
  { question: "How much for noodles?", answer: "Noodles cost ₹180 today." },
  { question: "Price of taco?", answer: "Tacos cost ₹200 each." },
  { question: "How much is lemonade?", answer: "Lemonade costs ₹50." },
  { question: "Price of coffee?", answer: "Coffee is ₹80." },
  { question: "Cost of cold drink?", answer: "Cold Drinks range ₹40-₹120." },
  { question: "Price of fries?", answer: "Fries are ₹120." },
  { question: "How much is a full meal?", answer: "Full meals range from ₹250-₹400." },
  { question: "Cost of gift pack?", answer: "Gift packs start at ₹500." },
  { question: "What is the rate of donuts?", answer: "Donuts are ₹50 each." },
  { question: "How much for breakfast combo?", answer: "Breakfast combos cost ₹199-₹249." },
  { question: "Price of lunch special?", answer: "Lunch specials cost ₹250." },

  // 31-60 Current offers / discounts
  { question: "What is today's offer?", answer: "Today's offer: Burger combo at 20% off." },
  { question: "Any flash sale today?", answer: "Yes, 10% off on selected meals until 5 PM." },
  { question: "Do you have weekend offers?", answer: "Weekend offer: 1+1 Veg Pizza deal." },
  { question: "Is there a student discount?", answer: "Yes, students get 10% off with ID." },
  { question: "Any discounts on drinks?", answer: "Buy 1 get 1 free on Cold Drinks today." },
  { question: "Are there combo meal discounts?", answer: "Yes, combos offer 15-20% off." },
  { question: "Do you have seasonal offers?", answer: "Seasonal offers are updated in the app." },
  { question: "Any loyalty points bonus?", answer: "Yes, earn double points this week." },
  { question: "What is the 10.10 sale?", answer: "Up to 30% off on selected items." },
  { question: "Are there bulk order discounts?", answer: "Orders above ₹1000 get 10% off." },
  { question: "Any flash deals today?", answer: "Yes, check app for 2-hour flash deals." },
  { question: "Are desserts on offer?", answer: "Yes, donuts are 10% off today." },
  { question: "Are breakfast items discounted?", answer: "Breakfast combo 15% off till 11 AM." },
  { question: "Any combo discounts for lunch?", answer: "Lunch combos have 20% discount." },
  { question: "Is there a happy hour?", answer: "Happy hour: Drinks 20% off from 4-6 PM." },
  { question: "Do you have festival offers?", answer: "Festival offers: Combo meals at ₹299." },
  { question: "Are there limited-time deals?", answer: "Yes, check the app for limited-time deals." },
  { question: "Are vegan items on discount?", answer: "Yes, vegan meals are 10% off today." },
  { question: "Do you have weekday offers?", answer: "Yes, Monday: Burger at ₹180." },
  { question: "Are delivery charges discounted?", answer: "Free delivery for orders above ₹300." },

  // 61-100 Menu / Items
  { question: "What drinks do you serve?", answer: "Drinks: Cold Drink, Coffee, Lemonade, Smoothies, Tea." },
  { question: "List all fast food items.", answer: "Fast food: Pizza, Burger, Sandwich, Taco, Fries." },
  { question: "What are the vegetarian options?", answer: "Veg Pizza, Veg Salad, Caesar Salad, Veggie Wrap." },
  { question: "Do you serve vegan meals?", answer: "Yes, vegan meals and drinks are available." },
  { question: "What are the desserts?", answer: "Desserts: Donuts, Cakes, Shakes." },
  { question: "Are gluten-free options available?", answer: "Yes, gluten-free meals on request." },
  { question: "List signature dishes.", answer: "Signature: Sushi Platter, Fusion Pizza, Chicken Alfredo Pasta." },
  { question: "What’s in the salad menu?", answer: "Salads: Caesar, Veg, Chicken, Fruit Salad." },
  { question: "What combos do you offer?", answer: "Combos: Pizza+Drink, Burger+Fries+Drink, Sushi+Drink." },
  { question: "Any breakfast combos?", answer: "Breakfast: Pancake+Juice, Sandwich+Coffee." },
  { question: "Kid’s menu?", answer: "Kid’s meals: Small Burger, Pasta, Juice." },
  { question: "Do you serve hot beverages?", answer: "Yes, Coffee, Tea, Hot Chocolate." },
  { question: "Do you have smoothies?", answer: "Yes, Mango, Strawberry, Banana Smoothies." },
  { question: "Are drinks both cold and hot?", answer: "Yes, we serve hot and cold drinks." },
  { question: "Can I get extra toppings?", answer: "Yes, extra toppings available on Pizza/Salad." },
  { question: "Do you provide catering?", answer: "Yes, catering services available for events." },
  { question: "Is contactless delivery available?", answer: "Yes, contactless delivery is available." },
  { question: "Can I pre-order for weekend?", answer: "Yes, pre-orders are allowed." },
  { question: "Do you have meal plans?", answer: "Weekly meal plans are available." },
  { question: "Can I order for more than 1 person?", answer: "Yes, multiple orders allowed." },
  
  // 101-150 Orders, delivery, payment
  { question: "Do you deliver on weekends?", answer: "Yes, every day including weekends." },
  { question: "Delivery time?", answer: "Usually 30-45 minutes." },
  { question: "Delivery area?", answer: "Within 5 km radius of FusionX." },
  { question: "Extra delivery charges?", answer: "Orders below ₹200 may have delivery charges ₹20-₹50." },
  { question: "Can I schedule delivery?", answer: "Yes, via app scheduling feature." },
  { question: "Payment modes?", answer: "Cash, Card, UPI, Wallet accepted." },
  { question: "Can I cancel order?", answer: "Yes, before preparation starts." },
  { question: "Can I reorder previous items?", answer: "Yes, use 'Reorder' button in history." },
  { question: "Do you accept cash on delivery?", answer: "Yes, COD is available." },
  { question: "Is express delivery available?", answer: "Yes, for nearby locations." },
  { question: "How to contact support?", answer: "Via 'Contact Us' section in the app." },
  { question: "Can I apply coupons?", answer: "Add code at checkout to apply discount." },
  { question: "Are loyalty points available?", answer: "Yes, points earned for every order." },
  { question: "Do you offer corporate lunch?", answer: "Yes, corporate lunch packages offered." },
  { question: "Can I book tables?", answer: "Yes, table booking via app." },
  { question: "Are meals hygienic?", answer: "All meals prepared under strict hygiene standards." },
  { question: "Can I request custom dessert?", answer: "Yes, available on request." },
  { question: "Can I customize my salad?", answer: "Yes, toppings can be customized." },
  { question: "Do you have spicy options?", answer: "Yes, dishes can be made spicy." },
  { question: "Do you provide nutrition info?", answer: "Yes, displayed in app for all items." },

  // 151-200 Misc / repeated for variety
  { question: "Are breakfast items available?", answer: "Yes, from 8 AM to 11 AM." },
  { question: "Do you serve vegan desserts?", answer: "Yes, vegan desserts available." },
  { question: "Are sugar-free drinks available?", answer: "Yes, sugar-free drinks available." },
  { question: "Do you provide organic ingredients?", answer: "Yes, some ingredients are organic." },
  { question: "Can I pre-order desserts?", answer: "Yes, via app." },
  { question: "Do you have daily specials?", answer: "Yes, displayed on home page." },
  { question: "Are there festive combos?", answer: "Yes, festive combos available." },
  { question: "Do you have lunch combos?", answer: "Yes, main dish + drink combos." },
  { question: "Are there student meal deals?", answer: "Yes, student deals offered daily." },
  { question: "Can I get takeaway?", answer: "Yes, takeaway available." },
  { question: "Can I add extra cheese?", answer: "Yes, ₹50 extra cheese." },
  { question: "Do you have high-protein meals?", answer: "Yes, protein-rich meals are available." },
  { question: "Are beverages included in combos?", answer: "Yes, most combos include a drink." },
  { question: "Do you serve lunch specials?", answer: "Yes, 12 PM - 3 PM." },
  { question: "Are gluten-free drinks available?", answer: "Yes, on request." },
  { question: "Do you provide catering packages?", answer: "Yes, for parties or events." },
  { question: "What are the chef’s specials?", answer: "Today's chef special: Spicy Chicken Tacos." },
  { question: "Do you offer combo packs for meals?", answer: "Yes, main course + drink combo packs available." },
  { question: "hi", answer: "👋 Hello! Welcome to FusionXCanteen. How can I help you today?" },
  { question: "hello", answer: "😊 Hi there! I'm your FusionXCanteen AI Assistant." },
  { question: "hey", answer: "Hey! 🙌 How’s your day going?" },
  { question: "good morning", answer: "🌞 Good Morning! Ready for some tasty food?" },
  { question: "good afternoon", answer: "☀️ Good Afternoon! Need a meal or snack?" },
  { question: "good evening", answer: "🌆 Good Evening! Hungry for dinner or snacks?" },
  { question: "good night", answer: "🌙 Good Night! We’ll be here for you tomorrow too." },

  // Introduction
  { question: "who are you", answer: "🤖 I'm FusionXCanteen's AI Bot, here to help with food, drinks, offers, and orders!" },
  { question: "your introduction", answer: "Hi, I'm FusionXCanteen AI Assistant 🚀. I help you explore menus, track orders, and find offers." },
  { question: "what is your name", answer: "You can call me FusionBot 🤖!" },
  { question: "what can you do", answer: "I can help you with 🍕 food menus, 🥤 drinks, 💰 offers, and 🚚 order tracking." },

  // Small Talk
  { question: "how are you", answer: "I'm doing great, thanks for asking! 🤗 How about you?" },
  { question: "i am fine", answer: "That’s awesome! Let’s make your day better with food 🍔🍕🥤" },
  { question: "thank you", answer: "You're welcome! 🙏 Happy to help." },
  { question: "thanks", answer: "Anytime! 😊 Enjoy your meal." },
  { question: "bye", answer: "Goodbye 👋 Have a tasty day!" },
  { question: "goodbye", answer: "See you soon! 🍴 Don’t forget to check our offers." },

  // Menu Queries
  { question: "show me food", answer: "🍔 Available Food: Burger ₹99, Pizza ₹299, Pasta ₹199." },
  { question: "show me drinks", answer: "🥤 Available Drinks: Coke ₹49, Lemonade ₹59, Coffee ₹79." },
  { question: "pizza", answer: "🍕 Pizza Options: Margherita ₹299, Veg ₹349, Chicken ₹399." },
  { question: "burger", answer: "🍔 Burgers: Veg ₹99, Chicken ₹149, Cheese ₹129." },
  { question: "pasta", answer: "🍝 Pasta: White Sauce ₹199, Red Sauce ₹219." },
  { question: "sandwich", answer: "🥪 Sandwiches: Veg ₹79, Grilled ₹99, Club ₹129." },
  { question: "coffee", answer: "☕ Coffee: Hot ₹79, Cold ₹89, Cappuccino ₹99." },
  { question: "tea", answer: "🍵 Tea: Masala ₹49, Green Tea ₹59, Lemon Tea ₹69." },

  // Offers
  { question: "offers", answer: "💰 Today’s Offer: Buy 1 Pizza + 1 Drink Combo only ₹399!" },
  { question: "discount", answer: "🎉 You can save 20% on orders above ₹500." },
  { question: "combo", answer: "🍴 Combos: Pizza + Drink ₹399, Burger + Fries ₹149." },
  { question: "special", answer: "✨ Special this week: Weekend Platter ₹299 only!" },

  // Order Tracking
  { question: "track order", answer: "🚚 You can track your order in the Tracker section." },
  { question: "where is my order", answer: "Your order is being prepared 🍳 Please wait a few minutes." },
  { question: "order status", answer: "📦 Orders go through stages: Received → Preparing → Out for Delivery → Delivered." },
  { question: "cancel order", answer: "❌ You can cancel an order from the Tracker page before delivery." },

  // User Help
  { question: "how to login", answer: "👤 Go to Login page and enter your email & password." },
  { question: "how to signup", answer: "✍️ Use Signup page, fill your details, and start ordering!" },
  { question: "how to order", answer: "🛒 Add items to your cart and confirm your order with a mobile number." },
  { question: "how to pay", answer: "💳 Currently, pay on delivery (COD) is available." },
  { question: "contact", answer: "📞 You can contact the canteen at +91-9876543210." },
  { question: "help", answer: "I’m here to help! 😊 Ask me about menu, offers, or your order." },

  // Fun Responses
  { question: "tell me a joke", answer: "😂 Why don’t burgers tell secrets? Because they might spill the beans!" },
  { question: "are you human", answer: "Haha, no! 🤖 I’m a bot, but I love tasty food too." },
  { question: "do you eat", answer: "I don’t eat, but I recommend you try our Chicken Burger 🍔😋" },
  { question: "who made you", answer: "I was created by the FusionXCanteen dev team 👨‍💻." },
  { question: "best food", answer: "🍕 Pizza is our most loved item. Want me to show options?" },
  { question: "hungry", answer: "Same here 😅 Let’s grab something delicious from the menu!" },
  { question: "bored", answer: "How about a snack break? Food always makes things better 🍫🍟." },
  
  { question: "What is the price of sushi?", answer: "Sushi costs ₹250 per serving." },
  { question: "What is the price of pizza?", answer: "Pizza starts at ₹299 depending on type." },
  { question: "How much does a burger cost?", answer: "Burgers are priced between ₹150 to ₹250." },
  { question: "What’s the cost of salad?", answer: "Salads are priced from ₹120 to ₹180." },
  { question: "Price of noodles today?", answer: "Noodles cost ₹180 today." },
  { question: "How much is the sandwich?", answer: "Sandwiches start at ₹150." },
  { question: "Fast food item prices please.", answer: "Fast food items range from ₹100 to ₹250." },
  { question: "Price list for drinks?", answer: "Drinks are priced between ₹40 to ₹120." },
  { question: "How much is paella?", answer: "Paella costs ₹300." },
  { question: "What’s the price for donuts?", answer: "Donuts are ₹50 each." },
  { question: "How much do you charge for gift packs?", answer: "Gift packs start at ₹500." },
  { question: "Cost of delivery service?", answer: "Delivery charges depend on location, typically ₹20-₹50." },
  { question: "What’s the rate of chopsticks set?", answer: "Chopsticks set is ₹100." },
  { question: "How much for a full meal?", answer: "Full meals range from ₹250 to ₹400." },
  { question: "Give me the prices of all items.", answer: "All prices are listed in the menu section." },
  { question: "How much is your flash sale discount?", answer: "Flash sale discounts vary from 10% to 30%." },
  { question: "Price of Saturday special dishes?", answer: "Saturday specials range from ₹200 to ₹350." },
  { question: "What’s the cost of weekend specials?", answer: "Weekend specials are priced ₹250 to ₹400." },
  { question: "Cost of Monday pizza?", answer: "Monday pizza is ₹299." },
  { question: "What’s the price of Monday burger?", answer: "Monday burger is ₹180." },

  // 21-30 Today’s / Weekly Specials
  { question: "What is today’s special dish?", answer: "Today's special dish is Chicken Alfredo Pasta." },
  { question: "Tell me Saturday specials.", answer: "Saturday specials include Veg Pizza and Lemonade." },
  { question: "What’s the Monday menu?", answer: "Monday menu: Margherita Pizza, Cold Drink, Salad." },
  { question: "Weekend special dish name please.", answer: "Weekend special: Grilled Steak with Veggies." },
  { question: "Which items are on today’s offer?", answer: "Today’s offer: Burger Combo at 20% off." },
  { question: "Do you have a special meal today?", answer: "Yes, Veggie Wrap with Juice is today's special meal." },
  { question: "What’s the best pizza offer right now?", answer: "Get 1 Large Pizza + Drink for ₹399." },
  { question: "Today’s salad special?", answer: "Caesar Salad is today's salad special." },
  { question: "Any new fast food item today?", answer: "Yes, Taco Burger is newly added today." },
  { question: "Show me today’s drinks offers.", answer: "Buy 1 get 1 free on Cold Drinks today." },

  // 31-40 Offers & Deals
  { question: "What are the current offers?", answer: "Check the 'Offers' section for current deals." },
  { question: "Any flash sale running?", answer: "Yes, 10% off on selected meals until 5 PM." },
  { question: "What’s the 10.10 big sale?", answer: "Special 10.10 sale: Up to 30% off." },
  { question: "Do you have discounts on burgers?", answer: "Yes, 1+1 on selected burgers today." },
  { question: "Are there combo meals available?", answer: "Yes, combo meals are listed in the 'Meals' section." },
  { question: "What’s the delivery charge in offers?", answer: "Delivery charges may vary, usually ₹20-₹50." },
  { question: "Today’s gift pack offer?", answer: "Gift packs are at 10% discount today." },
  { question: "Are there student discounts?", answer: "Yes, students get 10% off with ID." },
  { question: "Do you have meal plans?", answer: "Yes, weekly meal plans are available." },
  { question: "Any coupon codes today?", answer: "Use code FUSION10 for 10% off." },

  // 41-50 Category-based
  { question: "List all drinks available.", answer: "Drinks: Cold Drink, Coffee, Lemonade, Pepsi, Coke, Tea, Smoothies." },
  { question: "Show me fast food items.", answer: "Fast food: Pizza, Burger, Sandwich, Taco, Fries." },
  { question: "What meals do you have?", answer: "Meals: Pasta Meal, Veg Meal, Chicken Meal, Sandwich Meal, Burger Meal." },
  { question: "All items category list?", answer: "Categories: Drinks, Fast Food, Meals, Specials." },
  { question: "Tell me vegetarian dishes.", answer: "Vegetarian: Veg Pizza, Veg Salad, Caesar Salad, Veggie Wrap." },
  { question: "What are the healthy options?", answer: "Healthy: Salads, Smoothies, Fresh Juices." },
  { question: "Give me Asian cuisine items.", answer: "Asian: Noodles Meal, Sushi, Fried Rice." },
  { question: "What’s in the salad section?", answer: "Salads: Veg Salad, Chicken Salad, Caesar Salad." },
  { question: "Drinks menu please.", answer: "Drinks: Cold Drink, Coffee, Lemonade, Smoothie, Tea." },
  { question: "Items under “Special Services”?", answer: "Special Services: Catering, Gift Packs, Event Orders." },

  // 51-60 Details / Ingredients
  { question: "What is paella made of?", answer: "Paella is made with rice, seafood, vegetables, and spices." },
  { question: "What’s in your salad?", answer: "Salads include fresh vegetables, cheese, and optional protein." },
  { question: "What type of noodles do you serve?", answer: "We serve Hakka, Veg, and Chicken Noodles." },
  { question: "Ingredients in your sandwich?", answer: "Sandwich contains bread, lettuce, tomato, cheese, and choice of protein." },
  { question: "Do you have gluten-free pizza?", answer: "Yes, gluten-free pizza is available on request." },
  { question: "Are donuts eggless?", answer: "Some donuts are eggless; check the menu labels." },
  { question: "What sauces come with burger?", answer: "Burgers come with ketchup, mayo, and mustard." },
  { question: "Is sushi vegetarian?", answer: "Yes, vegetarian sushi is available." },
  { question: "Any sugar-free drinks?", answer: "Yes, sugar-free drinks are available." },
  { question: "Are your meals hygienic?", answer: "All meals are prepared under strict hygiene standards." },

  // 61-70 Timings & Delivery
  { question: "What are your opening hours?", answer: "We are open from 10 AM to 10 PM." },
  { question: "What time does FusionX close?", answer: "FusionX closes at 10 PM daily." },
  { question: "How fast is delivery?", answer: "Delivery usually takes 30-45 minutes." },
  { question: "Is delivery available on weekends?", answer: "Yes, we deliver every day including weekends." },
  { question: "Do you deliver salads?", answer: "Yes, salads are available for delivery." },
  { question: "How long for burger delivery?", answer: "Burgers typically arrive within 30 minutes." },
  { question: "Is express delivery available?", answer: "Yes, express delivery is available for nearby locations." },
  { question: "Do you deliver to my hostel?", answer: "Yes, we deliver to hostels within our delivery area." },
  { question: "What is the delivery area?", answer: "We deliver within 5 km radius of FusionX." },
  { question: "Are there extra charges for delivery?", answer: "Delivery charges may apply for orders below ₹200." },

  // 71-80 Orders & Combos
  { question: "Can I order pizza and burger together?", answer: "Yes, you can order multiple items in one order." },
  { question: "Do you have a sandwich combo?", answer: "Yes, sandwich combos are available with drinks." },
  { question: "Is there a sushi meal deal?", answer: "Yes, sushi meal combos are available." },
  { question: "Can I customize my salad?", answer: "Yes, you can customize your salad toppings." },
  { question: "How to add extra toppings on pizza?", answer: "Select toppings when ordering pizza online or in-app." },
  { question: "Can I pre-order for Saturday?", answer: "Yes, pre-orders are allowed for weekends." },
  { question: "How to schedule a delivery?", answer: "Use the app’s delivery schedule feature to set a time." },
  { question: "Do you accept cash on delivery?", answer: "Yes, COD is available for all orders." },
  { question: "What payment modes are accepted?", answer: "We accept cash, UPI, and card payments." },
  { question: "Can I cancel an order?", answer: "Yes, orders can be canceled before preparation starts." },

  // 81-90 FusionX Info / Brand
  { question: "What is FusionX Canteen?", answer: "FusionX is a modern canteen offering fast food, meals, and drinks." },
  { question: "Who runs FusionX?", answer: "FusionX is managed by a professional hospitality team." },
  { question: "Where is FusionX located?", answer: "FusionX is located in your college campus area." },
  { question: "How to contact FusionX?", answer: "Contact via phone, email, or app support." },
  { question: "Is FusionX hygienic?", answer: "Yes, hygiene is our top priority." },
  { question: "Do you cater for events?", answer: "Yes, event catering is available." },
  { question: "Any membership plans?", answer: "Yes, loyalty membership offers discounts." },
  { question: "Can I book tables?", answer: "Yes, table booking is available via app." },
  { question: "Do you offer corporate lunch?", answer: "Yes, corporate lunch packages are offered." },
  { question: "Is there a loyalty program?", answer: "Yes, loyalty points are earned for each purchase." },

  // 91-100 Misc / App Use
  { question: "How to use the app?", answer: "Browse menu, select items, and place your order." },
  { question: "How to check my cart?", answer: "Click the cart icon on the top right to see your cart." },
  { question: "How to apply coupons?", answer: "Add coupon code at checkout to apply discounts." },
  { question: "Where to see today’s menu?", answer: "Today's menu is displayed on the home page." },
  { question: "How to view previous orders?", answer: "Check your order history in the profile section." },
  { question: "How to contact support?", answer: "Use the 'Contact Us' section in the app." },
  { question: "How to see nutrition info?", answer: "Click on an item to view nutrition details." },
  { question: "Where can I find the fast food section?", answer: "Fast food section is accessible via the home page categories." },
  { question: "How to join FusionX team?", answer: "Check 'Careers' section on the app or website." },
  { question: "Does FusionX have vegetarian only?", answer: "Yes, vegetarian-only options are available." },

  // 101-150 (additional predefined questions for full 150)
  { question: "Do you have vegan options?", answer: "Yes, we provide vegan meals and drinks." },
  { question: "What are the kid’s meal options?", answer: "Kid’s meals include small burgers, pasta, and juice." },
  { question: "Are there gluten-free meals?", answer: "Yes, gluten-free options are available on request." },
  { question: "Do you offer combo drinks?", answer: "Yes, drinks can be added to meal combos." },
  { question: "Is there a lunch special?", answer: "Yes, lunch specials are served from 12 PM to 3 PM." },
  { question: "Are desserts available?", answer: "Yes, desserts include donuts, cakes, and shakes." },
  { question: "Can I order online?", answer: "Yes, place your order through the app or website." },
  { question: "Are there discounts for bulk orders?", answer: "Yes, bulk orders above ₹1000 get 10% off." },
  { question: "Do you provide catering for parties?", answer: "Yes, catering services are available for events." },
  { question: "Are there seasonal offers?", answer: "Yes, seasonal offers are listed in the app." },
  { question: "What’s the best seller?", answer: "Best sellers include Margherita Pizza, Cold Drink, and Veg Salad." },
  { question: "Can I track my delivery?", answer: "Yes, real-time delivery tracking is available." },
  { question: "Do you have spicy options?", answer: "Yes, dishes can be made spicy on request." },
  { question: "Are beverages included in combos?", answer: "Yes, most combos include a beverage." },
  { question: "Do you serve breakfast?", answer: "Yes, breakfast menu is available from 8 AM to 11 AM." },
  { question: "Can I request extra cheese?", answer: "Yes, extra cheese can be added for ₹50." },
  { question: "What are the payment options?", answer: "Cash, Card, UPI, and Wallet payments are accepted." },
  { question: "Can I schedule order for later?", answer: "Yes, schedule delivery through the app." },
  { question: "Do you offer contactless delivery?", answer: "Yes, contactless delivery is available." },
  { question: "Are there sugar-free desserts?", answer: "Yes, sugar-free dessert options are available." },
  { question: "Do you provide vegan desserts?", answer: "Yes, vegan desserts are available." },
  { question: "What is the calorie info?", answer: "Calorie info is provided for all menu items." },
  { question: "Do you have kid-friendly drinks?", answer: "Yes, juice boxes and smoothies are kid-friendly." },
  { question: "Are there daily specials?", answer: "Yes, daily specials are displayed on the home page." },
  { question: "Can I pre-order for the weekend?", answer: "Yes, pre-orders for weekend specials are allowed." },
  { question: "What are the signature dishes?", answer: "Signature dishes include Sushi Platter and Fusion Pizza." },
  { question: "Do you have combo discounts?", answer: "Yes, combos offer discounts up to 20%." },
  { question: "Can I modify my order?", answer: "Yes, order modifications are allowed before preparation." },
  { question: "Do you provide gift vouchers?", answer: "Yes, gift vouchers are available." },
  { question: "Are there gluten-free drinks?", answer: "Yes, gluten-free drink options are available." },
  { question: "Do you have organic options?", answer: "Yes, some ingredients are organic." },
  { question: "Are there loyalty points for orders?", answer: "Yes, loyalty points are awarded for each purchase." },
  { question: "Can I reorder previous items?", answer: "Yes, use the 'Reorder' button in order history." },
  { question: "Do you have vegan snacks?", answer: "Yes, vegan snacks are available." },
  { question: "Are there combo packs for meals?", answer: "Yes, combo packs include main course and drinks." },
  { question: "Do you serve beverages hot or cold?", answer: "Both hot and cold beverages are available." },
  { question: "Can I add extra toppings to salad?", answer: "Yes, extra toppings can be added to any salad." },
  { question: "Do you have seasonal fruits?", answer: "Yes, seasonal fruits are served in salads and smoothies." },
  { question: "What’s the chef’s special?", answer: "Chef’s special today is Spicy Chicken Tacos." },
  { question: "Can I get takeaway?", answer: "Yes, takeaway orders are available." },
  { question: "Do you have catering packages?", answer: "Yes, catering packages are available for groups." },
  { question: "Are there student meal deals?", answer: "Yes, student meal deals are offered daily." },
  { question: "Do you serve breakfast combos?", answer: "Yes, breakfast combos are available until 11 AM." },
  { question: "Can I get meals delivered outside campus?", answer: "Delivery is only within 5 km radius." },
  { question: "Are there vegetarian desserts?", answer: "Yes, vegetarian desserts are available." },
  { question: "Do you have sugar-free drinks?", answer: "Yes, sugar-free drink options are available." },
  { question: "Can I cancel scheduled orders?", answer: "Yes, scheduled orders can be canceled before preparation." },
  { question: "Do you offer loyalty discounts?", answer: "Yes, loyalty discounts apply automatically." },
  { question: "Are there combo meals for lunch?", answer: "Yes, lunch combos include main dish and drink." },
  { question: "Do you provide nutrition info for meals?", answer: "Yes, nutrition info is displayed in the app." },
  { question: "Can I request a custom dessert?", answer: "Yes, custom desserts are available on request." },
  { question: "Do you have gluten-free meals?", answer: "Yes, gluten-free meals are available on request." },
  { question: "Are there beverages with zero sugar?", answer: "Yes, zero-sugar beverages are available." },
  { question: "Do you have protein-rich meals?", answer: "Yes, high-protein meals are available." },
  { question: "Can I order combo for delivery?", answer: "Yes, combos can be ordered for delivery." },
  { question: "Are there seasonal discounts?", answer: "Yes, seasonal discounts are listed in the offers section." },
  { question: "Do you have vegan drinks?", answer: "Yes, vegan drink options are available." },
  { question: "Can I pre-order desserts?", answer: "Yes, desserts can be pre-ordered via app." },
  { question: "Do you serve hot beverages in winter?", answer: "Yes, hot drinks are served year-round." },
  { question: "Do you have customized meal plans?", answer: "Yes, customized meal plans are available for regular customers." },
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

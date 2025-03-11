const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
console.log("User routes loaded ✅");
const app = express(); // Initialise express app
app.use(express.json()); // Json data
app.use(cors()); // To communicate with react server enable cors origin req

dotenv.config();

console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to Shoporia API!");
});

// API Routes (This will prepand .api/users in all our user routes)
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 5yGj53ltJc3x5ddz

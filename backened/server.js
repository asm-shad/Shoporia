const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 5yGj53ltJc3x5ddz

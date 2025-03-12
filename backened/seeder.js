const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const Product = require("./models/Product");
const products = require("./data/products");
const Cart = require("./models/Cart");

dotenv.config();

// connect to mongodb
mongoose.connect(process.env.MONGO_URI);

// Function to seed data
const seedData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    // Create a default admin User
    const createdUser = await User.create({
      name: "Jeny",
      email: "jeny@gmail.com",
      password: "jeny123",
      role: "admin",
    });

    //  Assign the default user ID TO EACH product
    const userID = createdUser._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    // insert the products into the database
    await Product.insertMany(sampleProducts);
    console.log("Product data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding the data: ", error);
    process.exit(1);
  }
};

seedData();

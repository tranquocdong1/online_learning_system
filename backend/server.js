const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./src/config/database");

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Online Learning System API" });
});

// Test database connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

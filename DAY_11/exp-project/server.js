require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authMiddleware = require("./middlewares/authMiddleware");

const productRouter = require("./Routes/products");
const authRoutes=require("./Routes/auth");


const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello Express!" });
});


app.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "You are logged in!", user: req.user });
});

app.use("/products", productRouter);
app.use("/auth",authRoutes);

// Start server on port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

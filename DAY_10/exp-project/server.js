const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const productRouter = require("./Routes/products");

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

app.use("/products", productRouter);

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

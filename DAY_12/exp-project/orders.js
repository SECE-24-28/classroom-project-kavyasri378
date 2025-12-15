const express = require("express");
const Order = require("../models/Order");
const Cart = require("../models/Cart");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

/* ➤ Place Order */
router.post("/", authMiddleware, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const totalAmount = cart.items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const order = await Order.create({
    userId: req.user.id,
    items: cart.items,
    totalAmount
  });

  await Cart.findOneAndDelete({ userId: req.user.id });

  res.json({ message: "Order placed successfully", order });
});

/* ➤ Get user orders */
router.get("/", authMiddleware, async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
});

module.exports = router;

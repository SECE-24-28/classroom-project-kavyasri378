const express = require("express");
const Cart = require("../models/Cart");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

/* ➤ Get user cart */
router.get("/", authMiddleware, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  res.json(cart || { items: [] });
});

/* ➤ Add / Update cart */
router.post("/", authMiddleware, async (req, res) => {
  const { item } = req.body;

  let cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    cart = await Cart.create({
      userId: req.user.id,
      items: [{ ...item, qty: 1 }]
    });
  } else {
    const existing = cart.items.find(i => i.product_id === item.product_id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.items.push({ ...item, qty: 1 });
    }
    await cart.save();
  }

  res.json({ message: "Item added to cart" });
});

/* ➤ Clear cart */
router.delete("/", authMiddleware, async (req, res) => {
  await Cart.findOneAndDelete({ userId: req.user.id });
  res.json({ message: "Cart cleared" });
});

/* ➤ Update quantity (+ / -) */
router.put("/update", authMiddleware, async (req, res) => {
  const { product_id, delta } = req.body;

  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) return res.status(404).json({ error: "Cart not found" });

  const item = cart.items.find(
    (i) => i.product_id === product_id
  );

  if (!item) return res.status(404).json({ error: "Item not found" });

  // 🔥 THIS IS THE KEY
  item.qty = Math.max(1, item.qty + delta);

  await cart.save();

  res.json({ message: "Quantity updated", item });
});

/* ➤ Remove single item from cart */
router.delete("/item/:product_id", authMiddleware, async (req, res) => {
  const { product_id } = req.params;

  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) {
    return res.status(404).json({ error: "Cart not found" });
  }

  // 🔥 remove only that product
  cart.items = cart.items.filter(
    (item) => item.product_id !== product_id
  );

  await cart.save();

  res.json({ message: "Item removed from cart" });
});

module.exports = router;

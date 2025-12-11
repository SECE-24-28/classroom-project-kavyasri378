/*const express = require("express");
const fs = require("fs");
const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  const products = JSON.parse(fs.readFileSync("data/products.json"));
  res.json(products);
});

// GET product by ID
router.get("/:id", (req, res) => {
  const products = JSON.parse(fs.readFileSync("products.json"));

  const product = products.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

// DELETE product
router.delete("/:id", (req, res) => {
  const products = JSON.parse(fs.readFileSync("products.json"));

  const updatedProducts = products.filter((p) => p.id !== parseInt(req.params.id));

  fs.writeFileSync("products.json", JSON.stringify(updatedProducts, null, 2));

  res.json({ message: "Product deleted successfully" });
});

// ADD product
router.post("/", (req, res) => {
  const products = JSON.parse(fs.readFileSync("products.json"));

  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
  };

  products.push(newProduct);

  fs.writeFileSync("products.json", JSON.stringify(products, null, 2));

  res.status(201).json({ message: "Product added successfully" });
});

module.exports = router;*/

const express = require("express");
const fs = require("fs"); //file system
const router = express.Router();

router.get("/", (req, res) => {
  const products = fs.readFileSync("data/products.json");
  res.json(JSON.parse(products));
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);

  const products = fs.readFileSync("data/products.json");
  const productsJSON = JSON.parse(products);

  const product = productsJSON.find((prod) => {
    return prod.id === parseInt(req.params.id);
  });

  if (product === undefined) {
    res.status(404).json({ error: "Product Not Found" });
  } else {
    res.json(product);
  }
});

router.delete("/:id", (req, res) => {
  const products = fs.readFileSync("data/products.json");
  const updatedProducts = JSON.parse(products).filter((p) => {
    return p.id !== parseInt(req.params.id);
  });

  fs.writeFileSync(
    "data/products.json",
    JSON.stringify(updatedProducts, null, 2)
  );
  res.json({ message: "Product deleted successfully!!" });
});

router.post("/", (req, res) => {
  const products = JSON.parse(fs.readFileSync("data/products.json"));
  const newProduct = {
    id: products[products.length - 1].id + 1,
    name: req.body.name,
    originalPrice: req.body.originalPrice,
    sellingPrice: req.body.sellingPrice,
    image: req.body.image,
  };

  const updatedProducts = [...products, newProduct];
  fs.writeFileSync(
    "data/products.json",
    JSON.stringify(updatedProducts, null, 2)
  );
  res.status(201).json({ message: "Product created successfully" });
});


module.exports = router

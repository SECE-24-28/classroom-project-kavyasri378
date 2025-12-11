const express = require("express");
const fs = require("fs"); //file system
const router = express.Router();
// blogss

router.get('/',(req,res)=>{
    const blogs = fs.readFileSync("data/blogs.json")
    res.json(JSON.parse(blogs));
})

router.get("/:id",(req,res) => {
    console.log(req.params.id);

    const blogs = fs.readFileSync("data/blogs.json")
    const blogsJSON = JSON.parse(blogs)

    const blog = blogsJSON.find((b) => {
        return b.id === parseInt(req.params.id)
    })

    if(blog === undefined)
    {
        res.status(404).json({error : "Blog Not Found"})
    }else{
        res.json(blog)
    }
})

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
router.delete('/:id',(req,res) => {
    const blogs = fs.readFileSync("data/blogs.json")
    const updatedBlogs = JSON.parse(blogs).filter((b) => {
        return b.id !== parseInt(req.params.id)
    })

    fs.writeFileSync('data/blogs.json',JSON.stringify(updatedBlogs,null,2));
    res.json({message : "BlogPost deleted successfully!!"})
})

module.exports = router;
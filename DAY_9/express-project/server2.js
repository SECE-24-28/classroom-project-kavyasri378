const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// ---------------- PRODUCTS API ----------------

// GET products
app.get('/products', (req, res) => {
    fs.readFile('./data/products.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send('Error reading products file')
        res.json(JSON.parse(data))
    })
})

// POST product
app.post('/products', (req, res) => {
    console.log("Received body:", req.body)

    const newProduct = req.body

    if (!newProduct || Object.keys(newProduct).length === 0) {
        return res.status(400).send("Invalid product data")
    }

    fs.readFile('./data/products.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send('Error reading products file')

        const products = JSON.parse(data)
        products.push(newProduct)

        fs.writeFile('./data/products.json', JSON.stringify(products, null, 2), err => {
            if (err) return res.status(500).send('Error writing products file')
            res.status(201).send('Product added successfully')
        })
    })
})


// ---------------- CART API ----------------

// GET cart
app.get('/cart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send('Error reading cart file')
        res.json(JSON.parse(data))
    })
})

// POST cart
app.post('/cart', (req, res) => {
    const newItem = req.body
    fs.readFile('./data/cart.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send('Error reading cart file')
        const cart = JSON.parse(data)
        cart.push(newItem)
        fs.writeFile('./data/cart.json', JSON.stringify(cart, null, 2), err => {
            if (err) return res.status(500).send('Error writing cart file')
            res.status(201).send('Cart updated successfully')
        })
    })
})

// ---------------- SERVER ----------------
app.listen(3000, () => {
    console.log('✅ Server running on http://localhost:3000')
})

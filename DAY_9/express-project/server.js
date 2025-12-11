// const http = require('http');

// const server = http.createServer((req,res) => {
//     if(req.method === 'GET' && req.url ==='/')
//     {
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({message : "Hello"}));
//     }
//     else if(req.method === 'GET' && req.url==='/about')
//     {
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({message : "About"}));
//     }
//     else{
//         res.writeHead(404, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({message : "Not found"}));
//     }
// });

// server.listen(3000, () => {
//     console.log(Server running at http://localhost:3000)
// })


const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())
const productRouter=require("./Routes/products.js");
const blogRouter=require("./Routes/Blogs.js")

// Middleware - process between req and res
app.use((req,res,next) =>
{
    console.log(`${req.method} ${req.url}`)
    next();
})

app.get("/",(req,res) => {
    res.json({message : "Hello Express!"});
});

app.get("/about",(req,res) => {
    res.json({message : "About"});
});
app.use("/products",productRouter);
app.use("/Blogs",blogRouter);

app.listen(3000,() => {
    console.log("Server running at http://localhost:3000")

});
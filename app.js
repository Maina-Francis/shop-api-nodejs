const express = require("express"); //import express from express
const app = express(); //spin up express

//products routes
const productRoutes = require("./api/routes/products");

app.use("/products", productRoutes);

module.exports = app;

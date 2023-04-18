const express = require("express"); //import express from express
const app = express(); //spin up express

app.use((req, res, next) => {
  res.status(200).json({
    message: "It works!",
  });
});

module.exports = app;

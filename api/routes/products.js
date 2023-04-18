const express = require("express");

const router = express.Router();

// get requests route
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling Get Requests to /products",
  });
});

// post requests route
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling Post Requests to /products",
  });
});

module.exports = router;

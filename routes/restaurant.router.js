const express = require("express");
const router = express.Router();
const Restaurant = require("../controllers/restaurant.controller");

//Create a new restaurant
//http://localhost:5000/restaurant
router.post("/restaurant", async (req, res) => {
  try {
    const newRestaurant = req.body;
    const createReataurant = await Restaurant.createReataurant(newRestaurant);
    res.status(201).json(createReataurant);
  } catch (error) {
    res.status(500).json({error:"Failed to create restaurant"})
  }
});

module.exports = router;
const Restaurant = require("../models/restaurant.model");

//insert Date
Restaurant.createReataurant = async(newRestaurant) => {
    try {
        const createRestaurant = await Restaurant.create(newRestaurant);
        console.log("created restaurant: ", createRestaurant.toJSON());
    } catch (error) {
        console.log("err", err);
        throw err;
    }
}

module.exports = Restaurant;
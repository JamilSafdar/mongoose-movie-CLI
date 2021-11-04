const Movie = require("./movie.model");
const mongoose = require('mongoose');

exports.addMovie = async (movieObj) => {
    try {
        const movie = new Movie(movieObj);
        await movie.save();
        mongoose.disconnect();
        console.log("Movie successfully added to db");
    } catch (error) {
        console.log(error)
    } 
}
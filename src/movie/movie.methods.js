const Movie = require("./movie.model");
const mongoose = require("mongoose");

exports.addMovie = async (movieObj) => {
  try {
    const movie = new Movie(movieObj);
    await movie.save();
    mongoose.disconnect();
    console.log("Movie successfully added to db");
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    const list = await Movie.find();
    console.log(list);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

const Movie = require("./movie.model");
const mongoose = require("mongoose");
const { title } = require("process");

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

exports.deleteMovie = async () => {
  try {
    await Movie.deleteOne();
    mongoose.disconnect();
    console.log("successfully deleted movie");
  } catch (error) {
    console.log(error);
  }
};

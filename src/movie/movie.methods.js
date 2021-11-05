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

exports.deleteMovie = async (deleteObj) => {
  try {
    await Movie.deleteOne({ title: deleteObj.filter });
    mongoose.disconnect();
    console.log("successfully deleted movie");
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (updateObj) => {
  try {
    const update = await Movie.updateOne(
      { title: updateObj.filter },
      { $set: { rating: updateObj.rating, genre: updateObj.genre } },

    );
    console.log(update);
    mongoose.disconnect();
    console.log("successfully updated movie");
  } catch (error) {
    console.log(error);
  }
};
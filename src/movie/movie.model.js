const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },

  actor: {
    type: String,
  },

  rating: {
    type: Number,
  },

  genre: {
    type: String,
    
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

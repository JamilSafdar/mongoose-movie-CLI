require("./db/connection");
const yargs = require("yargs");
const { addMovie, listMovies, deleteMovie, updateMovie } = require("./movie/movie.methods");
const command = process.argv[2];

const app = () => {
  if (command === "add") {
    addMovie({ title: yargs.argv.title, actor: yargs.argv.actor });

  } else if (command === "list") {
    listMovies();

  } else if (command === "delete") {
    deleteMovie({ filter: yargs.argv.title });

  } else if (command === "update") {
    const updateObj = {
      filter: yargs.argv.title,
      rating: yargs.argv.rating,
      genre: yargs.argv.genre
    };
    updateMovie(updateObj);
  }
};
app();
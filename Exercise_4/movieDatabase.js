/* create a movie db as an array of objects with properties name, rating and hasWatched and make a print out*/

let movies = [
  {
    name: "How to get away with Murder",
    rating: 9,
    hasWatched: true,
  },
  {
    name: "Suits",
    rating: 8,
    haswatched: false,
  },
  {
    name: "Empress",
    rating: 5,
    hasWatched: true,
  },
];

for (let movie of movies) {
  if (movie.hasWatched === true) {
    console.log(`You have watched "${movie.name}" - ${movie.rating} stars`);
  } else {
    console.log(`You have not watched "${movie.name}" - ${movie.rating} stars`);
  }
}

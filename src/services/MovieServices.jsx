const url = "https://movies-server-5id8.onrender.com/movies";

export const getAllMovies = () => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => setMovies(data))
    .catch((err) => {
      console.log(err);
      console.log("Failed to load movies");
    });
};

export const getOneMovie = (id) => {
  return fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((data) => setMovie(data))
    .catch((err) => {
      console.log(err);
      console.log("Failed to load movie");
    });
};

export const createMovie = (movie) => {
  return fetch("https://movies-server-5id8.onrender.com/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  }).catch((err) => {
    console.log(err);
    console.log("Can't create the movie");
  });
};

export const editMovie = (id, movie) => {
  return fetch(`https://movies-server-5id8.onrender.com/movies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  }).catch((err) => {
    console.log(err);
    console.log("Can't edit the movie");
  });
};

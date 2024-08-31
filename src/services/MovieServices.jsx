const url = "https://movies-server-5id8.onrender.com/movies";

export async function getAllMovies(movieType) {
  const res = await fetch(url);

  let data = await res.json();

  if (movieType) {
    if(movieType == "tv-series") {
      movieType = "TV Series"
    } else if (movieType == "movies") {
      movieType = "Movie"
    }

    let movies = data.filter((x) => x.type == movieType).reverse();
    return movies;
  }

  return data.reverse();
}

export const getOneMovie = (id) => {
  return fetch(`${url}/${id}`)
    .then((res) => res.json())
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

export const deleteMovie = (id) => {
  return fetch(`https://movies-server-5id8.onrender.com/movies/${id}`, {
    method: "DELETE"
  }).catch((err) => {
    console.log(err);
    console.log("Can't edit the movie");
  });
};

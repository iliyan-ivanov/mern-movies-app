import { useContext, useEffect, useState } from "react";
import { getAllMovies } from "../../services/MovieServices";
import { ThemeContext } from "../../contexts/ThemeContext";
import MovieCard from "../MovieCard/MovieCard";
import "./HomePage.css";

const HomePage = () => {
  const [ movies, setMovies ] = useState();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    getAllMovies()
      .then(data => setMovies(data))
  }, [])
  return (
    <main
      className={
        theme == "light" ? "movies-light movies" : "movies-dark movies"
      }
    >
      {movies 
       ? movies?.map((x) => (
        <MovieCard img={x.imageUrl} key={x._id} id={x._id} />
      ))
       : <div style={{color: theme === "light" ? "black" : "white"}}>Loading movies ...</div>
       }
    </main>
  );
};

export default HomePage;

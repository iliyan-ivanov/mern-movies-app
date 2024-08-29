import { useContext, useEffect, useState } from "react";
import { getAllMovies } from "../../services/MovieServices";
import { ThemeContext } from "../../contexts/ThemeContext";
import MovieCard from "../MovieCard/MovieCard";
import { useParams } from "react-router-dom";

const TypesPage = () => {
  const [ movies, setMovies ] = useState();
  const { theme } = useContext(ThemeContext);
  const { type } = useParams();

  useEffect(() => {
    getAllMovies(type)
      .then(data => setMovies(data))
  }, [type]);
  
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
       : <div>Loading movies ...</div>
       }
    </main>
  );
};

export default TypesPage;
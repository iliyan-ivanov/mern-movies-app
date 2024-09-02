import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ColorRing } from 'react-loader-spinner';
import { getAllMovies } from "../../services/MovieServices";
import { ThemeContext } from "../../contexts/ThemeContext";
import MovieCard from "../MovieCard/MovieCard";

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
      {movies ? (
        movies?.map((x) => (
          <MovieCard img={x.imageUrl} key={x._id} id={x._id} />
        ))
      ) : (
        <article className="loading-spinner">
          <div style={{ color: theme === "light" ? "black" : "white" }}>
            Loading movies ...
          </div>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </article>
      )}
    </main>
  );
};

export default TypesPage;
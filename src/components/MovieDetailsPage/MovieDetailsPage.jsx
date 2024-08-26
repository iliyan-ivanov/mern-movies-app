import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getOneMovie } from "../../services/MovieServices";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./MovieDetailsPage.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    getOneMovie(id).then((data) => setMovie(data));
  }, []);

  return (
    <main
      className="movie-details-page"
      style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <section className="movie-details-page-info">
        <article className="movie-details-page-img">
          <img src={movie?.imageUrl} alt="Movie poster" />
        </article>
        <article className="movie-details-page-content">
          <div className="movie-details-page-lists">
            <ul className="movie-info">
              <li className="movie-details-page-heading">{movie?.title}</li>
              <li>Director: {movie?.director}</li>
              <li>Released: {movie?.premiereYear}</li>
              <li>Category: {movie?.category}</li>
              <li>Type: {movie?.type}</li>
            </ul>
            <ul className="movie-details-page-btns">
              <li>
                <Link>Edit</Link>
              </li>
              <li>
                <Link>Delete</Link>
              </li>
            </ul>
          </div>
          <div className="movie-trailer">
            <iframe
              width="540"
              height="300"
              allowFullScreen="allowFullScreen"
              src={movie?.videoUrl}
            ></iframe>
          </div>
        </article>
      </section>
      <section>
        <p className="movie-description">{movie?.description}</p>
      </section>
    </main>
  );
};

export default MovieDetailsPage;

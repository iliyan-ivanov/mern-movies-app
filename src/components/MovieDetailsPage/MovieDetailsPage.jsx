import { Link } from "react-router-dom";
import "./MovieDetailsPage.css";

const MovieDetailsPage = () => {
  return (
    <main className="movie-details-page">
      <section className="movie-details-page-section">
        <article className="movie-details-page-img">
          <img
            src="https://i.ebayimg.com/images/g/ZKcAAOSwQXlcGzDu/s-l1200.jpg"
            alt="Movie poster"
          />
        </article>
        <article className="movie-details-page-content">
          <div className="movie-details-page-lists">
            <ul className="movie-info">
              <li className="movie-details-page-heading">Venom</li>
              <li>Director: Mr Director</li>
              <li>Released: 2015</li>
              <li>Category: Fantasy</li>
              <li>Type: Movie</li>
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
              allowFullScreen="true"
              src="https://www.youtube.com/embed/u9Mv98Gr5pY"
            ></iframe>
          </div>
        </article>
      </section>
      <section>
        <p>
          Some Venom description Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nisi modi provident eligendi repellendus quos odit
          adipisci quae consequatur itaque id et, cupiditate, laborum iusto
          corporis. Officiis dolorem delectus et debitis.
        </p>
      </section>
    </main>
  );
};

export default MovieDetailsPage;

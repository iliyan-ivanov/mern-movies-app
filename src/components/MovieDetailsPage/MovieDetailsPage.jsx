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
              <li>Mr Director</li>
              <li>2015</li>
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
          <p>
            Some Venom description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nisi modi provident eligendi repellendus quos odit
            adipisci quae consequatur itaque id et, cupiditate, laborum iusto
            corporis. Officiis dolorem delectus et debitis.
          </p>
          <div className="movie-trailer">
            <iframe
              
              width="540"
              height="300"
              src="https://www.youtube.com/embed/u9Mv98Gr5pY"
            ></iframe>
          </div>
        </article>
      </section>
    </main>
  );
};

export default MovieDetailsPage;

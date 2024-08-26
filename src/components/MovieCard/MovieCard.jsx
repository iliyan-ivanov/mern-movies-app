import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = (props) => {
    
  return (
    <Link to={`/movies/${props.id}`}>
      <div className="movie-card">
        <img src={props.img} alt="Movie poster" />
      </div>
    </Link>
  );
};

export default MovieCard;

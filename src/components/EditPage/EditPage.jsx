import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { editMovie, getOneMovie } from "../../services/MovieServices";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./EditPage.css";

const EditPage = () => {
      const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();

  useEffect(() => {
    getOneMovie(id)
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  }, []);

  const onEditMovie = (e) => {
    e.preventDefault();

    const [
      title,
      director,
      premiereYear,
      description,
      imageUrl,
      videoUrl,
      category,
      type
    ] = e.target;
    console.log(category);
    

    const movie = {
      title: title.value,
      director: director.value,
      premiereYear: premiereYear.value,
      description: description.value,
      imageUrl: imageUrl.value,
      videoUrl: videoUrl.value.replace("watch?v=", "embed/"),
      category: category.value,
      type: type.value
    };
    
    editMovie(id, movie).then(() => navigate(`/movies/${id}`));
  };

  return (
    <main className="create-page">
      <form
        className="content-form"
        onSubmit={onEditMovie}
        style={{
          background: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <h2>Edit Movie</h2>

        <label htmlFor="title">Title</label>
        <input type="text" name="title" defaultValue={movie.title} />

        <label htmlFor="director">Director</label>
        <input type="text" name="director" defaultValue={movie.director} />

        <label htmlFor="premiereYear">Premiere year</label>
        <input
          type="text"
          name="premiereYear"
          defaultValue={movie.premiereYear}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          defaultValue={movie.description}
        />

        <label htmlFor="imageUrl">Image url</label>
        <input type="text" name="imageUrl" defaultValue={movie.imageUrl} />

        <label htmlFor="videoUrl">Video url</label>
        <input type="text" name="videoUrl" defaultValue={movie.videoUrl} />

        <label htmlFor="category">Category</label>
        <input type="text" name="category" defaultValue={movie.category} />

        <label htmlFor="fomrat">Type</label>
        <input type="text" name="type" defaultValue={movie.type} />

        <button type="submit" className="create-btn">
          Edit
        </button>
      </form>
    </main>
  );
};

export default EditPage;

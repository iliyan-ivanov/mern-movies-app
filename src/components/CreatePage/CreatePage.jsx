import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { createMovie } from "../../services/MovieServices";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./CreatePage.css";

const CreatePage = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const onCreateMovie = (e) => {
    e.preventDefault();

    const [
      title,
      director,
      premiereYear,
      description,
      imageUrl,
      videoUrl,
      category,
      type,
    ] = e.target;

    const movie = {
      title: title.value,
      director: director.value,
      premiereYear: premiereYear.value,
      description: description.value,
      imageUrl: imageUrl.value,
      videoUrl: videoUrl.value.replace("watch?v=", "embed/"),
      category: category.value,
      type: type.value,
    };

    createMovie(movie).then(() => navigate("/"));
  };

  return (
    <main className="create-page">
      <form
        className="content-form"
        onSubmit={onCreateMovie}
        style={{
          background: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <h2>Create Movie</h2>

        <label htmlFor="title">Title</label>
        <input type="text" name="title" />

        <label htmlFor="director">Director</label>
        <input type="text" name="director" />

        <label htmlFor="premiereYear">Premiere year</label>
        <input type="text" name="premiereYear" />

        <label htmlFor="description">Description</label>
        <input type="text" name="description" />

        <label htmlFor="imageUrl">Image url</label>
        <input type="text" name="imageUrl" />

        <label htmlFor="videoUrl">Video url</label>
        <input type="text" name="videoUrl" />

        <label htmlFor="category">Category</label>
        <input type="text" name="category" />

        <label htmlFor="type">Type</label>
        <input type="text" name="type" />

        <button type="submit" className="create-btn">
          Create
        </button>
      </form>
    </main>
  );
};

export default CreatePage;

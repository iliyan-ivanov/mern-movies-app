import { useNavigate } from "react-router-dom";
import { createMovie } from "../../services/MovieServices";
import "./CreatePage.css";

const CreatePage = () => {
  const navigate = useNavigate();

  const onCreateMovie = (e) => {
    e.preventDefault();

    const [title, director, premiereYear, description, imageUrl, videoUrl] = e.target;

    const movie = {
      title: title.value,
      director: director.value,
      premiereYear: premiereYear.value,
      description: description.value,
      imageUrl: imageUrl.value,
      videoUrl: videoUrl.value.replace("watch?v=", "embed/")
    };

    createMovie(movie)
      .then(() => navigate("/"))
  };
  
  return (
    <main className="create-page">
      <form className="content-form" onSubmit={onCreateMovie}>
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

        <button type="submit" className="create-btn">
          Create
        </button>
      </form>
    </main>
  );
};

export default CreatePage;

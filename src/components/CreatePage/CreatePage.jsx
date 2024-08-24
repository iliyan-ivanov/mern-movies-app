import "./CreatePage.css";

const CreatePage = () => {
  
  return (
    <main className="create-page">
      <form className="content-form" >
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

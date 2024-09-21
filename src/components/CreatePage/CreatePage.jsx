import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { createMovie } from "../../services/MovieServices";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CreatePage.css";

const CreatePage = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const formik = useFormik({
    initialValues: {
      title: "",
      director: "",
      premiereYear: "",
      description: "",
      imageUrl: "",
      videoUrl: "",
      category: "",
      type: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Plese insert Title"),
      director: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Plese insert director"),
      premiereYear: Yup.number()
        .required(),
      description: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Plese insert description"),
      imageUrl: Yup.string()
        .required("Plese insert Image url"),
      videoUrl: Yup.string()
        .required("Plese insert Video url"),
      category: Yup.string()
        .required("Plese insert Category"),
      type: Yup.string()
        .required("Plese insert Type"),
    }),
    onSubmit: (values) => {
      const movie = {
        title: values.title,
        director: values.director,
        premiereYear: values.premiereYear,
        description: values.description,
        imageUrl: values.imageUrl,
        videoUrl: values.videoUrl.replace("watch?v=", "embed/"),
        category: values.category,
        type: values.type,
      };
  
      createMovie(movie).then(() => navigate("/"));
    },
  });

  return (
    <main className="create-page">
      <form
        className="content-form"
        onSubmit={formik.handleSubmit}
        style={{
          background: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <h2>Create Movie</h2>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <p className="create-page-error">{formik.errors.title}</p>
        ) : null}

        <label htmlFor="director">Director</label>
        <input
          type="text"
          name="director"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.director}
        />
        {formik.touched.director && formik.errors.director ? (
          <p className="create-page-error">{formik.errors.director}</p>
        ) : null}

        <label htmlFor="premiereYear">Premiere year</label>
        <input
          type="text"
          name="premiereYear"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.premiereYear}
        />
        {formik.touched.premiereYear && formik.errors.premiereYear ? (
          <p className="create-page-error">{formik.errors.premiereYear}</p>
        ) : null}

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <p className="create-page-error">{formik.errors.description}</p>
        ) : null}

        <label htmlFor="imageUrl">Image url</label>
        <input
          type="text"
          name="imageUrl"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageUrl}
        />
        {formik.touched.imageUrl && formik.errors.imageUrl ? (
          <p className="create-page-error">{formik.errors.imageUrl}</p>
        ) : null}

        <label htmlFor="videoUrl">Video url</label>
        <input
          type="text"
          name="videoUrl"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.videoUrl}
        />
        {formik.touched.videoUrl && formik.errors.videoUrl ? (
          <p className="create-page-error">{formik.errors.videoUrl}</p>
        ) : null}

        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
        />
        {formik.touched.category && formik.errors.category ? (
          <p className="create-page-error">{formik.errors.category}</p>
        ) : null}

        <label htmlFor="type">Type</label>
        <input
          type="text"
          name="type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.type}
        />
        {formik.touched.type && formik.errors.type ? (
          <p className="create-page-error">{formik.errors.type}</p>
        ) : null}

        <button type="submit" className="create-btn">
          Create
        </button>
      </form>
    </main>
  );
};

export default CreatePage;

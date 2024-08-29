import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Categories from "./components/Categories/Categories";
import CreatePage from "./components/CreatePage/CreatePage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/types/:type" element={<Categories />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

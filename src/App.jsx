import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import CreatePage from "./components/CreatePage/CreatePage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

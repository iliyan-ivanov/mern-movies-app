import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import TypesPage from "./components/TypesPage/TypesPage";
import CreatePage from "./components/CreatePage/CreatePage";
import EditPage from "./components/EditPage/EditPage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/types/:type" element={<TypesPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/movies/:id/edit" element={<EditPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

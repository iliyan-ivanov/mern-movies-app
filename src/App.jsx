import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

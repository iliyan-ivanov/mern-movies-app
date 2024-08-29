import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import * as FaIcons from "react-icons/fa";
import "./Header.css";

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={theme == "light" ? "navigation-light navigation" : "navigation-dark navigation"}>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/create" >Create</Link></li>
                <li><Link to="/types/movies">Movies</Link></li>
                <li><Link to="/types/tv-series">TV Series</Link></li>
                <li onClick={toggleTheme}>{theme == "light" ? <FaIcons.FaMoon /> : <FaIcons.FaSun />}</li>
            </ul>
        </nav>
    )
}

export default Header;
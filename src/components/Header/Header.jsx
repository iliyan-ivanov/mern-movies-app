import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Create</Link></li>
                <li><Link>Movies</Link></li>
                <li><Link>TV Shows</Link></li>
                <li><Link>Dark/Light Mode</Link></li>
            </ul>
        </nav>
    )
}

export default Header;
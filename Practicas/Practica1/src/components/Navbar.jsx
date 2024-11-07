import '../styles/Navbar.css';
import {Outlet, Link} from "react-router-dom";

function Navbar() {

    return (
        <nav>
            <div className="navbar-menu">
                <Link to={"/Comics"} className={"navbar-option"}>
                    Comics
                </Link>
                <Link to={"/Characters"} className={"navbar-option"}>
                    Characters
                </Link>
                <Link to={"/Series"} l className={"navbar-option"}>
                    Series
                </Link>
                <Link to={"/Stories"} className={"navbar-option"}>
                    Stories
                </Link>
                <Link to={"/Favourites"} className={"navbar-option navbar-option-favourites"}>
                    Favourites
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
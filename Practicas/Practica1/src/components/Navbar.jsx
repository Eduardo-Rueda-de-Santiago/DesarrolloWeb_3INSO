import '../styles/Navbar.css';
import {Link} from "react-router-dom";

/**
 * Navigation bar of the aplication.
 * @param searchContentSetter
 * @returns {JSX.Element}
 * @constructor
 */
function Navbar({searchContentSetter}) {

    return (
        <nav>
            <div className="navbar-menu">
                <Link to={"/"} className={"navbar-option"}>
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

                <input className={"navbar-option navbar-search"} onChange={searchContentSetter} type={"text"}
                       placeholder={"Search"}/>

                <Link to={"/Favourites"} className={"navbar-option navbar-option-favourites"}>
                    Favourites
                </Link>
            </div>
        </nav>
    );

}

export default Navbar;
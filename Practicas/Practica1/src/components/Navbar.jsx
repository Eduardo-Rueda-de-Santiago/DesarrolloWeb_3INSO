import '../styles/Navbar.css';

function Navbar() {

    return (
        <nav>
            <div className="navbar-menu">
                <label className={"navbar-option"}>
                    Comics
                </label>
                <label className={"navbar-option"}>
                    Characters
                </label>
                <label className={"navbar-option"}>
                    Series
                </label>
                <label className={"navbar-option"}>
                    Stories
                </label>
                <label className={"navbar-option navbar-option-favourites"}>
                    Favourites
                </label>
            </div>
        </nav>
    );
}

export default Navbar;
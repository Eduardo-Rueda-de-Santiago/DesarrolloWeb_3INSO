import '../styles/App.css';
import RecentComics from "./RecentComics";

function App() {
    return (
        <div className="App">
            <nav className={"App-nav"}>
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
            <RecentComics/>
        </div>
    );
}

export default App;

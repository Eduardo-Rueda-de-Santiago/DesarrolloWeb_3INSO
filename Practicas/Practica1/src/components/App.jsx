import '../styles/App.css';
import RecentComics from "./RecentComics";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";

function App() {
    return (

        <div className="App">
            <Navbar/>
            <RecentComics/>
        </div>
    );
}

export default App;

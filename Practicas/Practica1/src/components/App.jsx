import '../styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Comics from "../pages/Comics";
import Characters from "../pages/Characters";
import Series from "../pages/Series";
import Stories from "../pages/Stories";
import Favourites from "../pages/Favourites";
import NotFound from "../pages/NotFound";

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="Comics" element={<Comics/>}/>
                    <Route path="Characters" element={<Characters/>}/>
                    <Route path="Series" element={<Series/>}/>
                    <Route path="Stories" element={<Stories/>}/>
                    <Route path="Favourites" element={<Favourites/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

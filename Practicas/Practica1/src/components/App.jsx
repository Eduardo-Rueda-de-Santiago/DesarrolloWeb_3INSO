import '../styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Comics from "../pages/Comics";
import Characters from "../pages/Characters";
import Series from "../pages/Series";
import Stories from "../pages/Stories";
import Favourites from "../pages/Favourites";
import NotFound from "../pages/NotFound";
import ComicDetails from "../pages/ComicDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Comics/>}/>
                    <Route path="ComicDetails" element={<ComicDetails/>}/>
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

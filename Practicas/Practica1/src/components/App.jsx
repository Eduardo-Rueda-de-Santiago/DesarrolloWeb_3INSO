import '../styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Comics from "../pages/Comics";
import Characters from "../pages/Characters";
import Series from "../pages/Series";
import Favourites from "../pages/Favourites";
import NotFound from "../pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Comics/>}/>
                    <Route path="Characters" element={<Characters/>}/>
                    <Route path="Series" element={<Series/>}/>
                    <Route path="Favourites" element={<Favourites/>}/>ç
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

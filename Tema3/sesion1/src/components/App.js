import '../styles/App.css';
import Pong from './pongComps/Pong';
import CondicionalTernario from "./CondicionalTernario";
import ListaPersonas from "./ListaPersonas";

function App() {
    return (
        <div className="App">
            <Pong/>
            <CondicionalTernario/>
            <ListaPersonas/>
        </div>
    );
}

export default App;

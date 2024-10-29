import '../styles/App.css';
import Contacto from "./Contacto";
import Registro from "./Registro";
import Mensaje from "./Mensaje";

function App() {
    return (
        <div className="App">
            <Contacto/>
            <Registro/>
            <Mensaje/>
            {/*<PeopleList/>*/}
        </div>
    );
}

export default App;

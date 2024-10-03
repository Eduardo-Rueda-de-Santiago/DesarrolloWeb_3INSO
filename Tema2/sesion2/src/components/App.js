import '../styles/App.css';
import BotonSimple from "./BotonSimple.tsx";
import EligeBoton from "./EligeBoton";
import Suma from "./Suma.tsx";

function App() {
    return (
        <div className="App">
            <BotonSimple/>
            <EligeBoton/>
            <Suma num1={10} num2={20}/>
        </div>
    );
}

export default App;

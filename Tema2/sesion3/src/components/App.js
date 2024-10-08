import '../styles/App.css';
import Suma from "./Suma";

// ### Ejemplo de comunicación de hijo al padre
// function App() {
//
//     const handleSumaResuelta = (resultado) => {
//         console.log(`El resultado de la suma es ${resultado}`);
//
//     };
//     return (
//         <div className="App">
//             <Suma
//                 num1={10}
//                 num2={5}
//                 sumaResuelta={handleSumaResuelta}
//             />
//         </div>
//     );
// }


function App() {

    const handleSumaResuelta = (resultado) => {
        console.log(`El resultado de la suma es ${resultado}`);

    };
    return (
        <div className="App">
            <Suma
                num1={10}
                num2={5}
                sumaResuelta={handleSumaResuelta}
            />
        </div>
    );
}

export default App;

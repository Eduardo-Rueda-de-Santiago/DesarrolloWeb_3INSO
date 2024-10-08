import '../styles/App.css';
import Suma from "./Suma";
import Contador from "./Contador";
import Form from "./Form";
import {useState} from "react";
import TaskForm from "./TaskForm";
import TaskListTsx from "./TaskList.tsx";

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

// ### Ejemplo de comunicación con paso de funciones
// function App() {
//
//     const handleInformResult = (resultado) => {
//         console.log(`El contador tiene un valor de: ${resultado}`);
//
//     };
//
//     return (
//         <div className="App">
//             <Contador informResult={handleInformResult}/>
//         </div>
//     );
// }

// ### Ejemplo tansferencia de objetos.
// function App() {
//
//     const sendMethod = (data) => {
//         console.log(data);
//     }
//     return (
//         <div>
//             <Form sendMethod={sendMethod}/>
//         </div>
//     );
// }


function App() {

    const [taskList, setTaskList] = useState([]);

    const addTask = (task) => {
        setTaskList([...taskList, task]);
    }

    return (
        <div>
            <TaskForm addTask={addTask}/>
            <TaskListTsx taskList={taskList}/>
        </div>
    );
}

export default App;

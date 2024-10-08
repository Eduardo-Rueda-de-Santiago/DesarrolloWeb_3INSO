import {useState} from "react";
import Task from "./Task";

function TaskForm({addTask}) {

    const [task, setTask] = useState({
        name: '',
        description: '',
        priority: 0
    });

    const handleChange = (event, field) => {
        setTask({
            ...task,
            [field]: event.target.value
        });
    };

    const sendTask = () => {
        addTask(new Task(task.name, task.description, task.priority));
    }
    return (
        <div>
            <h2>Generate your task</h2>
            <div>
                <label>Name</label>
                <input type="text" onChange={event => {
                    handleChange(event, 'name')
                }}/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" onChange={event => {
                    handleChange(event, 'description')
                }}/>
            </div>
            <div>
                <label>Priority</label>
                <select onChange={event => {
                    handleChange(event, 'priority')
                }}>
                    <option value={0}>Baja</option>
                    <option value={1}>Media</option>
                    <option value={2}>Alta</option>
                </select>
            </div>
            <button onClick={() => {
                sendTask()
            }}>Enviar
            </button>
        </div>)

}

export default TaskForm;
import {useState} from 'react';
import Task from './Task';

function TaskComponent(task: Task) {
    return (
        <div>
            <h3>Nombre: {task.getTaskName()}</h3>
            <p>Descripción: {task.getTaskDescription()}</p>
            <p>Prioridad: {task.getPriority()}</p>
        </div>
    )
}

function TaskListTsx({taskList}: { taskList: Task[] }) {

    const taskComponents = [];

    taskList.forEach((task: Task) => {
        taskComponents.push(TaskComponent(task));
    })
    return (
        <div>
            {taskComponents}
        </div>
    )
}

export default TaskListTsx;
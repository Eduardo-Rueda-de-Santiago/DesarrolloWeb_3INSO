const taskNameInput = document.getElementById("taskName");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", (e) => {

    if (taskNameInput.value === "") {
        return;
    }

    let task = document.createElement("li");


    let taskName = createTaskName();
    let deleteButton = createDeleteButton(task);
    let completeButton = createCompleteButton(taskName);

    task.append(taskName);
    task.append(deleteButton);
    task.append(completeButton);

    taskList.append(task);

})

function createTaskName() {

    let taskName = document.createElement("label");

    taskName.textContent = taskNameInput.value;

    taskNameInput.value = "";

    return taskName;

}

function createDeleteButton(taskRow) {

    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", (e) => {
        taskRow.remove();
    })

    return deleteButton;
}

function createCompleteButton(taskName) {

    let completeButton = document.createElement("button");

    completeButton.textContent = "Completar";

    completeButton.addEventListener("click", (e) => {
        if (taskName.classList.length === 0) {
            taskName.classList.add("done");
        } else {
            taskName.classList = [];
        }
    })

    return completeButton;
}
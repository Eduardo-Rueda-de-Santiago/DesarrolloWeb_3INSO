const data = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json()
const taskList = document.getElementById("taskList");

for (const task of data) {

    let liTask = document.createElement("li");
    liTask.textContent = task["title"];
    taskList.appendChild(liTask);
}
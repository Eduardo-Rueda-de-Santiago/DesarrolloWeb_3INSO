class Task {
    constructor(taskName, taskDescription, priority) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.priority = priority;
    }

    getTaskName() {
        return this.taskName;
    }

    getTaskDescription() {
        return this.taskDescription;
    }

    getPriority() {
        return this.priority;
    }
}

export default Task;
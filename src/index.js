import './style.css';
import { currentProject, taskTitle,taskDescription,taskDate, taskPriority,projectTitle } from './dom_handler';

console.log(taskTitle.value)

let projects = [];
let Tasks = []

class Task {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description =description;
        this.duedate = duedate;
        this.priority = priority;
    }
}

class Project {
    constructor(projectName, taskArray) {
        this.projectName =projectName;
        this.taskArray = ['first', 'second']
    }
}

function ProjectkMaker() {
    const newProject = new Project(projectTitle.value)
    projects.push(newProject)
}

function taskAdder() {
    const newTask = new Task(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value)
    Tasks.push(newTask)
}




export {projects,Tasks, ProjectkMaker, taskAdder}
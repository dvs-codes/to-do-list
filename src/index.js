import './style.css';
import {  taskTitle,taskDescription,taskDate, taskPriority,projectTitle } from './dom_handler';

let currentProject = '';

console.log(taskTitle.value)

let projects = [];
let taskArray = []
let defaultTaskArray = []

class Task {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description =description;
        this.duedate = duedate;
        this.priority = priority;
        this.completion = false;
    }
}

class Project {
    constructor(projectName) {
        this.projectName =projectName;
        this.taskArray = []
    }
}

function ProjectkMaker() {
    const newProject = new Project(projectTitle.value)
    projects.push(newProject)
    currentProject = newProject.projectName
    console.log(newProject.projectName)
}

function taskAdder() {
    //create a task object
    const newTask = new Task(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value)
    
    //push the new task object into current active class, else into default
    projects.forEach((project) => {
        if (currentProject === project.projectName ) {
            project.taskArray.push(newTask)
        } else if (!currentProject ) {
            defaultTaskArray.push.apply(newTask)
        }
    })
}




export {projects, currentProject, ProjectkMaker, taskAdder}
import './style.css';
import { eleTitle, okButton,projectTitle } from './dom_handler';

let projects = [];

class Task {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description =description;
        this.duedate = duedate;
        this.priority = priority;
    }
}

class Project {
    constructor(projectName) {
        this.projectName =projectName;
    }
}

function ProjectkMaker() {
    const newProject = new Project(projectTitle.value)
    projects.push(newProject)
}






export {projects, ProjectkMaker}
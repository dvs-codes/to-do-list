import './style.css';
import { taskTitle,taskDescription,taskDate, 
    taskPriority,projectTitle, taskListLoader, projectListAdder } from './dom_handler';

let currentProject = 'Default Project';

let defaultProject = {
    projectName :'Default Project',
    taskArray : [
        {
        title: "Default Task",
        description: "lorem ipsum ipsum ipsumesum",
        duedate: '01/01/2010',
        priority: 'High',
        completion : false
    }],
    completedTasks : []
}
let projects = [defaultProject];

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
        this.completedTasks = []
    }
}

function projectDeleter(project) {
    let indexOfProject = projects.indexOf(project)
    projects.splice(indexOfProject,1)
}

function ProjectkMaker() {
    const newProject = new Project(projectTitle.value)
    projects.push(newProject)
    currentProjectSetter(newProject.projectName)

}

function currentProjectSetter(targetProject) {
    currentProject = targetProject;
}

function taskDeleter(indexOfTask) {
    
    projects.forEach((project) => {
        if (currentProject === project.projectName ) {
            project.taskArray.splice(indexOfTask,1)
        } else if (!currentProject ) {
            defaultProject.taskArray.splice(indexOfTask,1)
        }
    })
}

function taskAdder() {
    //create a task object
    const newTask = new Task(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value)
    
    //push the new task object into current active class, else into default
    projects.forEach((project) => {
        if (currentProject === project.projectName ) {
            project.taskArray.push(newTask)
        } else if (!currentProject ) {
            defaultProject.taskArray.push(newTask)
        }
    })
}

projectListAdder()
taskListLoader()

export {projects, currentProject, ProjectkMaker, taskAdder, currentProjectSetter,
        projectDeleter,taskDeleter}
import {format} from "date-fns"
import './style.css';
import { taskTitle,taskDescription,taskDate, 
    taskPriority,projectTitle, taskListLoader, projectListUpdater } from './dom_handler';

let currentProjectName = 'Default Project';

let projects = [{
    projectName :'Default Project',
    taskArray : [
        {
        title: "Default Task",
        description: "lorem ipsum ipsum ipsumesum",
        dueDate: '01-01-10',
        priority: 'High',
        completion : false,
        deleteTask: function() {
            projects.forEach((project) => {
                let indexOfTask = project.taskArray.indexOf(this) 
                if(project.projectName === currentProjectName) {
                    project.taskArray.splice(indexOfTask,1)
                }
            })
        },
        editTask: function(newTitle, newDescription, newDate, newPriority) {
            this.title = newTitle;
            this.description =newDescription;
            this.duedate = newDate;
            this.priority = newPriority;
        },
        completeTask: function() {
            if (this.completion===false) { this.completion =true}
            else {this.completion =false}
        }
        
    }],
    currentProjectSetter: function() {
        currentProjectName = this.projectName
    },
    deleteProject: function() {
        let indexOfProject = projects.indexOf(this)
        projects.splice(indexOfProject,1)
    }
}];


class Project {
    constructor(projectName) {
        this.projectName =projectName;
        this.taskArray = []
    }
    
    deleteProject() {
        let indexOfProject = projects.indexOf(this)
        projects.splice(indexOfProject,1)
    }

    currentProjectSetter() {
        currentProjectName = this.projectName
    }
}

function projectkMaker() {
    const newProject = new Project(projectTitle.value)
    projects.push(newProject)
    currentProjectName = newProject.projectName
}


class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description =description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completion = false;
    }

    deleteTask() {
        projects.forEach((project) => {
            let indexOfTask = project.taskArray.indexOf(this) 
            if(project.projectName === currentProjectName) {
                project.taskArray.splice(indexOfTask,1)
            }
        })
    }

    editTask(newTitle, newDescription, newDate, newPriority) {
        this.title = newTitle;
        this.description =newDescription;
        this.dueDate = newDate;
        this.priority = newPriority;
    }

    completeTask() {
        if (this.completion===false) { this.completion =true}
        else {this.completion =false}
    }
}

function taskAdder() {
    //create a task object
    
    const formattedDate = format(taskDate.value, "dd-MM-yy")
    console.log(formattedDate)
    const newTask = new Task(taskTitle.value, taskDescription.value, formattedDate, taskPriority.value)
    //push the new task object into current active class, else into default
    projects.forEach((project) => {
        if (currentProjectName === project.projectName ) {
            project.taskArray.push(newTask)
        } else if (!currentProjectName ) {
            defaultProject.taskArray.push(newTask)
        }
    })
}

projectListUpdater()
taskListLoader()

export {projects, currentProjectName , projectkMaker, taskAdder}
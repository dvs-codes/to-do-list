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

function getData() {
    projects = JSON.parse(localStorage.getItem("projects"))
    currentProjectName = JSON.parse(localStorage.getItem("current project name"))
}

function populateStorage() {
    localStorage.setItem("projects",JSON.stringify(projects))
    localStorage.setItem('current project name', JSON.stringify(currentProjectName))
}

class Project {
    constructor(projectName) {
        this.projectName =projectName;
        this.taskArray = []
    }
    
    deleteProject() {
        let indexOfProject = projects.indexOf(this)
        projects.splice(indexOfProject,1)
        populateStorage()
    }

    currentProjectSetter() {
        currentProjectName = this.projectName
        populateStorage()
    }
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
        populateStorage()
    }

    editTask(newTitle, newDescription, newDate, newPriority) {
        this.title = newTitle;
        this.description =newDescription;
        this.dueDate = newDate;
        this.priority = newPriority;
        populateStorage()
    }

    completeTask() {
        if (this.completion===false) { this.completion =true}
        else {this.completion =false}
        populateStorage()
    }
}

//if storage item projects is not available than populatestorage
//function stores current data inside it.
if (!localStorage.getItem("projects")) {
    populateStorage()
} else {
    //here if localstorage is available the projects array is updated with
    //previously stored data.
    getData()

    //loops through objects and adds prototyep fo Class object back to each of them
    projects.forEach(project => {
        Object.setPrototypeOf(project, Project.prototype)

        //loop through eadch tasks to add Class Task prototype into it.
        project.taskArray.forEach(task => {
            Object.setPrototypeOf(task, Task.prototype)
        })
    })
}

function projectkMaker() {
    const newProject = new Project(projectTitle.value)
    projects.push(newProject)
    currentProjectName = newProject.projectName
    populateStorage()
}

function taskAdder() {
    //create a task object

    const newTask = new Task(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value)
    //push the new task object into current active class, else into default
    projects.forEach((project) => {
        if (currentProjectName === project.projectName ) {
            project.taskArray.push(newTask)
        } else if (!currentProjectName ) {
            defaultProject.taskArray.push(newTask)
        }
    })
    populateStorage()

}

projectListUpdater()
taskListLoader()

export {projects, currentProjectName , projectkMaker, taskAdder}
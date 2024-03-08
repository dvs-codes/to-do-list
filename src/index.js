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
        duedate: '01/01/2010',
        priority: 'High',
        completion : false,
        
    }],
    completedTasks : [],
    currentProjectSetter: function() {
        currentProjectName = this.projectName
    }
}];


class Project {
    constructor(projectName) {
        this.projectName =projectName;
        this.taskArray = []
        this.completedTasks = []
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
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description =description;
        this.duedate = duedate;
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
        this.duedate = newDate;
        this.priority = newPriority;
    }
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
}

projectListUpdater()
taskListLoader()

export {projects, currentProjectName , projectkMaker, taskAdder}
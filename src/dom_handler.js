import { projects,Tasks, ProjectkMaker, taskAdder } from "./index"

const projectDialog = document.querySelector('.project-dialog')
const sidebar = document.querySelector('.sidebar')
const projectForm = document.querySelector('.project-details')
const addProjectButton = document.querySelector('.project-button')
const projectList = document.querySelector('.project-list')
const projectTitle = document.querySelector('#project-title')
const projectOkButton = document.querySelector('.project-ok')
let currentProject;

const displayHeading = document.querySelector('.dispay-heading')
const taskDialog = document.querySelector('.task-dialog')
const addTaskButton = document.querySelector('.task-button')
const taskList = document.querySelector('.task-list')
const taskTitle = document.querySelector('#task-title')
const taskDescription = document.querySelector('#description')
const taskDate = document.querySelector('#date')
const taskPriority = document.querySelector('#priority')

const okButton = document.querySelector('.ok')
const cancelButton = document.querySelector('.cancel')

addTaskButton.addEventListener('click', () => {
    taskDialog.showModal()
})

addProjectButton.addEventListener('click', () => {
    projectDialog.showModal()
})

projectOkButton.addEventListener('click', (event) => {
    //clears all the projects
    projectList.textContent =""
    event.preventDefault()
    ProjectkMaker()

    //takes array item from project array and creates new project tab with 
    projects.forEach((project) => {
        let newProjectTab = document.createElement('button')
        newProjectTab.classList.add(project.projectName)
        
        newProjectTab.textContent = project.projectName
        projectList.appendChild(newProjectTab)
        
        //its own eventlisteners
        newProjectTab.addEventListener('click', projectHeadingAdder)
    })


    //closes and resets dialog and form
    projectDialog.close()
    projectForm.reset()
    console.log(projects)
})

function projectHeadingAdder(event) {
    displayHeading.textContent = event.target.textContent
    currentProject = event.target.textContent
    console.log(currentProject)
}

okButton.addEventListener('click', (event) => {
    event.preventDefault()
    taskList.textContent = ''
    taskAdder()

    taskDialog.close()
    console.log(Tasks)
})


export {projectTitle, taskTitle, taskDescription, taskDate, taskPriority, currentProject}
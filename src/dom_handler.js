import { projects, ProjectkMaker } from "./index"

const projectDialog = document.querySelector('.project-dialog')
const sidebar = document.querySelector('.sidebar')
const projectForm = document.querySelector('.project-details')
const addProjectButton = document.querySelector('.project-button')
const projectList = document.querySelector('.project-list')
const projectTitle = document.querySelector('#project-title')
const projectOkButton = document.querySelector('.project-ok')
const displayHeading = document.querySelector('.dispay-heading')
const taskDialog = document.querySelector('.task-dialog')
const addTaskButton = document.querySelector('.task-button')
const eleTitle = document.querySelector('#title')
const okButton = document.querySelector('.ok')


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
})

function projectHeadingAdder(event) {
    displayHeading.textContent = event.target.textContent
}


export {projectTitle}
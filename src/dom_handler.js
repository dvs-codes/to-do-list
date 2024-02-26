import { projects, ProjectkMaker } from "./index"

const projectDialog = document.querySelector('.project-dialog')
const sidebar = document.querySelector('.sidebar')
const projectForm = document.querySelector('.project-details')
const addProjectButton = document.querySelector('.project-button')
const projectTitle = document.querySelector('#project-title')
const projectOkButton = document.querySelector('.project-ok')
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
    event.preventDefault()
    ProjectkMaker()

    projects.forEach((project) => {
        let newProjectTab = document.createElement('button')
        newProjectTab.textContent = project.projectName
        sidebar.appendChild(newProjectTab)
    })

    console.log(projects)
    projectDialog.close()
    projectForm.reset()
    project.forEach(() => {
        
    })
})


export {projectTitle}
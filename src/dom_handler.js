import { projects, ProjectkMaker, taskAdder,currentProject } from "./index"

const projectDialog = document.querySelector('.project-dialog')
const sidebar = document.querySelector('.sidebar')
const projectForm = document.querySelector('.project-details')
const addProjectButton = document.querySelector('.project-button')
const projectList = document.querySelector('.project-list')
const projectTitle = document.querySelector('#project-title')
const projectOkButton = document.querySelector('.project-ok')


const displayHeading = document.querySelector('.dispay-heading')
const taskDialog = document.querySelector('.task-dialog')
const taskForm = document.querySelector('.task-details')
const addTaskButton = document.querySelector('.task-button')
const taskList = document.querySelector('.task-list')
const taskTitle = document.querySelector('#task-title')
const taskDescription = document.querySelector('#description')
const taskDate = document.querySelector('#date')
const taskPriority = document.querySelector('#priority')

const taskOkbutton = document.querySelector('.ok')
const taskCancelButton = document.querySelector('.cancel')

addTaskButton.addEventListener('click', () => {
    taskDialog.showModal()
})

addProjectButton.addEventListener('click', () => {
    projectDialog.showModal()
})

projectOkButton.addEventListener('click', (event) => {
    //clears all the projects, prevents default and creates a project and pushes 
    // them inside projects array
    projectList.textContent =""
    event.preventDefault()
    ProjectkMaker()

    //takes array item from project array and creates new project tab with 
    //its own eventlisteners
    projects.forEach((project) => {
        const newProjectTab = document.createElement('div')
        const newProjectTitle = document.createElement('button')
        newProjectTitle.classList.add(project.projectName)
        
        newProjectTitle.textContent = project.projectName
        newProjectTab.appendChild(newProjectTitle)
        projectList.appendChild(newProjectTab)
        
        newProjectTitle.addEventListener('click', projectHeadingAdder)
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

taskOkbutton.addEventListener('click', (event) => {
    event.preventDefault()
    taskList.textContent = ''

    taskAdder()

    //loops thorugh projects array to find the current project
    projects.forEach((project) => {

        if(project.projectName === currentProject) {
            //loop through the taskArrays to display every task 
            project.taskArray.forEach((array) => {

                
                
                //adding the main tab as button
                const taskTab = document.createElement('div')
                taskTab.textContent = array.title
                taskTab.classList.add(array.title)
                taskList.appendChild(taskTab)

                //adding a checkbox
                const checkbox = document.createElement('input')
                checkbox.setAttribute("type", "checkbox")
                taskTab.appendChild(checkbox)

            })
        }
    })

    
    taskDialog.close()
    taskForm.reset()
})

taskCancelButton.addEventListener('click', (event) => {
    event.preventDefault()
})

export {projectTitle, taskTitle, taskDescription, taskDate, taskPriority}
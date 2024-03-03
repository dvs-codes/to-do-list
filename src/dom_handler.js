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

projectOkButton.addEventListener('click', projectListAdder)

taskOkbutton.addEventListener('click', taskListLoader)

function projectListAdder(event) {
    //clears all the projects, prevents default and creates a project and pushes 
    // them inside projects array
    projectList.textContent =""

    if (event && event.target.nodeName==='BUTTON') {
    event.preventDefault()
    ProjectkMaker()
    } 

    //takes array item from project array and creates new project tab with 
    //its own eventlisteners
    projects.forEach((project) => {
        const newProjectTab = document.createElement('div')
        newProjectTab.classList.add('project-tab')

        //title 
        const newProjectTitle = document.createElement('div')
        newProjectTitle.textContent = project.projectName

        //delete
        const projectDeleteButton = document.createElement('button')
        projectDeleteButton.textContent = "Delete"
        projectDeleteButton.addEventListener('click', () => {
            project.deleteProject()
        })

        newProjectTab.appendChild(newProjectTitle)
        newProjectTab.appendChild(projectDeleteButton)
        projectList.appendChild(newProjectTab)
        
        // newProjectTitle.addEventListener('click', )
    })

    //closes and resets dialog and form
    projectDialog.close()
    projectForm.reset()
    console.log(projects)

}

function taskListLoader(event) {
    console.log(currentProject)
    taskList.textContent = ''
    if (event && event.target.nodeName === "BUTTON") {
        event.preventDefault()
        taskAdder()
    }

    //loops thorugh projects array to find the current project
    projects.forEach((project) => {

        if(project.projectName === currentProject ||
           project.projectName === 'Default Project') {
            //loop through the taskArrays to display every task 
            project.taskArray.forEach((array) => {

                //adding a checkbox with title
                const taskTab = document.createElement('div')
                // taskTab.classList.add(array.title)
                taskTab.classList.add('task-tab')

                const taskTitle = document.createElement('div')
                taskTitle.textContent = array.title
                // taskTitle.classList.add(array.title)
                
                //actions and info
                const actions = document.createElement('div')
                actions.classList.add('actions')
                const priority = document.createElement('div')
                priority.textContent = array.priority
                const expandButton = document.createElement('button')
                expandButton.textContent = 'Expand'
                const deleteButton = document.createElement('button')
                deleteButton.textContent = 'Delete'
                const editButton = document.createElement('button')
                editButton.textContent = 'Edit'
                const checkbox = document.createElement('input')
                checkbox.setAttribute("type", "checkbox")
                
                
                taskTab.appendChild(taskTitle)
                actions.appendChild(priority)
                actions.appendChild(expandButton)
                actions.appendChild(editButton)
                actions.appendChild(deleteButton)
                taskTab.appendChild(actions)
                actions.appendChild(checkbox)
                taskList.appendChild(taskTab)

                displayHeading.textContent = project.projectName
            })
        }
    })

    
    taskDialog.close()
    taskForm.reset()
    console.log(projects)
}


taskCancelButton.addEventListener('click', (event) => {
    event.preventDefault()
})

export {projectTitle, taskTitle, taskDescription, taskDate, taskPriority,
     projectListAdder, taskListLoader}
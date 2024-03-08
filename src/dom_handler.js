import { projects, projectkMaker, taskAdder,currentProjectName,
        taskDeleter } from "./index"

const projectDialog = document.querySelector('.project-dialog')
const sidebar = document.querySelector('.sidebar')
const projectForm = document.querySelector('.project-details')
const addProjectButton = document.querySelector('.project-button')
const projectList = document.querySelector('.project-list')
const projectTitle = document.querySelector('#project-title')

const projectOkButton = document.querySelector('.project-ok')
const projectCancelButton = document.querySelector('.project-cancel')

const displayHeading = document.querySelector('.dispay-heading')
const taskDialog = document.querySelector('.task-dialog')
const taskForm = document.querySelector('.task-details')
const addTaskButton = document.querySelector('.task-button')
const taskList = document.querySelector('.task-list')
const taskTitle = document.getElementById('task-title')
const taskDescription = document.querySelector('#description')
const taskDate = document.querySelector('#date')
const taskPriority = document.querySelector('#priority')

const taskOkbutton = document.querySelector('.ok-button')
const taskCancelButton = document.querySelector('.cancel-button')

addTaskButton.onclick = () => {
    taskDialog.showModal()
}

addProjectButton.onclick = () => {
    projectDialog.showModal()
}

projectOkButton.onclick =  projectListUpdater

function projectListUpdater(event) {
    //clears all the projects, prevents default and creates a project and pushes 
    // them inside projects array
    projectList.textContent =""
    if (event && event.target.className==='project-ok') {
    event.preventDefault()
    projectkMaker()
    taskListLoader()
    } 

    //takes array item from project array and creates new project tab with 
    //its own eventlisteners
    projects.forEach((project) => {
        const newProjectTab = document.createElement('div')
        newProjectTab.classList.add('project-tab')

        //title 
        const newProjectTitle = document.createElement('button')
        newProjectTitle.textContent = project.projectName

        //delete
        const projectDeleteButton = document.createElement('button')
        projectDeleteButton.textContent = "Delete"
        projectDeleteButton.onclick = () => {
            project.deleteProject()
            projectListUpdater()
        }

        newProjectTab.appendChild(newProjectTitle)
        newProjectTab.appendChild(projectDeleteButton)
        projectList.appendChild(newProjectTab)
        
        newProjectTitle.onclick = taskListRefresher

        function taskListRefresher() {
            //sets currentproject to whatever, needed to make a function since  
            // modules cannot set values of variable from different modules.
            displayHeading.textContent = project.projectName
            project.currentProjectSetter()
            taskListLoader()
        }
        displayHeading.textContent = project.projectName
    })

    //closes and resets dialog and form
    projectDialog.close()
    projectForm.reset()
    console.log(currentProjectName)
}

taskOkbutton.onclick = taskListLoader

function taskListLoader(event) {
    taskList.textContent = ''
    if (event && event.target.className === "ok-button") {
        event.preventDefault()
        taskAdder()
    }

    //loops thorugh projects array to find the current project
    projects.forEach((project) => {

        if(project.projectName === currentProjectName) {
            //loop through the taskArrays to display every task 
            project.taskArray.forEach((array,index) => {

                //adding a intro containng title due date etc.
                const taskIntro = document.createElement('div')
                taskIntro.classList.add('task-intro')


                //adding a checkbox with title
                const taskTab = document.createElement('div')
                taskTab.classList.add('task-tab')

                const taskTitle = document.createElement('button')
                taskTitle.textContent = array.title

                //title tab acts as expand button
                taskTitle.onclick = () => {
                    taskDescription.classList.toggle('expand')
                }
                
                //actions and info
                const actions = document.createElement('div')
                actions.classList.add('actions')
                // const priority = document.createElement('div')
                // priority.textContent = array.priority
                const deleteButton = document.createElement('button')
                deleteButton.textContent = 'Delete'
                deleteButton.onclick = ()=> {
                    array.deleteTask()
                    taskListLoader()
                }

                //editbutton
                const editButton = document.createElement('button')
                editButton.textContent = 'Edit'
                editButton.onclick = taskEditor

                function taskEditor() {
                        taskOkbutton.classList.toggle('edit')
                        const taskeditButton = document.querySelector('.edit')
                        taskDialog.showModal()
                        taskeditButton.onclick = (event) => {
                            // if (event && event.target.className === "edit-button") 
                                event.preventDefault()
                                const taskTitle = document.querySelector('#task-title')
                                const taskDescription = document.querySelector('#description')

                                array.editTask(taskTitle.value, taskDescription.value, taskDate.value, taskPriority.value)
                                console.log(projects)
                                taskDialog.close()
                                taskForm.reset()
                                taskListLoader()
                            
                        }
                }
                const checkbox = document.createElement('input')
                checkbox.setAttribute("type", "checkbox")

                //description box
                const descriptionBox = document.createElement('div')
                let taskDescription = document.createElement('div')
                taskDescription.textContent = array.description
                taskDescription.classList.add('task-description')
                taskDescription.classList.add('expand')



                
                taskIntro.appendChild(taskTitle)
                actions.appendChild(editButton)
                actions.appendChild(deleteButton)
                actions.appendChild(checkbox)
                taskIntro.appendChild(actions)
                taskTab.appendChild(taskIntro)
                taskTab.appendChild(taskDescription)
                // actions.appendChild(priority)
                taskList.appendChild(taskTab)

            })
        }
    })

    
    taskDialog.close()
    taskForm.reset()
    console.log(projects)
}


taskCancelButton.onclick = (event) => {
    event.preventDefault()
    taskDialog.close()
    taskForm.reset()
}

projectCancelButton.onclick = (event)=> {
    event.preventDefault()
    projectDialog.close()
    projectForm.reset()
}

export {projectTitle, taskTitle, taskDescription, taskDate, taskPriority,
     projectListUpdater, taskListLoader}
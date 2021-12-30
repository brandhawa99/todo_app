import '../styles.css'
import { main_frame } from './main_frame.js';
import { add_project_screen } from './addProject_screen.js';
import { todo_screen } from './todo_screen';

//sidebar used to access projects and has a add project button that will set the screen to add project and then append the project to the projet holder 
const sidebar = (function () {


    //holds all the elemnts that are going to be in the sidebar
    const sidebar_container = document.createElement('div');
    const projects_contianer = document.createElement('div');

    //Add Projets Section
    const add_project_container = document.createElement('div');
    const create_project_button = document.createElement('button')

        // add text to container and button 
    add_project_container.textContent = "Add Project";
    create_project_button.innerHTML = "&#x2b"
        //add button to add_project_container
    add_project_container.appendChild(create_project_button)

    //Folder for projets sections 

    //add css 
    sidebar_container.classList.add('sidebar');
    add_project_container.classList.add('due');

    create_project_button.addEventListener('click',() =>{
        main_frame.setFrame(add_project_screen)
    })


    //function to add project folders to the sidebar
    const mkFolder = (title) =>{
        if(title == ""){
            return; 
        } 
        localStorage.setItem(title,JSON.stringify({title: title,todos:[]}))
        renderProjects();

    }
    const renderProjects = () =>{
        let keys = Object.keys(localStorage)
        projects_contianer.innerHTML = ""; 
        for(let i = 0; i<keys.length; i++){
            const folder = document.createElement('div');
            folder.textContent = keys[i];
            folder.dataset.projectName = keys[i]; 
            folder.classList.add('folder');
            folder.addEventListener('click',(e)=>{
                let key = JSON.parse(localStorage.getItem(folder.dataset.projectName))
                console.log(key);
                main_frame.setFrame(todo_screen.container())

            })
            projects_contianer.appendChild(folder);

        }
    }

    const renderPage = (key) =>{
        

    }

    mkFolder("Default")

    //add stuff to sidebar container
    sidebar_container.appendChild(add_project_container);
    sidebar_container.appendChild(projects_contianer);




    return {
        sidebar_container,
        mkFolder,
    }
    

})()

export{
    sidebar
}
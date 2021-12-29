import '../styles.css'
import { container } from './container.js';
import { main_frame } from './main_frame.js';
import { add_project_screen } from './addProject_screen.js';


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

        const folder = document.createElement('div');
        folder.dataset.projectName = title
        folder.textContent = title; 
        folder.classList.add('folder');

         projects_contianer.appendChild(folder);

    }
    mkFolder("Default")

    //add stuff to sidebar container
    sidebar_container.appendChild(add_project_container);
    sidebar_container.appendChild(projects_contianer);




    return {
        sidebar_container,
        mkFolder
    }
    

})()

export{
    sidebar
}
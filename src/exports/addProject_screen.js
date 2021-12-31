import '../styles.css'
import {sidebar} from './sidebar.js'


//This screen pops up when you click on the + under add project 
const add_project_screen  = (()=>{

    const container = document.createElement('div');
    const title = document.createElement('h3');
    const label = document.createElement('label');
    const input =  document.createElement('input');
    const button = document.createElement('button');

    container.classList.add('make_folder');

    button.textContent = "create project"
    title.textContent = "Project"
    label.textContent = "Project"

    //button add event listen 
    button.addEventListener('click',() =>{
        if(check_exsits(input.value)){
            console.log("IT EXISTS")
            return 
        }
        sidebar.mkFolder(input.value);
        input.value = ""; 

    })

    // container.appendChild(title);
    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(button);

    const check_exsits = (project) =>{
        let keys = Object.keys(localStorage)
        for(let i = 0; i<keys.length; i++){
            if(keys[i] == project ){
                return true; 
            }
        }

    }



    return container
})()
export{
    add_project_screen
}
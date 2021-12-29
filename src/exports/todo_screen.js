import { container } from './container'
import '../styles.css'


//This screen pops up when you click on a project on the side bar or when you create a new project 
//Display all todos 
// Add new todo 
//remove done todo 
//mark to-dos as complete 
const todo_screen = (() =>{
    
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const top_container = document.createElement('div');
    const todo_container = document.createElement('div');
    
    const todo = document.createElement('div');
    const checkbox_input = document.createElement('input');
    const todo_input = document.createElement('input');

    //checkbox input 
    checkbox_input.type = "checkbox";
    todo_input.type = "textbox";


    //ad stuff to do container 
    todo.appendChild(checkbox_input);
    todo.appendChild(todo_input);

    
    //
    todo_container.appendChild(todo);
     

    title.textContent = "Default"


    top_container.appendChild(title);

    container.appendChild(top_container)
    container.appendChild(todo_container)

    //add css
    container.classList.add('todo_screen_container')
    top_container.classList.add('todo_header');
    todo_container.classList.add('todo_container');
    todo.classList.add('todo');


    return container

})();

export{
    todo_screen
}

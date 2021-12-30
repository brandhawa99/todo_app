import '../styles.css'


//This screen pops up when you click on a project on the side bar or when you create a new project 
//Display all todos 
// Add new todo 
//remove done todo 
//mark to-dos as complete 
const todo_screen = ((id) =>{

    const data = id ; 
    
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const top_container = document.createElement('div');
    const todo_container = document.createElement('div');

    const mktodos = () =>{


        //main container
        const todo = document.createElement('div')
        // create inputs 
        const checkbox_input = document.createElement('input');
        const todo_input = document.createElement('input');
        // create types of input 
        checkbox_input.type = "checkbox";
        todo_input.type = "textbox";
        // add todo to the container 
        todo.appendChild(checkbox_input);
        todo.appendChild(todo_input);
        //add css
        todo.classList.add('todo');
        // add event listen to the text input 
        todo_input.addEventListener('keyup',(e)=>{
            if(e.key == "Enter" && todo_input.value != ""){
                mktodos();
                let obj = JSON.parse(localStorage.getItem(id));
                console.log(obj); 
                obj.todos.push("hello")
                localStorage.setItem('Default',JSON.stringify(obj))
            }
        })

            //checkbox input 
        todo_container.appendChild(todo);
    }
    const add_to_localstorage = (container, todo) =>{


    }

    
    //
    mktodos();
     
    title.textContent = "hello"


    top_container.appendChild(title);

    container.appendChild(top_container)
    container.appendChild(todo_container)

    //add css
    container.classList.add('todo_screen_container')
    top_container.classList.add('todo_header');
    todo_container.classList.add('todo_container');


    return {
        container,
        mktodos
    }
})();

export{
    todo_screen
}

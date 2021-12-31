
const render_page = (items) => {

    const renderTodos = (items) => {
        // console.log(items.todos);
        let arr = items.todos;

        for(let i = 0 ; i < arr.length; i++ ){

            const todo  = document.createElement('div');
            const checkbox_input = document.createElement('input');
            const todo_input = document.createElement('input');

            checkbox_input.type = "checkbox";
            todo_input.type = "textbox"

            todo_input.value = arr[i];

            todo.appendChild(checkbox_input);
            todo.appendChild(todo_input);

            todo.classList.add('todo');
                    // add event listen to the text input 
            todo_input.addEventListener('keyup',(e)=>{
            if(e.key == "Enter" && todo_input.value != ""){
                mktodos();
                let obj = JSON.parse(localStorage.getItem(obj.title));
                console.log(obj); 
                obj.todos.push()
                localStorage.setItem(items.title,JSON.stringify(obj))
            }
        })



            //checkbox input 
        todo_container.appendChild(todo);

        }


            const todo  = document.createElement('div');
            const checkbox_input = document.createElement('input');
            const todo_input = document.createElement('input');

            checkbox_input.type = "checkbox";
            todo_input.type = "textbox"

            todo.appendChild(checkbox_input);
            todo.appendChild(todo_input);

            todo.classList.add('todo');
                    // add event listen to the text input 
            todo_input.addEventListener('keyup',(e)=>{
            if(e.key == "Enter" && todo_input.value != ""){
                renderTodos(items);


                let obj = JSON.parse(localStorage.getItem(items.title));
                
                console.log(obj); 
                obj.todos.push(todo_input.value)
                localStorage.setItem(items.title,JSON.stringify(obj))
            }
        })
        


            //checkbox input 
        todo_container.appendChild(todo);



    }

    // create containers 
    const container = document.createElement('div');
    const title = document.createElement('h2');
    const top_container = document.createElement('div');
    const todo_container = document.createElement('div');
    renderTodos(items);


    // add data to elements 
    title.textContent = items.title

    //add css
    container.classList.add('todo_screen_container')
    top_container.classList.add('todo_header');
    todo_container.classList.add('todo_container');

    
    top_container.appendChild(title);
    container.appendChild(top_container);
    container.appendChild(todo_container)



    return container;


}

export {
    render_page,
}
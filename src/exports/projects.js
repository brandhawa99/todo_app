

const projects = (() =>{
    const all_projects = []

    const addProjects = (title) =>{
        all_projects.push(projectFactory(title))
    } 
})()


const projectFactory = (title) =>{
    this.title = title;

    const todos = [];
    
    const addTodo =(name,done) =>{
        todos.push(todoFactory(name,done))
    }
    const getTodoAll = () =>{
        return todos;
    }
    const getTodo = (title) =>{
        todos.filter((todo) => {
            if(todo.title == title){
                return todo;
            }
        })

    }

    return {
        addTodo,
        getTodoAll,
        title
    }
}

//create a todo within a project 
//get title of the todo and weather it is done or not 
const todoFactory = (title , done) =>{

    const setTitle=(title) =>{
        this.title = title; 
    }
    const setDone = () =>{
        done = !done; 
    }
    return {
        title, done , setTitle, setDone,
    }


}
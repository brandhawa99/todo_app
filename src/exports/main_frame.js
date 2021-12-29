import '../styles.css'
import { todo_screen } from './todo_screen.js';

// this is where all the projects and their todos are going to be seen with this you can set and get the current screen you are seeing 
const main_frame = (() =>{
    const frame = document.createElement('div');
    frame.appendChild(todo_screen)
    frame.classList.add('main_frame')
    

    const setFrame = (screen) =>{
        frame.innerHTML = ""; 
        frame.appendChild(screen);
    }
    const getFrame =() =>{
        return frame;
    }
    

    return {
        setFrame,
        getFrame
    }

})()

export{
    main_frame
}



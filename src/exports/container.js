import '../styles.css'
import {sidebar} from './sidebar.js'
import {main_frame} from './main_frame.js';


//Contains the side bar the the elements that pop up when a button on the side is pressed 
const container = (function() {
    
    // this is the main contianer of everything under the header
    const main_container = document.createElement('div');
    main_container.appendChild(sidebar.sidebar_container);
    main_container.appendChild(main_frame.getFrame());

    //add css to elements  
    main_container.classList.add('meat');

    return main_container

})()

export{
    container
}
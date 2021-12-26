import '../styles.css'
import {project_holder} from './project_holder';

const sidebar = (function(){
    const container = document.createElement('div');

    const due = document.createElement('div');
    
    container.classList.add('sidebar');
    due.classList.add('due');


    due.textContent = "DUE";
    const today = document.createElement('button');
    const tomorrow = document.createElement('button');
    const this_week = document.createElement('button');

    today.textContent = "today"; 
    tomorrow.textContent = "tomorrow";
    this_week.textContent = "next week"

    due.appendChild(today);
    due.appendChild(tomorrow);
    due.appendChild(this_week);

    container.appendChild(due);
    container.appendChild(project_holder);

    return container;


})()
export {
    sidebar
}
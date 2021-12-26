import '../styles.css'

const project_holder = (() =>{
    const container = document.createElement('div');
    const button = document.createElement('button');
    
    container.textContent = "Add Project"
    button.innerHTML =" &#x2b";

    container.classList.add("due");

    container.appendChild(button);
    return container;


})()

export {
    project_holder
}
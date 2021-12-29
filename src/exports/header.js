import "../styles.css";

//create header for todo app 
function header(){
    const container = document.createElement('header')
    const title = document.createElement('div');
    title.textContent = "Todo List"

    title.classList.add("header");
    container.appendChild(title);

    return container;
}

export{
    header
}
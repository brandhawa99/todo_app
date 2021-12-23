
function head(){
    const container = document.createElement('div')
    const title = document.createElement('div');
    title.textContent = "Todo List"
    
    container.appendChild(title);
    return container;
}

export{
    head
}
import '../styles.css'

export default (function sidebar(){
    const container = document.createElement('div');

    const due = document.createElement('div');

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

    return container;


})()
import "./styles.css";


const main_container = document.querySelector("#container");
const header = document.createElement('div');
header.classList.add('bg-blue-300')
header.textContent = "ok";

main_container.appendChild(header);
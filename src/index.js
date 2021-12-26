import "./styles.css";
import {head} from './modules/header.js'
import{main} from './modules/main_container.js'

(() =>{
    
    const main_container = document.querySelector("#container");
    main_container.appendChild(head());
    main_container.appendChild(main);
    localStorage.setItem("default",JSON.stringify({"name": "Baltej","school": "jo"}))
    localStorage.setItem("layla",{name: "Baltej",school: "jo"})
    localStorage.setItem("asdf",{name: "Baltej",school: "jo"})
    localStorage.setItem("a",{name: "Baltej",school: "jo"})
    localStorage.setItem("d",{name: "Baltej",school: "jo"})
    localStorage.setItem("f",{name: "Baltej",school: "jo"})
    console.log(JSON.parse(localStorage.getItem("default")));
    console.log(localStorage.length);


})()

const project_manager = () =>{

}

let todo = [

    {

        title : "todo list add",
        date : "08-20-21",
        folder : "none",
        done : false

    },
    {

    }

]



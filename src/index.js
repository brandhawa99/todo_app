import "./styles.css";
import {head} from './modules/header.js'
import{meat} from './modules/main_container.js'
import{sidebar} from './modules/sidebar.js'

(() =>{
    
    const main_container = document.querySelector("#container");
    main_container.appendChild(head());
    main_container.appendChild(meat());


})()


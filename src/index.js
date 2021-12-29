import "./styles.css";
import {header} from './exports/header.js'
import { container } from "./exports/container.js";

(() =>{
    
    const main_container = document.querySelector("#container");
    main_container.appendChild(header());
    main_container.appendChild(container);

})()
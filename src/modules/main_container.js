import '../styles.css'
import {sidebar} from './sidebar.js';

const main = (function(){
    const container = document.createElement('div');
    const sidebar_container = document.createElement('div');

    sidebar_container.append(sidebar);
    container.appendChild(sidebar_container);

    return container ; 

})();

export {
    main
}
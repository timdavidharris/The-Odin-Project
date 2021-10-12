import makeHomePage from './home.js';
import _ from 'lodash';


function component() {
    console.log('index.js component function is working');
    const window = document.body;
    window.innerHTML = '<div id="content"></div>';
    const contentDiv = document.querySelector('#content');
    return {
        contentDiv,
    }
}

component();
makeHomePage();
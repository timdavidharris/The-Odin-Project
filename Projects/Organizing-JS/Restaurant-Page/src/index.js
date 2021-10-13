import makeHomePage from './home.js';
import _ from 'lodash';
import './style.css';


(function indexJS() {
    console.log('indexJS() is working');
    const window = document.body;
    window.innerHTML = '<div id="content"></div>';
    const contentDiv = document.querySelector('#content');
    const navBarDiv = document.createElement('div');
    const homeLink = document.createElement('a');
    homeLink.setAttribute('href', '#');
    homeLink.textContent = 'HOME';
    contentDiv.append(navBarDiv);
    navBarDiv.append(homeLink);
    makeHomePage(contentDiv);
})();

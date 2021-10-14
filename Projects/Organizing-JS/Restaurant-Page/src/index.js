import makeHomePage from './home.js';
import makeMenuPage from './menu.js';
import _ from 'lodash';
import './style.css';


(function indexJS() {
    console.log('indexJS() is working');
    const window = document.body;
    window.innerHTML = '<div id="content"></div>';
    const contentDiv = document.querySelector('#content');
    const navBarDiv = document.createElement('div');
    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');
    homeLink.setAttribute('href', '#');
    menuLink.setAttribute('href', '#');
    contactLink.setAttribute('href', '#');
    homeLink.textContent = 'HOME';
    menuLink.textContent = 'MENU';
    contactLink.textContent = 'CONTACT';
    contentDiv.append(navBarDiv);
    navBarDiv.append(homeLink);
    navBarDiv.append(menuLink);
    navBarDiv.append(contactLink);
    makeHomePage(contentDiv);
    makeMenuPage(contentDiv);
    return {
        homeLink,
        menuLink,
        contactLink,
    }
})();

console.log(homeLink);

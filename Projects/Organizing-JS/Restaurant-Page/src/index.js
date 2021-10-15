import './style.css';
import makeHomePage from './home.js';
import makeMenuPage from './menu.js';
import _ from 'lodash';

const page = document.body;
page.innerHTML = '<div id="content"></div>';
const contentDiv = document.querySelector('#content');

function setSiteNav(input) {
    let thisName = '';
    let theInput = input;
    thisName = document.createElement('a');
    thisName.setAttribute('href', '#');
    thisName.setAttribute('data', input);
    thisName.setAttribute('class', 'nav-link')
    thisName.textContent = theInput;
    contentDiv.append(thisName);
}

function pageSwitcher() {
    const pageLinks = document.querySelectorAll('.nav-link');
    pageLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (link.textContent === "HOME") {
                makeHomePage(contentDiv);
            } else if (link.textContent === "MENU") {
                makeMenuPage(contentDiv);
            } else if (link.textContent === "CONTACT") {
                console.log("CONTACT");
            }
        });
    });
}

function indexJS() {
    console.log('indexJS() is working');
    const navBarDiv = document.createElement('div');
    setSiteNav('HOME');
    setSiteNav('MENU');
    setSiteNav('CONTACT');
    contentDiv.append(navBarDiv);
    pageSwitcher();
}
indexJS();
makeHomePage(contentDiv);

// const homeLink = document.createElement('a');
// const menuLink = document.createElement('a');
// const contactLink = document.createElement('a');
// homeLink.setAttribute('href', '#');
// menuLink.setAttribute('href', '#');
// contactLink.setAttribute('href', '#');
// homeLink.textContent = 'HOME';
// menuLink.textContent = 'MENU';
// contactLink.textContent = 'CONTACT';
// navBarDiv.append(homeLink);
// navBarDiv.append(menuLink);
// navBarDiv.append(contactLink);

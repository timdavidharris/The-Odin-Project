import './style.css';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact';
import _ from 'lodash';

const page = document.body;
page.innerHTML = '<div id="content"></div>';
const contentDiv = document.querySelector('#content');

function setSiteNav(input, div) {
    let thisName = '';
    let theInput = input;
    let navBarDiv = div;
    thisName = document.createElement('a');
    thisName.setAttribute('href', '#');
    thisName.setAttribute('data', theInput);
    thisName.setAttribute('class', 'nav-link')
    thisName.textContent = theInput;
    navBarDiv.append(thisName);
}

function pageSwitcher() {
    const pageLinks = document.querySelectorAll('.nav-link');
    pageLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (link.textContent === "HOME") {
                homePage(contentDiv);
                menuPage(null);
                contactPage(null);
            } else if (link.textContent === "MENU") {
                menuPage(contentDiv);
                homePage(null);
                contactPage(null);
            } else if (link.textContent === "CONTACT") {
                contactPage(contentDiv);
                menuPage(null);
                homePage(null);
            }
        });
    });
}

function buildMenu() {
    const navBarDiv = document.createElement('div');
    navBarDiv.setAttribute('class', 'nav-bar-div');
    setSiteNav('HOME', navBarDiv);
    setSiteNav('MENU', navBarDiv);
    setSiteNav('CONTACT', navBarDiv);
    contentDiv.append(navBarDiv);
    console.log(navBarDiv);
    pageSwitcher();
}
buildMenu();
homePage(contentDiv);

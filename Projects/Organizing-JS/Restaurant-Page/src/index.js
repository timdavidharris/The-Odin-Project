import './style.css';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact';
import _ from 'lodash';

const page = document.body;
page.innerHTML = '<div id="content"></div>';
const contentDiv = document.querySelector('#content');

const homeDiv = document.createElement('div');
homeDiv.setAttribute('id', 'home-div');

const menuDiv = document.createElement('div');
menuDiv.setAttribute('id', 'menu-div');

const contactDiv = document.createElement('div');
contactDiv.setAttribute('id', 'contact-div');

function buildMenu() {
    const navBarDiv = document.createElement('div');
    navBarDiv.setAttribute('class', 'nav-bar-div');
    setSiteNav('HOME', navBarDiv);
    setSiteNav('MENU', navBarDiv);
    setSiteNav('CONTACT', navBarDiv);
    contentDiv.append(navBarDiv);
    pageSwitcher();
}
buildMenu();

contentDiv.append(homeDiv);
contentDiv.append(menuDiv);
contentDiv.append(contactDiv);

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
                homeDiv.style.display = 'contents';
                menuDiv.style.display = 'none';
                contactDiv.style.display = 'none';
            } else if (link.textContent === "MENU") {
                homeDiv.style.display = 'none';
                menuDiv.style.display = 'contents';
                contactDiv.style.display = 'none';
            } else if (link.textContent === "CONTACT") {
                homeDiv.style.display = 'none';
                menuDiv.style.display = 'none';
                contactDiv.style.display = 'contents';
            }
        });
    });
}

homePage(homeDiv);
menuPage(menuDiv);
contactPage(contactDiv);

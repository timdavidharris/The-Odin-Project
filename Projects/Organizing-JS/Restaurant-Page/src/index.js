import makeHomePage from './home.js';
import makeMenuPage from './menu.js';
import _ from 'lodash';
import './style.css';

function setSiteNav(input, div) {
    let thisName = '';
    let theInput = input;
    let contentDiv = div;
    thisName = document.createElement('a');
    thisName.setAttribute('href', '#');
    thisName.setAttribute('data', input);
    thisName.setAttribute('class', 'nav-link')
    thisName.textContent = theInput;
    contentDiv.append(thisName);
}

function checkPage() {
    const link = document.querySelectorAll('.nav-link');
    link.forEach((item) => {
        item.addEventListener('click', () => {
            console.log('you clicked a button')
            if (item.dataset === 'HOME') {
                makeHomePage(contentDiv);
                console.log('you clicked the home button');
            }
        });
    });
}

checkPage();


function indexJS() {
    console.log('indexJS() is working');
    const window = document.body;
    window.innerHTML = '<div id="content"></div>';
    const contentDiv = document.querySelector('#content');
    const navBarDiv = document.createElement('div');
    setSiteNav('HOME', contentDiv);
    setSiteNav('MENU', contentDiv);
    setSiteNav('CONTACT', contentDiv);
    contentDiv.append(navBarDiv);
    makeHomePage(contentDiv);
    makeMenuPage(contentDiv);
    return {
        contentDiv,
    }
}
indexJS();

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

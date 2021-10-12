import makeHomePage from './home.js';

function component() {
    console.log('Is this thing on?');
    let home = makeHomePage;
    return home;
}

component();
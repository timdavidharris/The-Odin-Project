import { first } from "lodash";

let homeDiv = document.createElement('div');
let i = 0;
export default function homePage(contentDiv) {
    let contentDivInput = contentDiv;
    createPage(contentDivInput);
    homeDiv.style.display = 'contents';
    if (contentDivInput === "OFF") {
        homeDiv.style.display = 'none';
    }
}

function createPage(contentDivInput) {
    if (i === 0) {
        let contentDiv = contentDivInput;
        contentDiv.append(homeDiv);
        // creating elements
        const homeImage = document.createElement('img');
        const infoDiv = document.createElement('div');
        const reviewsDiv = document.createElement('div');
        homeImage.src = '../assets/images/burger-overhead-shot.jpg';
        // adding classes
        homeDiv.setAttribute('class', 'page-div');
        // appending elements
        homeDiv.append(homeImage);
        homeDiv.append(infoDiv);
        homeDiv.append(reviewsDiv);
        // turn on display
        // calling functions
        infoDivText(infoDiv);
        reviewsDivText(reviewsDiv);
        i++;
    }
}

function infoDivText(input) {
    let infoDiv = input;
    infoDiv.textContent = 'Welcome to Tim\'s Burgers! ' +
        'We are a local, family-owned business that focuses on one thing: ' +
        'making the best damn burger you\'ve ever had. ' +
        'Please place an order online or come in person to see for yourself!'
}

function reviewsDivText(input) {
    let reviewsDiv = input;
    const firstQuote = document.createElement('q');
    const secondQuote = document.createElement('q');
    const firstQuotePerson = document.createElement('p');
    const secondQuotePerson = document.createElement('p');
    firstQuote.textContent = 'These burgers literally blew my mind. Don\'t miss an opportunity to get your mind blown';
    firstQuotePerson.textContent = '~ Simon from Uptown'
    secondQuote.textContent = 'I thought that I\'d had a good burger before I tried Tim\'s. I was wrong.'
    secondQuotePerson.textContent = '~ Guy Fieri'
    reviewsDiv.append(firstQuote);
    reviewsDiv.append(firstQuotePerson);
    reviewsDiv.append(secondQuote);
    reviewsDiv.append(secondQuotePerson);
}

import { first } from "lodash";

export default function makeHomePage(contentDivInput) {
    let contentDiv = contentDivInput;
    console.log('makeHomePage() is working');
    // creating elements
    const homeImage = document.createElement('img');
    const infoDiv = document.createElement('div');
    const reviewsDiv = document.createElement('div');
    homeImage.src = '../assets/images/burger-overhead-shot.jpg';
    // appending elements
    contentDiv.append(homeImage);
    contentDiv.append(infoDiv);
    contentDiv.append(reviewsDiv);
    // calling functions
    infoDivText(infoDiv);
    reviewsDivText(reviewsDiv);
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

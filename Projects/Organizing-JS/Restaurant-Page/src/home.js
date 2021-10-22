let pageBuilt = false;

export default function homePage(homeDivInput) {
    let homeDiv = homeDivInput;
    if (pageBuilt === false) {
        const homeHeaderDiv = document.createElement('div');
        const homeHeaderH1 = document.createElement('h1');
        const homeImage = document.createElement('img');
        const infoDiv = document.createElement('div');
        const hours = document.createElement('p');
        const about = document.createElement('p');
        const reviewsDiv = document.createElement('div');
        const imageCredit = document.createElement('p');
        infoDiv.setAttribute('class', 'home-info');
        imageCredit.setAttribute('class', 'image-credit');
        homeDiv.setAttribute('class', 'page-div');
        imageCredit.innerHTML = 'Photo by <a href="https://unsplash.com/@danielcgold?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Dan Gold</a> on <a href="https://unsplash.com/s/photos/burger-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>'
        homeImage.src = '../assets/images/burger-overhead-shot.jpg';
        homeHeaderH1.textContent = "TIM'S BURGERS";
        homeHeaderDiv.append(homeHeaderH1);
        homeDiv.append(homeHeaderDiv);
        homeDiv.append(homeImage);
        homeDiv.append(infoDiv);
        homeDiv.append(reviewsDiv);
        homeDiv.append(imageCredit);
        infoDivText(hours, about);
        reviewsDivText(reviewsDiv);
        infoDiv.append(hours);
        infoDiv.append(about);
        pageBuilt = true;
    }
}

function infoDivText(Hours, About) {
    Hours.textContent = "HOURS: "
        + "M-F - 10:10 AM to 10:10 PM "
        + "Sat & Sun - 9:45 AM to 11:00 PM"
    About.textContent = 'Welcome to Tim\'s Burgers! '
        + 'We are a local, family-owned business '
        + 'that focuses on one thing: '
        + 'making the best burger you\'ve ever had. '
        + 'Please place an order online or come in person '
        + 'to see for yourself!';
}

function reviewsDivText(input) {
    let reviewsDiv = input;
    const firstQuote = document.createElement('p');
    const secondQuote = document.createElement('p');
    const firstQuotePerson = document.createElement('p');
    const secondQuotePerson = document.createElement('p');
    firstQuote.textContent = '"These burgers literally blew my mind. '
        + 'Don\'t miss an opportunity to get your mind blown"';
    firstQuotePerson.textContent = '~ Simon from Uptown'
    secondQuote.textContent = '"I thought I\'d had a good burger '
        + ' before I tried Tim\'s. I was wrong."';
    secondQuotePerson.textContent = '~ Guy Fieri'
    reviewsDiv.append(firstQuote);
    reviewsDiv.append(firstQuotePerson);
    reviewsDiv.append(secondQuote);
    reviewsDiv.append(secondQuotePerson);
}


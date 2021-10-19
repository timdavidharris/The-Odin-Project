let i = 0;
let homeDiv = document.createElement('div');

export default function homePage(contentDivInput) {
    let contentDiv = contentDivInput;
    if (contentDiv === null) {
        return homeDiv.style.display = 'none';
    }
    if (i === 0) {
        contentDiv.append(homeDiv);
        const homeHeaderDiv = document.createElement('div');
        const homeHeaderH1 = document.createElement('h1');
        const homeImage = document.createElement('img');
        const infoP = document.createElement('p');
        const reviewsDiv = document.createElement('div');
        homeImage.src = '../assets/images/burger-overhead-shot.jpg';
        homeDiv.setAttribute('class', 'page-div');
        homeDiv.setAttribute('style', 'white-space: pre;');
        homeHeaderH1.textContent = "TIM'S BURGERS";
        homeHeaderDiv.append(homeHeaderH1);
        homeDiv.append(homeHeaderDiv);
        homeDiv.append(homeImage);
        homeDiv.append(infoP);
        homeDiv.append(reviewsDiv);
        infoDivText(infoP);
        reviewsDivText(reviewsDiv);
        i++;
    }
    homeDiv.style.display = 'contents'; 
}

function infoDivText(input) {
    let infoP = input;
    infoP.textContent = "HOURS:\r\n";
    infoP.textContent += "M-F - 10:10 AM to 10:10 PM\r\n";
    infoP.textContent += "Sat & Sun - 9:45 AM to 11:00 PM\r\n\r\n";
    infoP.textContent += 'Welcome to Tim\'s Burgers!\r\n';
    infoP.textContent += 'We are a local, family-owned business that focuses on one thing:\r\n';
    infoP.textContent += 'making the best damn burger you\'ve ever had.\r\n';
    infoP.textContent += 'Please place an order online or come in person to see for yourself!\r\n';
}

function reviewsDivText(input) {
    let reviewsDiv = input;
    const firstQuote = document.createElement('p');
    const secondQuote = document.createElement('p');
    const firstQuotePerson = document.createElement('p');
    const secondQuotePerson = document.createElement('p');
    firstQuote.textContent = '"These burgers literally blew my mind. \r\nDon\'t miss an opportunity to get your mind blown"';
    firstQuotePerson.textContent = '~ Simon from Uptown'
    secondQuote.textContent = '"I thought that I\'d had a good burger before I tried Tim\'s. \r\nI was wrong."'
    secondQuotePerson.textContent = '~ Guy Fieri'
    reviewsDiv.append(firstQuote);
    reviewsDiv.append(firstQuotePerson);
    reviewsDiv.append(secondQuote);
    reviewsDiv.append(secondQuotePerson);
}

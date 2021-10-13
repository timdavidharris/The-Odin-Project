export default function makeHomePage() {
    console.log('makeHomePage() is working'); 
    const window = document.body;
    window.innerHTML = '<div id="content"></div>';
    // creating elements
    const contentDiv = document.querySelector('#content');
    const homeImage = document.createElement('img');
    const infoDiv = document.createElement('div');
    homeImage.src = '../assets/images/burger-overhead-shot.jpg';
    // appending elements
    contentDiv.append(homeImage);
    contentDiv.append(infoDiv);
    // calling functions
    infoDivText(infoDiv);
}

function infoDivText(input) {
    let infoDiv = input;
    infoDiv.textContent = 'Welcome to Tim\'s Burgers! ' +
        'We are a local, family-owned business that focuses on one thing: ' +
        'making the best damn burger you\'ve ever had.' +
        'Please place an order online or come in person to see for yourself!'
}

export default function makeHomePage() {
    console.log('makeHomePage() is working'); 
    const window = document.body;
    window.innerHTML = '<div id="content"></div>';
    const contentDiv = document.querySelector('#content');
    const homeImage = document.createElement('img');
    const homeLink = document.createElement('a');
    homeLink.setAttribute('href', '#');
    homeLink.textContent = 'HOME';
    homeImage.src = '../assets/images/burger-overhead-shot.jpg';
    contentDiv.append(homeLink);
    contentDiv.append(homeImage);
    // btn code below
    // const btn = document.createElement('button');
    // contentDiv.append(btn);
    // btn.textContent = 'Push Me';
}

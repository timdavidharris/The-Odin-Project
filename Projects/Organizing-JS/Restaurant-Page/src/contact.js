let contactPageBuilt = false;

export default function contactPage(contactDivInput) {
    let contactDiv = contactDivInput;
    if (contactPageBuilt === false) {
        const contactHeaderDiv = document.createElement('div');
        const contactInfoDiv = document.createElement('div');
        const contactImage = document.createElement('img');
        const contactHeaderH1 = document.createElement('h1');
        const contactP = document.createElement('p');
        const imageCredit = document.createElement('p');
        imageCredit.setAttribute('class', 'image-credit');
        contactDiv.setAttribute('class', 'page-div');
        contactInfoDiv.setAttribute('style', 'white-space: pre;');
        imageCredit.innerHTML = 'Photo by <a href="https://unsplash.com/@jessonmata?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Jesson Mata</a> on <a href="https://unsplash.com/s/photos/burger-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>'
        contactImage.src = '../assets/images/burger-prep.jpg';
        contactHeaderH1.textContent = "CONTACT";
        contactHeaderDiv.append(contactHeaderH1);
        contactDiv.append(contactHeaderDiv);
        contactDiv.append(contactImage);
        contactDiv.append(contactInfoDiv);
        contactInfoDiv.append(contactP);
        contactDiv.append(imageCredit);
        contactText(contactP);
        contactPageBuilt = true;
    }
}

function contactText(contactP) {
    let p = contactP;
    p.textContent = "PHONE: (800) 000-1111\r\n";
    p.textContent += "EMAIL: eat@timsburgers.com\r\n";
    p.textContent += "ADDRESS: 1772 E. Dino St\r\n"
    p.textContent += "This City, NV 010101"
}
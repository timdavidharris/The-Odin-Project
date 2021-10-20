let i = 0;
let contactDiv = document.createElement('div');

export default function contactPage(contentDivInput) {
    let contentDiv = contentDivInput;
    if (contentDiv === null) {
        return contactDiv.style.display = 'none';
    }
    if (i === 0) {
        contentDiv.append(contactDiv);
        const contactHeaderDiv = document.createElement('div');
        const contactHeaderH1 = document.createElement('h1');
        const contactImage = document.createElement('img');
        const contactInfoDiv = document.createElement('div');
        const contactP = document.createElement('p');
        const imageCredit = document.createElement('p');
        imageCredit.setAttribute('class', 'image-credit');
        imageCredit.innerHTML = 'Photo by <a href="https://unsplash.com/@jessonmata?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jesson Mata</a> on <a href="https://unsplash.com/s/photos/burger-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
        contactText(contactP);
        contactInfoDiv.setAttribute('style', 'white-space: pre;');
        contactImage.src = '../assets/images/burger-prep.jpg';
        contactDiv.setAttribute('class', 'page-div');
        contactHeaderH1.textContent = "CONTACT";
        contactHeaderDiv.append(contactHeaderH1);
        contactDiv.append(contactHeaderDiv);
        contactDiv.append(contactImage);
        contactDiv.append(contactInfoDiv);
        contactInfoDiv.append(contactP);
        contactDiv.append(imageCredit);
        i++;
    }
    contactDiv.style.display = 'contents';
}

function contactText(contactP) {
    let p = contactP;
    p.textContent = "PHONE: (800) 000-1111\r\n";
    p.textContent += "EMAIL: eat@timsburgers.com\r\n";
    p.textContent += "ADDRESS: 1772 E. Dino St\r\n"
    p.textContent += "This City, NV 010101"
}
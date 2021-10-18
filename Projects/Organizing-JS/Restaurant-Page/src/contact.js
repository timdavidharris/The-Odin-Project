let i = 0;
let contactDiv = document.createElement('div');

export default function contactPage(contentDivInput) {
    let contentDiv = contentDivInput;
    if (contentDiv === null) {
        return contactDiv.style.display = 'none';
    }
    if (i === 0) {
        contentDiv.append(contactDiv);
        const contactImage = document.createElement('img');
        const contactInfoDiv = document.createElement('div');
        const contactP = document.createElement('p');
        contactText(contactP);
        contactInfoDiv.setAttribute('style', 'white-space: pre;');
        contactImage.src = '../assets/images/burger-prep.jpg';
        contactDiv.setAttribute('class', 'page-div');
        contactDiv.append(contactImage);
        contactDiv.append(contactInfoDiv);
        contactInfoDiv.append(contactP);
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
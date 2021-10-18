import { first } from "lodash";

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
        const contactInfo = document.createElement('div');
        contactImage.src = '../assets/images/burger-prep.jpg';
        contactDiv.setAttribute('class', 'page-div');
        contactDiv.append(contactImage);
        contactDiv.append(contactInfo);
        i++;
    }
    contactDiv.style.display = 'contents';
}
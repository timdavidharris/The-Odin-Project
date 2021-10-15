import { first } from "lodash";

export default function makeMenuPage(contentDivInput) {
    console.log('makeMenuPage() is working');
    let contentDiv = contentDivInput;
    let menuDiv = document.createElement('div');
    contentDiv.append(menuDiv);
    menuDiv.setAttribute('class', 'page-div');
    menuDiv.style.display = 'contents';
    const menuImage = document.createElement('img');
    menuImage.setAttribute('class', 'menu');
    menuImage.src = '../assets/images/burger-on-a-tray.jpg';
    menuDiv.append(menuImage);
}

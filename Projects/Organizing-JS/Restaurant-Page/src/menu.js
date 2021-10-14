import { first } from "lodash";

export default function makeMenuPage(contentDivInput) {
    console.log('makeMenuPage() is working');
    let contentDiv = contentDivInput;
    const menuImage = document.createElement('img');
    menuImage.src = '../assets/images/burger-on-a-tray.jpg';
    contentDiv.append(menuImage);
}
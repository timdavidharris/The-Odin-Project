import { first } from "lodash";

let menuDiv = document.createElement('div');
let i = 0;
export default function menuPage(contentDivInput) {
    if (i === 0) {
        let contentDiv = contentDivInput;
        contentDiv.append(menuDiv);
        menuDiv.setAttribute('class', 'page-div');
        const menuImage = document.createElement('img');
        menuImage.setAttribute('class', 'menu');
        menuImage.src = '../assets/images/burger-on-a-tray.jpg';
        menuDiv.append(menuImage);
    }
    i++;
    menuDiv.style.display = 'contents';
    if (contentDivInput === "OFF") {
        menuDiv.style.display = 'none';
    }
}

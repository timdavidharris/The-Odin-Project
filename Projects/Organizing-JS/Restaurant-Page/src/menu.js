import _ from "lodash";

let i = 0;
let menuDiv = document.createElement('div');

export default function menuPage(contentDivInput) {
    let contentDiv = contentDivInput;
        if (i === 0) {
            contentDiv.append(menuDiv);
            menuDiv.setAttribute('class', 'page-div');
            const menuImage = document.createElement('img');
            const theMenu = document.createElement('div');
            theMenu.setAttribute('style', 'white-space: pre;');
            menuImage.setAttribute('class', 'menu');
            menuImage.src = '../assets/images/burger-on-a-tray.jpg';
            menuDiv.append(menuImage);
            menuDivText(theMenu);
            menuDiv.append(theMenu);
            i++;
        }
        menuDiv.style.display = 'contents';
        if (contentDivInput === null) {
            return menuDiv.style.display = 'none';
        }
}

function menuDivText(input) {
    let theMenu = input;
    theMenu.textContent = "BURGERS\r\n";
    theMenu.textContent += "PVT Classic: $10\r\n";
    theMenu.textContent += "SGT Cheese: $10\r\n";
    theMenu.textContent += "CPT Bacon: $10\r\n";
    theMenu.textContent += "MAJ Mushroom: $10\r\n";
    theMenu.textContent += "GEN Ultimate: $18";
}

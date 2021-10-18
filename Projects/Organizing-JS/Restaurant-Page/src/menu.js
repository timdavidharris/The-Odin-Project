let i = 0;
let menuDiv = document.createElement('div');

export default function menuPage(contentDivInput) {
    let contentDiv = contentDivInput;
    if (contentDivInput === null) {
        return menuDiv.style.display = 'none';
    }
    if (i === 0) {
        contentDiv.append(menuDiv);
        menuDiv.setAttribute('class', 'page-div');
        const menuImage = document.createElement('img');
        const burgers = document.createElement('p');
        const sides = document.createElement('p');
        const drinks = document.createElement('p');
        drinks.setAttribute('style', 'white-space: pre;');
        burgers.setAttribute('style', 'white-space: pre;');
        sides.setAttribute('style', 'white-space: pre;');
        menuImage.setAttribute('class', 'menu');
        menuImage.src = '../assets/images/burger-on-a-tray.jpg';
        menuDiv.append(menuImage);
        menuDivText(burgers, sides, drinks);
        menuDiv.append(burgers);
        menuDiv.append(sides);
        menuDiv.append(drinks);
        i++;
    }
    menuDiv.style.display = 'contents';
}

function menuDivText(theBurgers, theSides, theDrinks) {
    let burgers = theBurgers;
    burgers.textContent = "BURGERS\r\n";
    burgers.textContent += "PVT Classic: $10\r\n";
    burgers.textContent += "SGT Cheese: $10\r\n";
    burgers.textContent += "CPT Bacon: $10\r\n";
    burgers.textContent += "MAJ Mushroom: $10\r\n";
    burgers.textContent += "GEN Ultimate: $18";
    let sides = theSides;
    sides.textContent = "SIDES\r\n";
    sides.textContent += "Small Fries: $3\r\n";
    sides.textContent += "Medium Fries: $5\r\n";
    sides.textContent += "Large Fries: $7\r\n";
    sides.textContent += "Loaded Fries (Medium): $8\r\n";
    sides.textContent += "Sweet Potato Fries: + $1.50\r\n";
    let drinks = theDrinks;
    drinks.textContent = "DRINKS & SHAKES\r\n";
    drinks.textContent += "Fountain Drinks: $3\r\n";
    drinks.textContent += "Bottled Drinks: $3\r\n";
    drinks.textContent += "Shakes: $8r\n";
    drinks.textContent += "Shake addons: $1 each\r\n";
    drinks.textContent += "Chocolate, Reese's, Strawberry\r\n";
}

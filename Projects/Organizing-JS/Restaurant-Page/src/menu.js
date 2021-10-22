let menuPageBuilt = false;

export default function menuPage(menuDivInput) {
    let menuDiv = menuDivInput;
    if (menuPageBuilt === false) {
        const menuHeaderDiv = document.createElement('div');
        const menuImage = document.createElement('img');
        const menuHeaderH1 = document.createElement('h1');
        const burgers = document.createElement('p');
        const sides = document.createElement('p');
        const drinks = document.createElement('p');
        const imageCredit = document.createElement('p');
        imageCredit.setAttribute('class', 'image-credit');
        drinks.setAttribute('style', 'white-space: pre;');
        burgers.setAttribute('style', 'white-space: pre;');
        sides.setAttribute('style', 'white-space: pre;');
        menuImage.setAttribute('class', 'menu');
        imageCredit.innerHTML = 'Photo by <a href="https://unsplash.com/@bimoluki02?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Bimo Luki</a> on <a href="https://unsplash.com/s/photos/burger-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>'
        menuImage.src = '../assets/images/burger-on-a-tray.jpg';
        menuHeaderH1.textContent = "MENU";
        menuHeaderDiv.append(menuHeaderH1);
        menuDiv.append(menuHeaderDiv);
        menuDiv.append(menuImage);
        menuDiv.append(burgers);
        menuDiv.append(sides);
        menuDiv.append(drinks);
        menuDiv.append(imageCredit);
        menuDivText(burgers, sides, drinks);
        menuPageBuilt = true;
    }
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
    drinks.textContent += "Shakes: $8\r\n";
    drinks.textContent += "Shake addons: $1 each\r\n";
    drinks.textContent += "Chocolate, Reese's, Strawberry\r\n";
}

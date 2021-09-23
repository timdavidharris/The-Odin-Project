const gameBoardSection = document.getElementById('Game-Board-Section');

const makeGameBoard = (() => {
    i = 0;
    while (i < 9) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', `game-square`);
        newDiv.setAttribute('data', `data-square-${i + 1}`)
        newDiv.textContent = "X";
        gameBoardSection.appendChild(newDiv);
        i++;
        console.log(i);
    }   

})();


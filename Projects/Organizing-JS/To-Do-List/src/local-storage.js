import * as draw from "./draw-DOM";

export function fetch(inputArray, inputKey) {
    inputArray = JSON.parse(localStorage.getItem(inputKey));
    return inputArray;
}

export function save(inputArray, inputKey) {
    localStorage.setItem(inputKey, JSON.stringify(inputArray));
    return JSON.parse(localStorage.getItem(inputKey));
}

export function clear(inputArray, inputKey) {
    console.log(inputKey);
    localStorage.clear(inputKey);
    inputArray = [];
    save(inputArray, inputKey);
    drawTheDOM();
}

function drawTheDOM() {
    let toDosArray = [];
    let completedArray = [];
    toDosArray = setArrayVar(toDosArray, "to-do-items");
    completedArray = setArrayVar(completedArray, "completed");
    return draw.drawToDoList(toDosArray, completedArray);
}

export function setArrayVar(inputArray, inputKey) {
    if ((localStorage.getItem(inputKey) === null) ||
    (localStorage.getItem(inputKey) === undefined)) {
        return inputArray = [];
    } else {
        return fetch(inputArray, inputKey);
    }
}

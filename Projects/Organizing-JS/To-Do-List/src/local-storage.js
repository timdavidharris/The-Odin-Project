import * as index from "./index";

export function fetch(inputArray, inputKey) {
    inputArray = JSON.parse(localStorage.getItem(inputKey));
    return inputArray;
}

export function save(inputArray, inputKey) {
    localStorage.setItem(inputKey, JSON.stringify(inputArray));
    return JSON.parse(localStorage.getItem(inputKey));
}

export function removeItem(inputKey) {
    localStorage.removeItem(inputKey);
    return index.drawTheDOM();
}

export function setArrayVar(inputArray, inputKey) {
    if ((localStorage.getItem(inputKey) === null) ||
    (localStorage.getItem(inputKey) === undefined)) {
        return inputArray = [];
    } else {
        return fetch(inputArray, inputKey);
    }
}

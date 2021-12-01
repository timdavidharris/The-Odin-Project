import * as index from "./index";
let data = [];

export function fetch(inputArray, inputKey) {
    inputArray = JSON.parse(localStorage.getItem(inputKey));
    return inputArray;
}

export function save(inputArray, inputKey) {
    localStorage.setItem(inputKey, JSON.stringify(inputArray));
    data = JSON.parse(localStorage.getItem(inputKey));
    return data;
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

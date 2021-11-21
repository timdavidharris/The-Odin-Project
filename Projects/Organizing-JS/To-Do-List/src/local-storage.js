import * as toDo from "./to-do-obj";

let data = [];

export function fetch(inputArray, inputKey) {
    console.log("fetch()");
    inputArray = JSON.parse(localStorage.getItem(inputKey));
    return inputArray;
}

export function save(inputArray, inputKey) {
    localStorage.setItem(inputKey, JSON.stringify(inputArray));
    data = JSON.parse(localStorage.getItem(inputKey));
    return data;
}

export function clear(inputArray, inputKey) {
    localStorage.clear(inputKey);
    inputArray = [];
    toDo.drawToDoList(inputArray);
} 

export function setArrayVar(inputArray, inputKey) {
    console.log("setArrayVar()");
    if ((localStorage.getItem(inputKey) === null) ||
    (localStorage.getItem(inputKey) === undefined)) {
        return inputArray = [];
    } else {
        return fetch(inputArray, inputKey);
    }
} 

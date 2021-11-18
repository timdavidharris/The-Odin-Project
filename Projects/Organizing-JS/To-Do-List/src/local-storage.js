import * as toDo from "./to-do-obj";

let getToDoStorage = localStorage.getItem("to-do-items");
let data = [];

export function fetchLocalStorage(itemArray) {
    itemArray = JSON.parse(getToDoStorage);
    return itemArray;
}

export function save(itemArray) {
    localStorage.setItem("to-do-items", JSON.stringify(itemArray));
    data = JSON.parse(getToDoStorage);
    return data;
}

export function clear(itemArray) {
    localStorage.clear("to-do-items");
    itemArray = [];
    toDo.drawToDoList(itemArray);
}

import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import * as toDo from "./to-do-obj";
import * as list from "./list-obj";
import * as storage from "./local-storage";
import * as draw from "./draw-DOM";

let toDosArray = [];
let listArray = [];
let completedArray = [];
let currentList = "";
currentList = listVar();
toDosArray = storage.setArrayVar(toDosArray, "to-do-items");
completedArray = storage.setArrayVar(completedArray, "completed");
listArray = storage.setArrayVar(listArray, "lists");
list.addListObj(listArray);
list.toggleListInputDisplay();
toDo.toggleToDoInputDisplay();
toDo.addToDoObj(toDosArray);
toDo.clearToDoLocalStorage(toDosArray);
toDo.clearCompletedToDosLocalStorage(completedArray);
list.clearListLocalStorage(listArray);
draw.activeListColor();
drawTheDOM();
console.log(listArray);

export function setMainList() {
    new list.listObj("To Do", listArray);
    // location.reload();
}

export function listVar() {
    let listLinks = document.querySelectorAll(".list-a-tag");
    currentList = "To Do";
    listLinks.forEach((link) => {
        link.addEventListener("click", () => {
            currentList = link.id;
            console.log(link.id);
            return currentList;
        });
    });
    return currentList;
}

export function drawTheDOM() {
    listArray = storage.setArrayVar(listArray, "lists");
    if (listArray.length === 0) {
        setMainList();
    }
    currentList = listVar();
    toDosArray = storage.setArrayVar(toDosArray, "to-do-items");
    completedArray = storage.setArrayVar(completedArray, "completed");
    draw.toDoList(toDosArray, completedArray, currentList);
    draw.listLinks(listArray);
}
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

export function setMainList() {
    new list.listObj("To Do", listArray);
}

export function drawTheDOM() {
    listArray = storage.setArrayVar(listArray, "lists");
    if (listArray.length === 0) {
        setMainList();
    }
    toDosArray = storage.setArrayVar(toDosArray, "to-do-items");
    completedArray = storage.setArrayVar(completedArray, "completed");
    draw.toDoList(toDosArray, completedArray);
    draw.listLinks(listArray);
}

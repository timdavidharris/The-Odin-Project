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
listArray = storage.setArrayVar(listArray, "lists");
completedArray = storage.setArrayVar(completedArray, "completed");
list.addListObj(listArray);
list.toggleListInputDisplay();
list.clearListLocalStorage(listArray);
toDo.toggleToDoInputDisplay();
toDo.addToDoObj(toDosArray);
toDo.clearToDoLocalStorage(toDosArray);
toDo.clearCompletedToDosLocalStorage(completedArray);
drawTheDOM();

export function drawTheDOM() {
    toDosArray = storage.setArrayVar(toDosArray, "to-do-items");
    completedArray = storage.setArrayVar(completedArray, "completed");
    listArray = storage.setArrayVar(listArray, "lists");
    draw.filterArray(toDosArray, completedArray);
    draw.listLinks(listArray);
}

new toDo.toDoObj("hello", "", "eat more cheese", "To Do", toDosArray);
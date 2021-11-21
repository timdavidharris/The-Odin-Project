import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import * as toDo from "./to-do-obj";
import * as list from "./list-obj";
import * as storage from "./local-storage";
import * as draw from "./draw-DOM";

let toDosArray = [];
let listArray = [];
toDosArray = storage.setArrayVar(toDosArray, "to-do-items");
listArray = storage.setArrayVar(listArray, "lists");
list.addListDiv();
list.addListObj(listArray);
list.toggleListInputDisplay();
toDo.toggleToDoInputDisplay();
toDo.addToDoObj(toDosArray);
toDo.clearToDoLocalStorage(toDosArray);
list.clearListLocalStorage(listArray);
list.drawListLinks(listArray);
draw.drawToDoList(toDosArray);

export function getTodaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${year}-${month}-${day}`;
}

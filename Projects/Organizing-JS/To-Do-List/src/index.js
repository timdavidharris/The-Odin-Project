import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import * as toDo from "./to-do-obj";
import * as list from "./list-obj";
import * as storage from "./local-storage";
// import * as storageMod from "./local-storage";
let inputArray = [];
inputArray = storage.setArrayVar(inputArray, "to-do-items");
list.addListDiv();
list.addListObj();
list.toggleListInputDisplay();
toDo.toggleToDoInputDisplay();
toDo.addToDoObj(inputArray);
toDo.clearToDoLocalStorage(inputArray, "to-do-items");
toDo.drawToDoList(inputArray);

export function getTodaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${year}-${month}-${day}`;
}

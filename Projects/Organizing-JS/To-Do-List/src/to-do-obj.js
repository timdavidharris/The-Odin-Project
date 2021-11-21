import * as storage from "./local-storage";
import * as draw from "./draw-DOM";

let addNewToDo = document.querySelector("#add-to-do-btn");
let inputDiv = document.querySelector("#new-to-do-item-inputs");
let newToDoDueInput = document.querySelector("#new-to-do-due");
let newToDoNameInput = document.querySelector("#new-to-do-item");

export function toDoObj(name, dueDate, inputArray) {
    this.name = name;
    this.dueDate = dueDate;
    inputArray.push(this);
    draw.drawToDoList(inputArray);
}
export function addToDoObj(inputArray){
    let addNewToDoBtn = document.querySelector("#new-to-do-item-btn");
    addNewToDoBtn.addEventListener("click", () => {
        if (newToDoNameInput.value === "") {
            alert("The to do name was empty, please type in a name");
        } else {
            inputDiv.style.display = "none";
            let newToDoName = newToDoNameInput.value;
            let newToDoDue = newToDoDueInput.value;
            new toDoObj(newToDoName, newToDoDue, inputArray);
        }
    });
}

export function toggleToDoInputDisplay() {
    inputDiv.style.display = "none";
    addNewToDo.addEventListener("click", () => {
        if (inputDiv.style.display === "contents") {
            inputDiv.style.display = "none";
        } else {
            inputDiv.style.display = "contents";
        }
    }) ;
}

export function clearToDoLocalStorage(inputArray) {
    let clearToDos = document.querySelector("#clear-to-do-local-storage");
    clearToDos.addEventListener("click", () => {
        if (confirm("Click 'OK' if you do want to delete ALL your To Do items.")) {
            storage.clear(inputArray, "to-do-items");
        } else {
            alert("You did not delete you To Do items.");
        }
    });
}

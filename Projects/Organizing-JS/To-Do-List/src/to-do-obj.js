import * as storage from "./local-storage";
import * as index from "./index";

let addNewToDo = document.querySelector("#add-to-do-btn");
let inputDiv = document.querySelector("#new-to-do-item-inputs");
let newToDoDueInput = document.querySelector("#new-to-do-due");
let newToDoNameInput = document.querySelector("#new-to-do-item");
let newToDoNotesInput = document.querySelector("#new-to-do-item-notes");
let listName = "To Do"; // set this up to be a function that dynamically changes

export function toDoObj(name, dueDate, notes, listName, toDosArray) {
    this.name = name;
    this.dueDate = dueDate;
    this.notes = notes;
    this.listName = listName;
    console.log(this.listName);
    toDosArray.push(this);
    index.drawTheDOM();
}

export function addToDoObj(toDosArray){
    let addNewToDoBtn = document.querySelector("#new-to-do-item-btn");
    addNewToDoBtn.addEventListener("click", () => {
        if (newToDoNameInput.value === "") {
            alert("The to do name was empty, please type in a name");
        } else {
            inputDiv.style.display = "none";
            let newToDoName = newToDoNameInput.value;
            let newToDoDue = newToDoDueInput.value;
            let newToDoNote = newToDoNotesInput.value;
            new toDoObj(newToDoName, newToDoDue, newToDoNote, listName, toDosArray);
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

export function clearToDoLocalStorage(toDosArray) {
    let clearToDos = document.querySelector("#clear-to-do-local-storage");
    clearToDos.addEventListener("click", () => {
        if (confirm("Click 'OK' if you do want to delete ALL your To Do items.")) {
            toDosArray = storage.setArrayVar(toDosArray, "to-do-items");
            storage.removeItem("to-do-items");
        } else {
            alert("You did not delete you To Do items.");
        }
    });
}

export function clearCompletedToDosLocalStorage(completedArray) {
    let clearCompleted = document.querySelector("#clear-completed-local-storage");
    clearCompleted.addEventListener("click", () => {
        if (confirm("Click 'OK' if you do want to delete ALL your to dos under the completed section.")) {
            completedArray = storage.setArrayVar(completedArray, "completed");
            storage.removeItem("completed");
        } else {
            alert("You did not delete your list of completed to dos.");
        }
    });
}

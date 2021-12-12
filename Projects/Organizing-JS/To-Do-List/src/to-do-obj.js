import * as storage from "./local-storage";
import * as index from "./index";

let addNewToDo = document.querySelector("#add-to-do-btn");
let inputDiv = document.querySelector("#new-to-do-item-inputs");
let newToDoDueInput = document.querySelector("#new-to-do-due");
let newToDoNameInput = document.querySelector("#new-to-do-item");
let newToDoNotesInput = document.querySelector("#new-to-do-item-notes");
let toDoErrorSpan = document.querySelector("#to-do-error-span");
let currentList = "To Do";
let listName = currentList; 

export function toDoObj(name, dueDate, notes, listName, toDosArray) {
    this.name = name;
    this.dueDate = dueDate;
    this.notes = notes;
    this.listName = listName;
    toDosArray.push(this);
    storage.save(toDosArray, "to-do-items");
    index.drawTheDOM();
} 

export function addToDoObj(toDosArray){
    let addNewToDoBtn = document.querySelector("#new-to-do-item-btn");
    addNewToDoBtn.addEventListener("click", () => {
        if (newToDoNameInput.value === "") {
            toDoErrorSpan.textContent = "Please do not leave the name blank";
        } else {
            toDoErrorSpan.textContent = "";
            toDosArray = storage.setArrayVar(toDosArray, "to-do-items");
            inputDiv.style.display = "none";
            currentList = document.querySelector(".text-info").textContent;
            listName = currentList;
            let newToDoName = newToDoNameInput.value;
            let newToDoDue = newToDoDueInput.value;
            let newToDoNote = newToDoNotesInput.value;
            new toDoObj(newToDoName, newToDoDue, newToDoNote, listName, toDosArray);
        }
    });
}

newToDoNameInput.addEventListener("input", function() {
    if (newToDoNameInput.validity.valid) {
        toDoErrorSpan.textContent = "";
    } else {
        toDoErrorSpan.textContent = "Please do not leave the name blank";
    }
});

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

import * as storage from "./local-storage";
import * as index from "./index";

let addNewToDo = document.querySelector("#add-to-do-btn");
let inputDiv = document.querySelector("#new-to-do-item-inputs");
let newToDoDueInput = document.querySelector("#new-to-do-due");
let newToDoNameInput = document.querySelector("#new-to-do-item");
let UL = document.createElement("ul");
let itemArray = [];
let completedArray = [];
let toDoDataNum = 0;
let dueSpacerText = "  |  due:  ";
UL.setAttribute("class", "list-group");

export function setItemArrayVarBasedOnStorage() {
    if ((localStorage.getItem("to-do-items") === null) ||
    (localStorage.getItem("to-do-items") === undefined)) {
        if (itemArray.length === 0) {
            new toDoObj("*example to do*", index.getTodaysDate());
        }
    } else {
        itemArray = storage.fetchLocalStorage(itemArray);
        drawToDoList(itemArray);
    }
}

export function toDoObj(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
    itemArray.push(this);
    drawToDoList(itemArray);
}

export function drawToDoList(itemArray) {
    clearToDoItems();
    itemArray.forEach((item) => {
        noDueDate(item);
        let toDoDiv = document.querySelector("#to-do-0"); // need to pull from somewhere else
        let LI = document.createElement("li");
        let checkBox = document.createElement("input");
        let deleteButton = document.createElement("button");
        LI.setAttribute("class", "list-group-item to-do-li");
        deleteButton.setAttribute("class", "btn btn-sm btn-outline-danger ms-3 delete-btn");
        deleteButton.setAttribute("type", "button");
        deleteButton.textContent = "delete";
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "form-check-input me-3");
        toDoDiv.append(UL);
        UL.append(LI); 
        LI.append(checkBox);
        LI.append(item.name);
        LI.append(dueSpacerText);
        LI.append(item.dueDate);
        LI.append(deleteButton);
        setDOMDataNum(LI, deleteButton, checkBox);
    });
    storage.save(itemArray);
    deleteToDoLI();
    checkOffToDo();
    drawCompletedToDos(completedArray);
}

function noDueDate(item) {
    if (item.dueDate === "") {
        item.dueDate = " - no due date";
    }
}

function drawCompletedToDos(completedArray) {
    let completedDiv = document.querySelector("#completed-to-dos-ul");
    completedArray.forEach((item) => {
        let li = document.createElement("li");
        li.append(item.name);
        return completedDiv.append(li);
    });
}

function setDOMDataNum(LI, deleteButton, checkBox) {
    toDoDataNum = 0;
    let liElements = document.querySelectorAll(".to-do-li");
    liElements.forEach(() => {
        LI.setAttribute("data", `item-${toDoDataNum}`);
        deleteButton.setAttribute("data-delete-num", `${toDoDataNum}`);
        checkBox.setAttribute("data-check-box", `${toDoDataNum}`);
        toDoDataNum++;
    });
}

function clearToDoItems() {
    let toDoLIItems = document.querySelectorAll(".to-do-li");
    toDoLIItems.forEach((liItem) => {
        liItem.remove();
    });
}

export function addToDoObj(){
    let addNewToDoBtn = document.querySelector("#new-to-do-item-btn");
    addNewToDoBtn.addEventListener("click", () => {
        if (newToDoNameInput.value === "") {
            alert("The to do name was empty, please type in a name");
        } else {
            inputDiv.style.display = "none";
            let newToDoName = newToDoNameInput.value;
            let newToDoDue = newToDoDueInput.value;
            new toDoObj(newToDoName, newToDoDue);
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

function deleteToDoLI() {
    let deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((button) => {
        button.addEventListener("click", () => {
            let toDoItemNum = Number(button.dataset.deleteNum);
            itemArray.splice(toDoItemNum, 1);
            return drawToDoList(itemArray);
        });
    });
}

export function checkOffToDo() {
    let checkBoxes = document.querySelectorAll(".form-check-input");
    checkBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            let checkBoxNum = Number(box.dataset.checkBox);
            itemArray.splice(checkBoxNum, 1);
            console.log(checkBoxNum);
            completedArray.push(itemArray[checkBoxNum - 1]);
            return drawToDoList(itemArray);
        });
    });
}

export function clearToDoLocalStorage() {
    let clearToDos = document.querySelector("#clear-to-do-local-storage");
    clearToDos.addEventListener("click", () => {
        if (confirm("Click 'OK' if you do want to delete ALL your To Do items.")) {
            storage.clear(itemArray);
        } else {
            alert("You did not delete you To Do items.");
        }
    });
}

import { save, fetchLocalStorage } from "./local-storage";

let addNewToDo = document.querySelector("#add-to-do-btn");
let inputDiv = document.querySelector("#new-to-do-item-inputs");
let newToDoDueInput = document.querySelector("#new-to-do-due");
let newToDoNameInput = document.querySelector("#new-to-do-item");
let UL = document.createElement("ul");
let itemArray = [];
let toDoDataNum = 0;
let dueSpacerText = "  |  due:  ";
UL.setAttribute("class", "list-group");

export function setItemArrayVarBasedOnStorage() {
    if ((localStorage.getItem("to-do-items") === null) ||
    (localStorage.getItem("to-do-items") === undefined)) {
        if (itemArray.length === 0) {
            new toDoObj("*example to do*", getTodaysDate());
        }
    } else {
        itemArray = fetchLocalStorage(itemArray);
        drawToDoList(itemArray);
    }
}

export function toDoObj(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
    itemArray.push(this);
    drawToDoList(itemArray);
}

function drawToDoList(itemArray) {
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
        setDOMDataNum(LI, deleteButton);
    });
    save(itemArray);
    return deleteToDoLI();
}

function noDueDate(item) {
    if (item.dueDate === "") {
        item.dueDate = " - no due date";
    }
}

function setDOMDataNum(LI, deleteButton) {
    toDoDataNum = 0;
    let liElements = document.querySelectorAll(".to-do-li");
    liElements.forEach(() => {
        LI.setAttribute("data", `item-${toDoDataNum}`);
        deleteButton.setAttribute("data-delete-num", `${toDoDataNum}`);
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

export function clearToDoLocalStorage() {
    let clearToDos = document.querySelector("#clear-to-do-local-storage");
    clearToDos.addEventListener("click", () => {
        localStorage.clear("to-do-items");
        itemArray = [];
        save(itemArray);
        drawToDoList(itemArray);
    });
}

// Move this function to index.js
export function getTodaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${year}-${month}-${day}`;
}
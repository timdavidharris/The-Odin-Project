import * as storage from "./local-storage";

let addNewToDo = document.querySelector("#add-to-do-btn");
let inputDiv = document.querySelector("#new-to-do-item-inputs");
let newToDoDueInput = document.querySelector("#new-to-do-due");
let newToDoNameInput = document.querySelector("#new-to-do-item");
let UL = document.createElement("ul");
let completedArray = [];
let toDoDataNum = 0;
let dueSpacerText = "  |  due:  ";
let noDueDateText = " - no due date";
UL.setAttribute("class", "list-group");

export function toDoObj(name, dueDate, inputArray) {
    this.name = name;
    this.dueDate = dueDate;
    inputArray.push(this);
    drawToDoList(inputArray);
}

export function drawToDoList(inputArray) {
    clearToDoItems();
    inputArray.forEach((item) => {
        item.dueDate === "" ? item.dueDate = noDueDateText : item.dueDate;
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
    storage.save(inputArray, "to-do-items");
    deleteToDoLI(inputArray);
    checkOffToDo(inputArray);
    drawCompletedToDos(completedArray);
}

function drawCompletedToDos(completedArray) {
    let completedDiv = document.querySelector("#completed-to-dos-ul");
    completedArray.forEach((item) => {
        console.log(item.name);
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

function deleteToDoLI(inputArray) {
    let deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((button) => {
        button.addEventListener("click", () => {
            let toDoItemNum = Number(button.dataset.deleteNum);
            inputArray.splice(toDoItemNum, 1);
            return drawToDoList(inputArray);
        });
    });
}

export function checkOffToDo(inputArray) {
    let checkBoxes = document.querySelectorAll(".form-check-input");
    checkBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            let checkBoxNum = Number(box.dataset.checkBox);
            inputArray.splice(checkBoxNum, 1);
            console.log(checkBoxNum);
            completedArray.push(inputArray[checkBoxNum - 1]);
            return drawToDoList(inputArray);
        });
    });
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

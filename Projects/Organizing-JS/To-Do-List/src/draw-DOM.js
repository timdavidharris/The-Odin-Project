import * as storage from "./local-storage";

let dueSpacerText = "  |  due:  ";
let noDueDateText = " - no due date";
let toDoDataNum = 0;
let completedArray = [];
let UL = document.createElement("ul");
UL.setAttribute("class", "list-group");

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

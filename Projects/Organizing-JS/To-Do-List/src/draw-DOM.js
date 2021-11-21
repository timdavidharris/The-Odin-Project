import * as storage from "./local-storage";

let dueSpacerText = "  |  due:  ";
let noDueDateText = " - no due date";
let toDoDataNum = 0;
let completedArray = [];
let UL = document.createElement("ul");
UL.setAttribute("class", "list-group");

// to do items DOM set up below
export function drawToDoList(toDosArray) {
    clearToDoItems();
    toDosArray.forEach((item) => {
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
    storage.save(toDosArray, "to-do-items");
    deleteToDoLI(toDosArray);
    checkOffToDo(toDosArray);
    drawCompletedToDos(completedArray);
}


// figure out why the names do not match when this runs
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

function deleteToDoLI(toDosArray) {
    let deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((button) => {
        button.addEventListener("click", () => {
            let toDoItemNum = Number(button.dataset.deleteNum);
            toDosArray.splice(toDoItemNum, 1);
            return drawToDoList(toDosArray);
        });
    });
}

export function checkOffToDo(toDosArray) {
    let checkBoxes = document.querySelectorAll(".form-check-input");
    checkBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            let checkBoxNum = Number(box.dataset.checkBox);
            toDosArray.splice(checkBoxNum, 1);
            console.log(checkBoxNum);
            completedArray.push(toDosArray[checkBoxNum - 1]);
            return drawToDoList(toDosArray);
        });
    });
}

import * as storage from "./local-storage";

let dueSpacerText = "  |  due:  ";
let noDueDateText = " - no due date";
let toDoDataNum = 0;
let UL = document.createElement("ul");
UL.setAttribute("class", "list-group");

// to do items DOM set up below
export function drawToDoList(toDosArray, completedArray) {
    clearToDoItems();
    toDosArray.forEach((item) => {
        item.dueDate === "" ? item.dueDate = noDueDateText : item.dueDate;
        let toDoDiv = document.querySelector("#to-do-0");
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
    deleteToDoLI(toDosArray, completedArray);
    checkOffToDo(toDosArray, completedArray);
    if (completedArray.length > 0) {
        drawCompletedToDos(completedArray);
    }
}


// figure out why the names do not match when this runs
function drawCompletedToDos(completedArray) {
    let completedDiv = document.querySelector("#completed-to-dos-ul");
    clearCompletedToDos();
    completedArray.forEach((item) => {
        let li = document.createElement("li");
        li.setAttribute("class", "completed-li");
        completedDiv.append(li);
        li.append(item.name);
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

function clearCompletedToDos() {
    let liItems = document.querySelectorAll(".completed-li");
    liItems.forEach((liItem) => {
        liItem.remove();
    });
}

function deleteToDoLI(toDosArray, completedArray) {
    let deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((button) => {
        button.addEventListener("click", () => {
            let toDoItemNum = Number(button.dataset.deleteNum);
            toDosArray.splice(toDoItemNum, 1);
            return drawToDoList(toDosArray, completedArray);
        });
    });
}

export function checkOffToDo(toDosArray, completedArray) {
    let checkBoxes = document.querySelectorAll(".form-check-input");
    checkBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            let checkBoxNum = Number(box.dataset.checkBox);
            completedArray.push(toDosArray[checkBoxNum]);
            toDosArray.splice(checkBoxNum, 1);
            storage.save(completedArray, "completed");
            storage.save(toDosArray, "to-do-items");
            return drawToDoList(toDosArray, completedArray);
        });
    });
}

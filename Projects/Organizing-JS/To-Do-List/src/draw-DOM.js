import * as storage from "./local-storage";

let dueSpacerText = "  |  due:  ";
let noDueDateText = " - no due date";
let toDoDataNum = 0;
let UL = document.createElement("ul");
UL.setAttribute("class", "list-group");

// to do items DOM set up below
export function drawToDoList(toDosArray, completedArray) {
    console.log(`drawToDoList ${completedArray}`);
    clearItems(".to-do-li");
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
    if (completedArray !== undefined) {
        drawCompletedToDos(completedArray);
        storage.save(completedArray, "completed");
    }
    completedArray = storage.setArrayVar(completedArray, "completed");
    storage.save(toDosArray, "to-do-items");
    checkOffToDo(toDosArray, completedArray);
    deleteToDoLI(toDosArray, completedArray);
}


// figure out why the names do not match when this runs
function drawCompletedToDos(completedArray) {
    console.log(`drawCompletedToDos ${completedArray}`);
    let completedDiv = document.querySelector("#completed-to-dos-ul");
    clearItems(".completed-li");
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

function clearItems(domSelector) {
    let toDoLIItems = document.querySelectorAll(domSelector);
    toDoLIItems.forEach((liItem) => {
        liItem.remove();
    });
}

function deleteToDoLI(toDosArray, array) {
    let deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((button) => {
        button.addEventListener("click", () => {
            let toDoItemNum = Number(button.dataset.deleteNum);
            toDosArray.splice(toDoItemNum, 1);
            let completedArray = array;
            console.log(`deleteToDoLI ${completedArray}`);
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
            console.log(`checkOffToDo ${completedArray}`);
            toDosArray.splice(checkBoxNum, 1);
            return drawToDoList(toDosArray, completedArray);
        });
    });
}

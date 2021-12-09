import * as storage from "./local-storage";
// import * as index from "./index";

let dueSpacerText = "  |  due:  ";
let noDueDateText = " - no due date";
let toDoDataNum = 0;
let UL = document.createElement("ul");
let listArray = [];
let toDosArray = [];
let completedArray = [];
completedArray = storage.setArrayVar(completedArray, "completed");
toDosArray = storage.setArrayVar(toDosArray, "to-do-items");
listArray = storage.setArrayVar(listArray, "lists");
let currentListNum = 0;
UL.setAttribute("class", "list-group");

export function activeListColor() {
    let linkText = document.querySelectorAll(".list-link");
    linkText.forEach((link) => {
        link.addEventListener("click", () => {
            resetColors(linkText);
            link.setAttribute("class", "nav-item added-list list-link text-info");
            currentListNum = link.dataset.listNum;
            toDosArray = storage.setArrayVar(toDosArray, "to-do-items");
            completedArray = storage.setArrayVar(completedArray, "completed");
            toDoList(toDosArray, completedArray);
        });
    });
    function resetColors(linkText) {
        let dataNum = 0;
        linkText.forEach((link) => {
            link.setAttribute("class", "nav-item added-list list-link text-primary");
            link.setAttribute("data-list-num", `${dataNum}`);
            dataNum++;
        });
    }
}

export function toDoList(toDosArray, completedArray) {
    clearItems(".to-do-li");
    listArray = storage.setArrayVar(listArray, "lists");
    let filteredArray = toDosArray.filter(function(todo) {
        return todo.listName === listArray[currentListNum].name;
    });
    filteredArray.forEach((item) => {
        item.dueDate === "" ? item.dueDate = noDueDateText : item.dueDate;
        let toDoDiv = document.querySelector("#to-do-list-items");
        let LI = document.createElement("li");
        let checkBox = document.createElement("input");
        let deleteButton = document.createElement("button");
        let notesButton = document.createElement("button");
        LI.setAttribute("class", "list-group-item to-do-li");
        deleteButton.setAttribute("class", "btn btn-sm btn-outline-danger ms-3 delete-btn");
        deleteButton.setAttribute("type", "button");
        deleteButton.textContent = "delete";
        notesButton.setAttribute("class", "btn btn-sm btn-outline-secondary ms-3 note-btn");
        notesButton.setAttribute("type", "button");
        notesButton.textContent = "click for notes";
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "form-check-input me-3");
        toDoDiv.append(UL);
        UL.append(LI); 
        LI.append(checkBox);
        LI.append(item.name);
        LI.append(dueSpacerText);
        LI.append(item.dueDate);
        LI.append(deleteButton);
        LI.append(notesButton);
        setDOMDataNum(LI, deleteButton, checkBox, notesButton);
    });
    if (completedArray !== undefined) {
        drawCompletedToDos(completedArray);
        storage.save(completedArray, "completed");
    }
    completedArray = storage.setArrayVar(completedArray, "completed");
    storage.save(toDosArray, "to-do-items");
    checkOffToDo(filteredArray, completedArray);
    deleteToDoLI(filteredArray, completedArray);
    showNotes(filteredArray);
}

export function listLinks(listArray) {
    clearItems(".added-list");
    let currentListName = listArray[currentListNum].name;
    listArray.forEach((item) => {
        let parentUL = document.querySelector("#ul-nav-items");
        let li = document.createElement("li");
        let aTag = document.createElement("a");
        let h3 = document.createElement("h3");
        h3.setAttribute("class", "list-link")
        li.setAttribute("class", "nav-item added-list");
        aTag.setAttribute("class", "nav-link list-a-tag"),
        aTag.setAttribute("id", `${item.name}`),
        aTag.setAttribute("href", "#");
        parentUL.append(li);
        li.append(aTag);
        aTag.append(h3);
        h3.append(item.name);
        if (item.name === currentListName) {
            h3.setAttribute("class", "nav-item added-list list-link text-info");
        }
    });
    activeListColor();
    return storage.save(listArray, "lists");
}

function drawCompletedToDos(completedArray) {
    let completedDiv = document.querySelector("#completed-to-dos-ul");
    clearItems(".completed-li");
    completedArray.forEach((item) => {
        let li = document.createElement("li");
        li.setAttribute("class", "completed-li");
        completedDiv.append(li);
        li.append(item.name);
    });
}

// sets the data numbers to match the array number for each LI item
function setDOMDataNum(LI, deleteButton, checkBox, notesButton) {
    toDoDataNum = 0;
    let liElements = document.querySelectorAll(".to-do-li");
    liElements.forEach(() => {
        LI.setAttribute("data-li", `${toDoDataNum}`);
        deleteButton.setAttribute("data-delete-num", `${toDoDataNum}`);
        checkBox.setAttribute("data-check-box", `${toDoDataNum}`);
        notesButton.setAttribute("data-notes-btn", `${toDoDataNum}`);
        toDoDataNum++;
    });
}

export function clearItems(domSelector) {
    let theItems = document.querySelectorAll(domSelector);
    theItems.forEach((item) => {
        item.remove();
    });
}

// Button-related Functions
function deleteToDoLI(toDosArray, completedArray) {
    let deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((button) => {
        button.addEventListener("click", () => {
            let toDoItemNum = Number(button.dataset.deleteNum);
            toDosArray.splice(toDoItemNum, 1);
            return toDoList(toDosArray, completedArray);
        });
    });
}

function checkOffToDo(filteredArray, completedArray) {
    let checkBoxes = document.querySelectorAll(".form-check-input");
    checkBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            let checkBoxNum = Number(box.dataset.checkBox);
            completedArray.push(filteredArray[checkBoxNum]);
            toDosArray = toDosArray.filter(function(item) {
                return item.name !== filteredArray[checkBoxNum].name;
            });
            return toDoList(toDosArray, completedArray);
        });
    });
}

function showNotes(toDosArray) {
    let notesBtns = document.querySelectorAll(".note-btn");
    notesBtns.forEach((button) => {
        button.addEventListener("click", () => {
            let li = document.querySelectorAll(".to-do-li");
            li.forEach((item) => {
                item.addEventListener("click", () => {
                    clearItems(".notes-para");
                    let liNum = Number(item.dataset.li);
                    let notesLI = document.createElement("li");
                    notesLI.setAttribute("class", "notes-para ms-5");
                    if (toDosArray[liNum].notes === "") {
                        notesLI.textContent = "No notes";
                    } else {
                        notesLI.textContent = toDosArray[liNum].notes;
                    }
                    item.append(notesLI);
                });
            });
        });
    });
}
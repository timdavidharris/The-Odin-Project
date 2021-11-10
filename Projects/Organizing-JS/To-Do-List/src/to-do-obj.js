export { toDoObj, toggleToDoInputOnClick, newToDoBtnListener, getTodaysDate };

let addNewToDo = document.querySelector("#add-to-do-btn");
let inputDiv = document.querySelector("#new-to-do-item-inputs");
let newToDoDueInput = document.querySelector("#new-to-do-due");
let newToDoNameInput = document.querySelector("#new-to-do-item");
let UL = document.createElement("ul");
let itemArray = [];
let toDoObjNum = 0;
let dueSpacerText = "  |  due:  ";
UL.setAttribute("class", "list-group");

function toDoObj(name, due) {
    this.name = name;
    this.due = due;
    itemArray.push(this);
    drawToDoList(itemArray);
}

function drawToDoList(itemArray) {
    clearToDoItems();
    itemArray.forEach((item) => {
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
        if (item.due === "") {
            item.due = " - no due date";
        }
        toDoDiv.append(UL);
        UL.append(LI); 
        LI.append(checkBox);
        LI.append(item.name);
        LI.append(dueSpacerText);
        LI.append(item.due);
        LI.append(deleteButton);
        setDOMItemNum(LI, deleteButton);
        
    });
    return deleteBtnOnClick();
}

function setDOMItemNum(LI, deleteButton) {
    toDoObjNum = 0;
    let deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach(() => {
        LI.setAttribute("data", `item-${toDoObjNum}`);
        deleteButton.setAttribute("data-delete-num", `${toDoObjNum}`);
        toDoObjNum++;
    });
}

function clearToDoItems() {
    let toDoLIItems = document.querySelectorAll(".to-do-li");
    toDoLIItems.forEach((liItem) => {
        liItem.remove();
    });
}

function toggleToDoInputOnClick() {
    inputDiv.style.display = "none";
    addNewToDo.addEventListener("click", () => {
        if (inputDiv.style.display === "contents") {
            inputDiv.style.display = "none";
        } else {
            inputDiv.style.display = "contents";
        }
    }) ;
}

function newToDoBtnListener(){
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

function deleteBtnOnClick() {
    let deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(itemArray);
            let toDoItemNum = Number(button.dataset.deleteNum);
            itemArray.splice(toDoItemNum, 1);
            return drawToDoList(itemArray);
        });
    });
}

function getTodaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${year}-${month}-${day}`;
}
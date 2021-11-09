export { toDoObj, toggleToDoInputOnClick, newToDoBtnListener, getTodaysDate };

let addNewToDo = document.querySelector("#add-to-do-btn");
let inputDiv = document.querySelector("#new-to-do-item-inputs");
let newToDoDueInput = document.querySelector("#new-to-do-due");
let newToDoNameInput = document.querySelector("#new-to-do-item");
let UL = document.createElement("ul");
let toDoObjNum = 0;
let itemArray = [];
let dueSpacerText = "  |  due:  ";
UL.setAttribute("class", "list-group");

function toDoObj(name, due) {
    this.name = name;
    this.due = due;
    this.objNum = toDoObjNum;
    itemArray.push(this);
    appendNewToDo(this);
    toDoObjNum++;
}

function appendNewToDo(obj) {
    let toDoDiv = document.querySelector("#to-do-0"); // need to pull from somewhere else
    let LI = document.createElement("li");
    let checkBox = document.createElement("input");
    let deleteButton = document.createElement("button");
    LI.setAttribute("class", "list-group-item");
    LI.setAttribute("data", `item-${obj.objNum}`);
    deleteButton.setAttribute("class", "btn btn-sm btn-outline-danger ms-3");
    deleteButton.setAttribute("type", "button");
    deleteButton.textContent = "delete";
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "form-check-input me-3");
    if (obj.due === "") {
        obj.due = " - no due date";
    }
    toDoDiv.append(UL);
    UL.append(LI); 
    LI.append(checkBox);
    LI.append(obj.name);
    LI.append(dueSpacerText);
    LI.append(obj.due);
    LI.append(deleteButton);
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

function getTodaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${year}-${month}-${day}`;
}
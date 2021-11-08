export { toDoObj, toggleToDoInputOnClick, newToDoBtnListener, getTomorrowsDate };

let addNewToDo = document.querySelector("#add-to-do-btn");
let inputDiv = document.querySelector("#new-to-do-item-inputs");
let newToDoDueInput = document.querySelector("#new-to-do-due");
let newToDoNameInput = document.querySelector("#new-to-do-item");
let UL = document.createElement("ul");
UL.setAttribute("class", "list-group");
let toDoObjNum = 0;
let itemArray = [];

function toDoObj(name, due) {
    this.name = name;
    this.due = due;
    this.objNum = toDoObjNum;
    itemArray.push(this);
    console.log(itemArray);
    appendNewToDo(this);
    toDoObjNum++;
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
    if (obj.due === " - due: ") {
        obj.due = " - no due date";
    }
    toDoDiv.append(UL);
    UL.append(LI); 
    LI.append(checkBox);
    LI.append(obj.name);
    LI.append(obj.due);
    console.log(obj.due);
    LI.append(deleteButton);
    console.log(deleteButton);
}

function newToDoBtnListener(){
    let addNewToDoBtn = document.querySelector("#new-to-do-item-btn");
    addNewToDoBtn.addEventListener("click", () => {
        if (newToDoNameInput.value === "") {
            alert("The to do name was empty, please type in a name");
        } else {
            inputDiv.style.display = "none";
            let newToDoName = newToDoNameInput.value;
            let newToDoDue = " - due: " + newToDoDueInput.value;
            new toDoObj(newToDoName, newToDoDue);
        }
    });
}

function getTomorrowsDate() {
    let tomorrow = new Date();
    let day = tomorrow.getDate() + 1;
    let month = tomorrow.getMonth() + 1;
    let year = tomorrow.getFullYear();
    console.log(year, month, day);
    return ` - ${year}-${month}-${day}`;
}
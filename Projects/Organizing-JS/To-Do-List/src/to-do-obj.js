export { createToDoItem, toDoUL, toggleNewToDoInputDiv, newToDoBtnListener };

let addNewToDo = document.querySelector("#add-to-do-btn");
let inputDiv = document.querySelector("#new-to-do-item-inputs");
let addNewToDoInput = document.querySelector("#new-to-do-item");
let itemNum = 0;
let UL = document.createElement("ul");
let itemArray = [];

function toDoObj(name, due) {
    this.name = name;
    this.due = due;
    itemArray.push(this);
    console.log(itemArray);
}

function toDoUL() {
    UL.setAttribute("class", "list-group");
}

function toggleNewToDoInputDiv() {
    inputDiv.style.display = "none";
    addNewToDo.addEventListener("click", () => {
        if (inputDiv.style.display === "contents") {
            inputDiv.style.display = "none";
        } else {
            inputDiv.style.display = "contents";
        }
    }) ;
}

function createToDoItem(name, due) {
    let toDoDiv = document.querySelector("#to-do-0"); // need to pull from somewhere else
    let newToDo = new toDoObj(name, due);
    let LI = document.createElement("li");
    let checkBox = document.createElement("input");
    let deleteButton = document.createElement("button");
    LI.setAttribute("class", "list-group-item");
    LI.setAttribute("data", `item-${itemNum}`);
    deleteButton.setAttribute("class", "btn btn-sm btn-outline-danger ms-3");
    deleteButton.setAttribute("type", "button");
    deleteButton.textContent = "delete";
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "form-check-input me-3");
    toDoDiv.append(UL);
    UL.append(LI); 
    LI.append(checkBox);
    LI.append(newToDo.name);
    LI.append(newToDo.due);
    LI.append(deleteButton);
    itemNum++;
}

function newToDoBtnListener(){
    let addNewToDoBtn = document.querySelector("#new-to-do-item-btn");
    addNewToDoBtn.addEventListener("click", () => {
        if (addNewToDoInput.value === '') {
            alert("The to do name was empty, please type in a name");
        } else {
            inputDiv.style.display = "none";
            let newToDoName = addNewToDoInput.value;
            new toDoObj(newToDoName);
        }
    });
}
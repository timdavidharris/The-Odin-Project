export { toDoItem, addNewItemButton, toDoUL }

let itemNum = 0;
let UL = document.createElement('ul');

function toDo(name, due) {
    this.name = name 
    this.due = due 
}

function toDoUL() {
    UL.setAttribute('class', 'list-group');
}

function toDoItem(name, due) {
    let toDoDiv = document.querySelector('#to-do-0'); // need to pull from somewhere else
    let newToDo = new toDo(name, due);
    let LI = document.createElement('li');
    LI.setAttribute('class', 'list-group-item');
    LI.setAttribute('data', `item-${itemNum}`);
    let checkBox = document.createElement('input');
    checkBox.setAttribute('class', 'form-check-input me-3');
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'btn btn-sm btn-outline-danger ms-3');
    deleteButton.setAttribute('type', 'button');
    checkBox.setAttribute('type', 'checkbox');
    deleteButton.textContent = "delete";
    toDoDiv.append(UL);
    UL.append(LI); 
    LI.append(checkBox);
    LI.append(newToDo.name);
    LI.append(newToDo.due);
    LI.append(deleteButton);
    itemNum++;
}

function addNewItemButton() {
    let addNewToDoLI = document.createElement('li');
    addNewToDoLI.setAttribute('class', 'list-group-item');
    let addNewToDoButton = document.createElement('button');
    addNewToDoButton.textContent = "Add To Do";
    addNewToDoButton.setAttribute('class', 'btn btn-sm btn-outline-success');
    addNewToDoButton.setAttribute('type', 'button');
    UL.append(addNewToDoLI); 
    addNewToDoLI.append(addNewToDoButton);
}
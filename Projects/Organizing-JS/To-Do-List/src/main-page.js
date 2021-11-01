export { toDoItem }

let itemNum = 0;
const toDoDiv = document.querySelector('#to-do-1');
let UL = document.createElement('ul');

function toDoUL() {
    UL.setAttribute('class', 'list-group');
}

function toDoItem(item) {
    toDoUL();
    let toDoName = item;
    let LI = document.createElement('li');
    LI.setAttribute('class', 'list-group-item');
    LI.setAttribute('data', `item-${itemNum}`)
    let Input = document.createElement('input');
    Input.setAttribute('class', 'form-check-input me-3');
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'btn btn-sm btn-outline-danger ms-3');
    deleteButton.setAttribute('type', 'button');
    Input.setAttribute('type', 'checkbox');
    deleteButton.textContent = "delete";
    toDoDiv.append(UL);
    UL.append(LI); 
    LI.append(Input);
    LI.append(toDoName);
    LI.append(deleteButton);
    addNewButton();
    itemNum++;
}

function addNewButton() {
    let addNewToDoLI = document.createElement('li');
    addNewToDoLI.setAttribute('class', 'list-group-item');
    let addNewToDoButton = document.createElement('button');
    addNewToDoButton.textContent = "Add New";
    addNewToDoButton.setAttribute('class', 'btn btn-sm btn-outline-success');
    addNewToDoButton.setAttribute('type', 'button');
    UL.append(addNewToDoLI); 
    addNewToDoLI.append(addNewToDoButton);
}
export { createToDoTab, newListOnClick, newListBtnListener };

const addNewListBtn = document.querySelector('#add-list-btn');
let addNewListInput = document.querySelector('#new-to-do-input');
let toDoParentDiv = document.querySelector('#to-do-items');
let tabNum = 1;

function list(name) {
    this.name = name
    createToDoTab();
}

function createToDoTab() {
    let newTab = document.createElement('div');
    newTab.setAttribute('id', `to-do-${tabNum}`);
    toDoParentDiv.append(newTab);
    tabNum++;
}

function newListOnClick() {
    addNewListBtn.addEventListener('click', () => {
        displayOn();
    });
};

function displayOn() {
    let inputDiv = document.querySelector('#new-to-do-input-div');
    inputDiv.style.display = 'contents';
    newListBtnListener(inputDiv);
}

function newListBtnListener(inputDiv) {
    let addNewListBtn = document.querySelector('#new-to-do-list-btn');
    addNewListBtn.addEventListener('click', () => {
        let newListName = addNewListInput.value;
        let newList = new list(newListName);
        inputDiv.style.display = 'none';
    });
}
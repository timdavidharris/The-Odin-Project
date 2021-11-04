import { createToDoTab } from './tab-obj';
export { list, createToDoTab };

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
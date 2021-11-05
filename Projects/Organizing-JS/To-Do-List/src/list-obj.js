export { createToDoTab, newListOnClick, btnListener };

const addNewListBtn = document.querySelector("#add-list-btn");
let addNewListInput = document.querySelector("#new-to-do-input");
let toDoParentDiv = document.querySelector("#to-do-items");
let inputDiv = document.querySelector("#new-to-do-input-div");
let listNum = 0;
let objNum = 0;
let listArray = [];

function listObj(name) {
    this.name = name;
    this.objNum = objNum;
    listArray.push(this);
    appendNewItem(this);
    objNum++;
    console.log("listObj > appendNewItem");
}

function appendNewItem(objInput) {
    let parentUL = document.querySelector("#ul-nav-items");
    let newLI = document.createElement("li");
    let newATag = document.createElement("a");
    newLI.setAttribute("class", "nav-item");
    newATag.setAttribute("class", "nav-link active"),
    newATag.setAttribute("aria-current", "page"),
    newATag.setAttribute("href", "#");
    parentUL.append(newLI);
    newLI.append(newATag);
    newATag.append(objInput.name);
    console.log("appendNewItem");
}

function createToDoTab() {
    let newTab = document.createElement("div");
    newTab.setAttribute("id", `to-do-${listNum}`);
    toDoParentDiv.append(newTab);
    newTab = new listObj("To Do");
    listNum++;
    console.log("CreateToDoTab > listObj");
}

function newListOnClick() {
    addNewListBtn.addEventListener("click", () => {
        inputDiv.style.display = "contents";
        console.log("newListOnClick");
    });
}

function btnListener() {
    let addNewListBtn = document.querySelector("#new-to-do-list-btn");
    addNewListBtn.addEventListener("click", () => {
        if (addNewListInput.value === "") {
            alert("The name box was empty, please type in a name");
        } else {
            inputDiv.style.display = "none";
            let newListName = addNewListInput.value;
            new listObj(newListName);
            console.log("addNewListBtn > listObj");
        }
    });
}
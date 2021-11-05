export { createToDoTab, toggleInputOnClick, btnListener };

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
    appendNewObj(this);
    objNum++;
}

function appendNewObj(objInput) {
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
}

function createToDoTab() {
    let newTab = document.createElement("div");
    newTab.setAttribute("id", `to-do-${listNum}`);
    toDoParentDiv.append(newTab);
    newTab = new listObj("To Do");
    listNum++;
}

function toggleInputOnClick() {
    addNewListBtn.addEventListener("click", () => {
        if (inputDiv.style.display === "contents") {
            inputDiv.style.display = "none";
        } else {
            inputDiv.style.display = "contents";
        }
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
        }
    });
}
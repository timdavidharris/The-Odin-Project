import * as storage from "./local-storage";

const addNewListBtn = document.querySelector("#add-list-btn");
let addNewListInput = document.querySelector("#new-to-do-input");
let toDoParentDiv = document.querySelector("#to-do-items");
let inputDiv = document.querySelector("#new-to-do-input-div");
let listNum = 0;
let listObjNum = 0;

export function listObj(name, listArray) {
    console.log(listArray);
    this.name = name;
    this.objNum = listObjNum;
    listArray.push(this);
    appendNewList(this, listArray);
    listObjNum++;
}

function appendNewList(objInput, listArray) {
    let parentUL = document.querySelector("#ul-nav-items");
    let newLI = document.createElement("li");
    let newATag = document.createElement("a");
    let newH3 = document.createElement("h3");
    newLI.setAttribute("class", "nav-item");
    newATag.setAttribute("class", "nav-link active"),
    newATag.setAttribute("aria-current", "page"),
    newATag.setAttribute("href", "#");
    parentUL.append(newLI);
    newLI.append(newATag);
    newATag.append(newH3);
    newH3.append(objInput.name);
    storage.save(listArray, "lists");
}

export function addListDiv(listArray) {
    let newTab = document.createElement("div");
    newTab.setAttribute("id", `to-do-${listNum}`);
    toDoParentDiv.append(newTab);
    new listObj("To Do", listArray);
    listNum++;
}

export function toggleListInputDisplay() {
    addNewListBtn.addEventListener("click", () => {
        if (inputDiv.style.display === "contents") {
            inputDiv.style.display = "none";
        } else {
            inputDiv.style.display = "contents";
        }
    });
}

export function addListObj(listArray) {
    let addNewListBtn = document.querySelector("#new-to-do-list-btn");
    addNewListBtn.addEventListener("click", () => {
        if (addNewListInput.value === "") {
            alert("The name box was empty, please type in a name");
        } else {
            inputDiv.style.display = "none";
            let newListName = addNewListInput.value;
            new listObj(newListName, listArray);
        }
    });
}
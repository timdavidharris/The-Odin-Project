import * as storage from "./local-storage";
import * as draw from "./draw-DOM";

const addNewListBtn = document.querySelector("#add-list-btn");
let addNewListInput = document.querySelector("#new-to-do-input");
let toDoParentDiv = document.querySelector("#to-do-items");
let inputDiv = document.querySelector("#new-to-do-input-div");
let listNum = 0;
let listObjNum = 0;

export function listObj(name, listArray) {
    this.name = name;
    this.objNum = listObjNum;
    listArray.push(this);
    draw.listLinks(listArray);
    listObjNum++;
}

export function addListDiv() {
    let newTab = document.createElement("div");
    newTab.setAttribute("id", `to-do-${listNum}`);
    toDoParentDiv.append(newTab);
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

export function clearListLocalStorage(listArray) {
    let clearLists = document.querySelector("#clear-lists-local-storage");
    clearLists.addEventListener("click", () => {
        if (confirm("Click 'OK' if you do want to delete ALL your To Do LISTS.")) {
            storage.clear(listArray, "lists");
        } else {
            alert("You did not delete you To Do lists.");
        }
    });
}
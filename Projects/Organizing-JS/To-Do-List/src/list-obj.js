import * as storage from "./local-storage";
import * as draw from "./draw-DOM";

const addNewListBtn = document.querySelector("#add-list-btn");
let addNewListInput = document.querySelector("#new-to-do-input");
let inputDiv = document.querySelector("#new-to-do-input-div");
let errorSpan = document.querySelector("#list-error-span");
let listObjNum = 0;

export function listObj(name, listArray) {
    this.name = name;
    this.objNum = listObjNum;
    listArray.push(this);
    draw.listLinks(listArray);
    listObjNum++;
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
        if (addNewListInput.value !== "") {
            listArray = storage.setArrayVar(listArray, "lists");
            inputDiv.style.display = "none";
            let newListName = addNewListInput.value;
            new listObj(newListName, listArray);
        } else {
            errorSpan.textContent = "Please do not leave blank";
        }
    });
}

addNewListInput.addEventListener("input", function() {
    if (addNewListInput.validity.valid) {
        errorSpan.textContent = "";
    } else {
        errorSpan.textContent = "Please do not leave blank";
        console.log("custom validity");
    }
});


export function clearListLocalStorage(listArray) {
    let clearLists = document.querySelector("#clear-lists-local-storage");
    clearLists.addEventListener("click", () => {
        if (confirm("Click 'OK' if you do want to delete ALL your To Do LISTS.")) {
            listArray = storage.setArrayVar(listArray, "lists");
            storage.removeItem("lists");
        } else {
            alert("You did not delete you To Do lists.");
        }
    });
}
export { toDoObj, toggleToDoInputOnClick, newToDoBtnListener, getTodaysDate };

let addNewToDo = document.querySelector("#add-to-do-btn");
let inputDiv = document.querySelector("#new-to-do-item-inputs");
let newToDoDueInput = document.querySelector("#new-to-do-due");
let newToDoNameInput = document.querySelector("#new-to-do-item");
let UL = document.createElement("ul");
let toDoObjNum = 0;
let itemArray = [];
let dueSpacerText = "  |  due:  ";
UL.setAttribute("class", "list-group");

function toDoObj(name, due) {
    this.name = name;
    this.due = due;
    this.objNum = toDoObjNum;
    itemArray.push(this);
    appendNewToDo(itemArray);
    toDoObjNum++;
}

function appendNewToDo(itemArray) {
    clearToDoItems();
    itemArray.forEach((item) => {
        let toDoDiv = document.querySelector("#to-do-0"); // need to pull from somewhere else
        let LI = document.createElement("li");
        let checkBox = document.createElement("input");
        let deleteButton = document.createElement("button");
        LI.setAttribute("class", "list-group-item to-do-li");
        LI.setAttribute("data", `item-${item.objNum}`);
        deleteButton.setAttribute("class", "btn btn-sm btn-outline-danger ms-3 delete-btn");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("data-delete-num", `${item.objNum}`);
        deleteButton.textContent = "delete";
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "form-check-input me-3");
        if (item.due === "") {
            item.due = " - no due date";
        }
        toDoDiv.append(UL);
        UL.append(LI); 
        LI.append(checkBox);
        LI.append(item.name);
        LI.append(dueSpacerText);
        LI.append(item.due);
        LI.append(deleteButton);
    });
    // return deleteBtnOnClick();
}

function clearToDoItems() {
    let toDoLIItems = document.querySelectorAll(".to-do-li");
    toDoLIItems.forEach((liItem) => {
        liItem.remove();
    });
}

function toggleToDoInputOnClick() {
    inputDiv.style.display = "none";
    addNewToDo.addEventListener("click", () => {
        if (inputDiv.style.display === "contents") {
            inputDiv.style.display = "none";
        } else {
            inputDiv.style.display = "contents";
        }
    }) ;
}

function newToDoBtnListener(){
    let addNewToDoBtn = document.querySelector("#new-to-do-item-btn");
    addNewToDoBtn.addEventListener("click", () => {
        if (newToDoNameInput.value === "") {
            alert("The to do name was empty, please type in a name");
        } else {
            inputDiv.style.display = "none";
            let newToDoName = newToDoNameInput.value;
            let newToDoDue = newToDoDueInput.value;
            new toDoObj(newToDoName, newToDoDue);
        }
    });
}

// function deleteBtnOnClick() {
//     let deleteBtns = document.querySelectorAll(".delete-btn");
//     console.log(deleteBtns);
//     deleteBtns.forEach((button) => {
//         button.addEventListener("click", () => {
//             console.log(itemArray);
//             let toDoItemNum = Number(button.dataset.deleteNum);
//             return itemArray.splice(toDoItemNum, 1),
//             console.log(itemArray);
//         });
//     });
// }

function getTodaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    return `${year}-${month}-${day}`;
}
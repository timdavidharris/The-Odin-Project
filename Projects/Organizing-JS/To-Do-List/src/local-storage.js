let toDoStorage = localStorage.getItem("to-do-list");

export function checkForLocalStorage(itemArray) {
    console.log(typeof toDoStorage);
    if (toDoStorage === null) {
        itemArray = [];
    } else {
        itemArray = JSON.parse(toDoStorage);
    }
    return itemArray;
}

let data = [];
export function save(itemArray) {
    localStorage.setItem("to-do-items", JSON.stringify(itemArray));
    data = JSON.parse(localStorage.getItem("to-do-items") || "[]");
    console.log("saved the array");
    return data;
}

let toDoStorage = localStorage.getItem("to-do-list");

export function setItemArrayWithLocalStorage(itemArray) {
    itemArray = [];
    itemArray = JSON.parse(toDoStorage);
    return itemArray;
}

let data = [];
export function save(itemArray) {
    localStorage.setItem("to-do-items", JSON.stringify(itemArray));
    data = JSON.parse(toDoStorage || "[]");
    console.log(localStorage.getItem("to-do-items"));
    return data;
}

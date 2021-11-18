let toDoStorage = localStorage.getItem("to-do-items");

export function fetchLocalStorage(itemArray) {
    itemArray = JSON.parse(toDoStorage);
    return itemArray;
}

let data = [];
export function save(itemArray) {
    localStorage.setItem("to-do-items", JSON.stringify(itemArray));
    data = JSON.parse(toDoStorage);
    return data;
} 

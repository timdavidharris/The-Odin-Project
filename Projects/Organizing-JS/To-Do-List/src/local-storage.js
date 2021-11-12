export function checkForLocalStorage() {
    let itemArray = localStorage.getItem("to-do-list") ? JSON.parse(localStorage.GetItem("to-do-items")) : [];
    return itemArray;
}

export function save(itemArray) {
    localStorage.setItem("to-do-items", JSON.stringify(itemArray));
    let data = [];
    data = JSON.parse(localStorage.getItem("to-do-items") || "[]");
    console.log(JSON.parse(localStorage.getItem("to-do-items") || "[]"));
    return data;
}

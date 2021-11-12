export function checkForLocalStorage() {
    let itemArrayValue = function() {
        let itemArray = localStorage.getItem("to-do-list") ? JSON.parse(localStorage.GetItem("to-do-items")) : [];
        return itemArray;
    };
    return {
        itemArrayValue,
    };
}

export function save(itemArray) {
    localStorage.setItem("to-do-items", JSON.stringify(itemArray));
    let data = [];
    data = JSON.parse(localStorage.getItem("to-do-items") || "[]");
    console.log(JSON.parse(localStorage.getItem("to-do-items") || "[]"));
    return data;
}

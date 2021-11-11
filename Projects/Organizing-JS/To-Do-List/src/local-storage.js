// the code to keep local storage will go here
import { itemArray } from "./to-do-obj";

export function getItemArray() {
    let storageArray = itemArray;
    console.log(itemArray);
    save(storageArray);
}

function save(storageArray) {
    window.localStorage.setItem("key", JSON.stringify(storageArray));
    const data = JSON.parse(window.localStorage.getItem("key"));
    console.log(window.localStorage.getItem("key"));
    return data;
}

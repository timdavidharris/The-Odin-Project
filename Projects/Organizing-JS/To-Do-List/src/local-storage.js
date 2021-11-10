// the code to keep local storage will go here
import { itemArray } from "./to-do-obj";
export {save};

function save() {
    let toDoArray = [];
    window.localStorage.setItem(toDoArray, JSON.stringify(itemArray));
    console.log(toDoArray);
}
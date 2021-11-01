import _ from 'lodash';
import './style.css';
import './bootstrap.min.css';
import { toDoItem } from './main-page';
import { toDo } from './to-do-obj';
export {lists}

let lists = [];
toDoItem("*example*");
let task = new toDo("eat cheese", "today", "low");
console.log(task);
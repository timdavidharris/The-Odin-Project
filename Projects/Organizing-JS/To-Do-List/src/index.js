import _ from 'lodash';
import './style.css';
import './bootstrap.min.css';
import mainPage from './main-page';
import { toDo } from './to-do-obj';

function test() {
    return console.log("is this thing on?")
}
test(); 
mainPage();
let task = new toDo("eat cheese", "today", "low");
console.log(task);
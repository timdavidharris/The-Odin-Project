import _ from 'lodash';
import './style.css';
import './bootstrap.min.css';
import { createToDoTab } from './tab-obj';
import { toDoItem, addNewItemButton, toDoUL } from './build-to-do';
export { lists };

let lists = [];
createToDoTab();
toDoUL();
toDoItem("*example*", "-tomorrow");
toDoItem("Drink hot coco", "-daily");
addNewItemButton();
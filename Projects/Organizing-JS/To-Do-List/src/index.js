import _ from 'lodash';
import './bootstrap.min.css';
import './style.css';
import { createToDoTab } from './tab-obj';
import { toDoItem, addNewItemButton, toDoUL } from './build-to-do';
import { newListOnClick } from './add-new-list';
export { lists };

let lists = [];
createToDoTab();
toDoUL();
toDoItem("*example*", "-tomorrow");
toDoItem("Drink hot coco", "-daily");
addNewItemButton();
newListOnClick();
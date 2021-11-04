import _ from 'lodash';
import './bootstrap.min.css';
import './style.css';
import {toDoItem, addNewItemButton, toDoUL} from './to-do-obj';
import {createToDoTab, newListOnClick, newListBtnListener} from './list-obj';

createToDoTab();
toDoUL();
toDoItem("*example*", "-tomorrow");
toDoItem("Drink hot coco", "-daily");
addNewItemButton();
newListOnClick();
newListBtnListener();
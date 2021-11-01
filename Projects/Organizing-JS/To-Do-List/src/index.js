import _ from 'lodash';
import './style.css';
import './bootstrap.min.css';
import { toDoItem, addNewItemButton, toDoUL } from './build-to-do';
export { lists };

let lists = [];
toDoUL();
toDoItem("*example*", "-tomorrow");
toDoItem("Drink hot coco", "-daily");
addNewItemButton();
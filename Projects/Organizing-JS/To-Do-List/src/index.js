import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import {toDoItem, addNewItemButton, toDoUL} from "./to-do-obj";
import {createToDoTab, newListOnClick, btnListener } from "./list-obj";

createToDoTab();
btnListener();
newListOnClick();
toDoUL();
toDoItem("*example*", "-tomorrow");
toDoItem("Drink hot coco", "-daily");
addNewItemButton();
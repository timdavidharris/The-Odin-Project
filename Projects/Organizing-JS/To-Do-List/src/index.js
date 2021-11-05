import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import {createToDoItem, addNewItemButton, toDoUL} from "./to-do-obj";
import {createToDoTab, toggleInputOnClick, btnListener } from "./list-obj";

createToDoTab();
btnListener();
toggleInputOnClick();
toDoUL();
addNewItemButton();
createToDoItem("*example*", "-tomorrow");
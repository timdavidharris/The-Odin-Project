import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import {createToDoItem, toDoUL, toggleNewToDoInputDiv, newToDoBtnListener} from "./to-do-obj";
import {createToDoTab, toggleInputOnClick, newListBtnListener } from "./list-obj";

createToDoTab();
newListBtnListener();
toggleInputOnClick();
toggleNewToDoInputDiv();
toDoUL();
newToDoBtnListener();
createToDoItem("*example*", "-tomorrow");
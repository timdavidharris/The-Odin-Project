import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import {createToDoItem, toDoUL, toggleToDoInputOnClick, newToDoBtnListener} from "./to-do-obj";
import {createToDoTab, toggleInputOnClick, newListBtnListener } from "./list-obj";

createToDoTab();
newListBtnListener();
toggleInputOnClick();
toggleToDoInputOnClick();
toDoUL();
newToDoBtnListener();
createToDoItem("*example*", "-tomorrow");
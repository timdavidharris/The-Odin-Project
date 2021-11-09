import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import {toDoObj, toggleToDoInputOnClick, newToDoBtnListener, getTodaysDate} from "./to-do-obj";
import {createToDoTab, toggleInputOnClick, newListBtnListener } from "./list-obj";

createToDoTab();
newListBtnListener();
toggleInputOnClick();
toggleToDoInputOnClick();
newToDoBtnListener();
new toDoObj("*example to do*", getTodaysDate());

import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import {toDoObj, toDoUL, toggleToDoInputOnClick, newToDoBtnListener} from "./to-do-obj";
import {createToDoTab, toggleInputOnClick, newListBtnListener } from "./list-obj";

createToDoTab();
newListBtnListener();
toggleInputOnClick();
toggleToDoInputOnClick();
toDoUL();
newToDoBtnListener();
new toDoObj("*example*", " - Due Tomorrow");
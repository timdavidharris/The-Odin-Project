import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import {toDoObj, toggleToDoInputOnClick, newToDoBtnListener, getTodaysDate} from "./to-do-obj";
import {createToDoTab, toggleItemInputOnClick, newListBtnListener } from "./list-obj";
import { save } from "./local-storage";

createToDoTab();
newListBtnListener();
toggleItemInputOnClick();
toggleToDoInputOnClick();
newToDoBtnListener();
new toDoObj("*example to do*", getTodaysDate());
save();

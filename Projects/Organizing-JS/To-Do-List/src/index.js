import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import * as toDoObj from "./to-do-obj";
import {createToDoTab, toggleItemInputOnClick, newListBtnListener } from "./list-obj";
import { save } from "./local-storage";

createToDoTab();
newListBtnListener();
toggleItemInputOnClick();
toDoObj.toggleToDoInputOnClick();
toDoObj.newToDoBtnListener();
new toDoObj.toDoObj("*example to do*", toDoObj.getTodaysDate());
save();

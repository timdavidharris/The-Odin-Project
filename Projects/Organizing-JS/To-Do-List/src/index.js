import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import * as toDoMod from "./to-do-obj";
import {createToDoTab, toggleItemInputOnClick, newListBtnListener } from "./list-obj";
import { save } from "./local-storage";

createToDoTab();
newListBtnListener();
toggleItemInputOnClick();
toDoMod.toggleToDoInput();
toDoMod.addToDoObj();
new toDoMod.toDoObj("*example to do*", toDoMod.getTodaysDate());
save();

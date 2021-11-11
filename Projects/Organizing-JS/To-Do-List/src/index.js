import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import * as toDoMod from "./to-do-obj";
import * as listMod from "./list-obj";
import { save } from "./local-storage";

listMod.addToDoObj();
listMod.newListBtnListener();
listMod.toggleItemInputOnClick();
toDoMod.toggleToDoInput();
toDoMod.addToDoObj();
new toDoMod.toDoObj("*example to do*", toDoMod.getTodaysDate());
save();

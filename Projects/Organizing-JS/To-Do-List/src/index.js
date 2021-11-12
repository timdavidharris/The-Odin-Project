import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import * as toDoMod from "./to-do-obj";
import * as listMod from "./list-obj";
import {checkForLocalStorage} from "./local-storage";
// import * as storageMod from "./local-storage";

checkForLocalStorage();
listMod.addListDiv();
listMod.addListObj();
listMod.toggleListInputDisplay();
toDoMod.toggleToDoInputDisplay();
toDoMod.addToDoObj();
new toDoMod.toDoObj("*example to do*", toDoMod.getTodaysDate());

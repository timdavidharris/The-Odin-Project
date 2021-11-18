import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import * as toDoMod from "./to-do-obj";
import * as listMod from "./list-obj";
// import * as storageMod from "./local-storage";
listMod.addListDiv();
listMod.addListObj();
listMod.toggleListInputDisplay();
toDoMod.toggleToDoInputDisplay();
toDoMod.addToDoObj();
toDoMod.clearToDoLocalStorage();
toDoMod.setItemArrayVarBasedOnStorage();

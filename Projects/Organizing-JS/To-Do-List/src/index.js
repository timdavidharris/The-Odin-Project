import _ from "lodash";
import "./bootstrap.min.css";
import "./style.css";
import {createToDoItem, toDoUL, toggleNewToDoInputDiv} from "./to-do-obj";
import {createToDoTab, toggleInputOnClick, btnListener } from "./list-obj";

createToDoTab();
btnListener();
toggleInputOnClick();
toggleNewToDoInputDiv();
toDoUL();
createToDoItem("*example*", "-tomorrow");
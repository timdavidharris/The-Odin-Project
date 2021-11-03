import { createToDoTab } from './tab-obj';
export { list };

function list(name) {
    this.name = name
    createToDoTab();
}
export {newListOnClick, newListBtnListener};

const addNewListBtn = document.querySelector('#add-list-btn');
let addNewListInput = document.querySelector('#new-to-do-input');

function newListOnClick() {
    addNewListBtn.addEventListener('click', () => {
        displayOn();
    });
};

function displayOn() {
    let inputDiv = document.querySelector('#new-to-do-input-div');
    inputDiv.style.display = 'contents';
    newListBtnListener(inputDiv);
}

function newListBtnListener(inputDiv) {
    let addNewListBtn = document.querySelector('#new-to-do-list-btn');
    addNewListBtn.addEventListener('click', () => {
        let newListName = addNewListInput.value;
        inputDiv.style.display = 'none';
        return {
            newListName
        }
    });
}
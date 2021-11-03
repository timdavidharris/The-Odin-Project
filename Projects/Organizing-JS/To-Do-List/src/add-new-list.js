export {newListOnClick};

const addNewListBtn = document.querySelector('#add-list-btn');

function newListOnClick() {
    addNewListBtn.addEventListener('click', () => {
        console.log("HELLO")
        displayOn();
    });
};

function displayOn() {
    let inputDiv = document.querySelector('#new-to-do-input-div');
    inputDiv.style.display = "contents";
}
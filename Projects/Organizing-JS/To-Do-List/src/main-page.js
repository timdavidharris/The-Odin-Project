export { mainPage }

const toDoDiv = document.querySelector('#to-do-1');

function mainPage() {
    console.log("Main Page Function reporting for duty");
    let mainPageUL = document.createElement('ul');
    mainPageUL.setAttribute('class', 'list-group');
    let mainPageLI = document.createElement('li');
    mainPageLI.setAttribute('class', 'list-group-item');
    let mainPageInput = document.createElement('input');
    mainPageInput.setAttribute('class', 'form-check-input me-1');
    let mainPageButton = document.createElement('button');
    mainPageButton.setAttribute('class', 'btn btn-sm btn-outline-danger justify-content-end');
    mainPageButton.setAttribute('type', 'button');
    mainPageInput.setAttribute('type', 'checkbox');
    mainPageButton.textContent = "delete";
    toDoDiv.append(mainPageUL);
    mainPageUL.append(mainPageLI); 
    mainPageLI.append(mainPageInput);
    mainPageLI.append("*example*");
    mainPageLI.append(mainPageButton);
    // 
    let mainPageLI2 = document.createElement('li');
    mainPageLI2.setAttribute('class', 'list-group-item');
    let mainPageButton2 = document.createElement('button');
    mainPageButton2.textContent = "Add New";
    mainPageButton2.setAttribute('class', 'btn btn-sm btn-outline-success');
    mainPageButton2.setAttribute('type', 'button');
    mainPageUL.append(mainPageLI2); 
    mainPageLI2.append(mainPageButton2);
}
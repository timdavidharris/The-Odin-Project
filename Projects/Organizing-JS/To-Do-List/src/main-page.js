const toDoDiv = document.querySelector('#to-do-1');

export default function mainPage() {
    console.log("Main Page Function reporting for duty");
    let mainPageUL = document.createElement('ul');
    mainPageUL.setAttribute('class', 'list-group');
    let mainPageLI = document.createElement('li');
    mainPageLI.setAttribute('class', 'list-group-item');
    let mainPageInput = document.createElement('input');
    mainPageInput.setAttribute('class', 'form-check-input me-1');
    mainPageInput.setAttribute('type', 'checkbox');
    mainPageLI.textContent = "test item";
    toDoDiv.append(mainPageUL);
    mainPageLI.append(mainPageInput);
    mainPageUL.append(mainPageLI);
}
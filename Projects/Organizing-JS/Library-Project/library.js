// Initial variables
const mainSection = document.querySelector('#book-cards');
const addABookBtn = document.querySelector('#add-book-btn');
const submitNewBookBtn = document.querySelector('#submit-btn');
const addABookForm = document.querySelector('#book-form');
let myLibrary = [];
// Books to start the library
// book 1
const parableOfTheSower = new Book();
parableOfTheSower.title = "Parable of the Sower"
parableOfTheSower.author = "Octavia E. Butler"
parableOfTheSower.pages = "345" 
parableOfTheSower.read = "read"
addBookToLibrary(parableOfTheSower);
// book 2
const parableOfTheTalents = new Book();
parableOfTheTalents.title = "Parable of the Talents"
parableOfTheTalents.author = "Octavia E. Butler"
parableOfTheTalents.pages = "424" 
parableOfTheTalents.read = "read"
addBookToLibrary(parableOfTheTalents);
// book 3
const Dune = new Book();
Dune.title = "Dune"
Dune.author = "Frank Herbert"
Dune.pages = "688"
Dune.read = "read"
addBookToLibrary(Dune);

// Functions Connected to Buttons Below

addABookBtn.addEventListener('click', () => {
    addABookForm.style.display = '';
});

submitNewBookBtn.addEventListener('click', () => {
    let newTitle = new Book();
    formValidation(newTitle);
});

function formValidation(newTitle) {
    if ((document.getElementById('book-title').value !== '') && 
        (document.getElementById('book-author').value !== '') &&
        (document.getElementById('book-pages').value !== '') && 
        (document.getElementById('dropdown').value !== '')) {
        newTitle.title = document.getElementById('book-title').value;
        newTitle.author = document.getElementById('book-author').value;
        newTitle.pages = document.getElementById('book-pages').value;
        newTitle.read = document.getElementById('dropdown').value;
        addBookToLibrary(newTitle);
        buildCards(myLibrary);
    } 
}

function readStatusFunction() {
    const readStatusBtns = document.querySelectorAll('.read-status-btn');
    readStatusBtns.forEach((button) => {
        button.addEventListener('click', () => {
            let arrayNum = +button.dataset.arrayNum
            let theBook = myLibrary[arrayNum]
            if (theBook.read === 'unread') {
                theBook.read = 'read';
                return buildCards(myLibrary);
            } else {
                theBook.read = 'unread';
                return buildCards(myLibrary);
            }
        });
    });
}

function removeBook() {
    const removeBookBtns = document.querySelectorAll('.remove-btn');
    removeBookBtns.forEach((button) => {
        button.addEventListener('click', () => {
            let arrayNum = +button.dataset.arrayNum;
            myLibrary.splice(arrayNum, 1);
            return buildCards(myLibrary);
        });
    });
}

// Functions that create the books and book tiles

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary[myLibrary.length] = book;
}

function buildCards(myLibrary) {
    clearBooks();
        myLibrary.forEach(newBook => {
            let bookCard = document.createElement('div');
            bookCard.setAttribute('class', 'book-tile');
            bookCard.textContent = `${newBook.title} by ${newBook.author}`
                                + ` has ${newBook.pages} pages,`
                                + ` and is currently "${newBook.read}"`;
            let removeBookBtn = document.createElement('button');
            removeBookBtn.setAttribute('class', 'remove-btn');
            removeBookBtn.textContent = 'Remove';
            let changeReadStatusBtn = document.createElement('button');
            changeReadStatusBtn.setAttribute('class', 'read-status-btn');
            changeReadStatusBtn.textContent = 'Change Read Status';
            mainSection.appendChild(bookCard);
            bookCard.appendChild(changeReadStatusBtn);
            bookCard.appendChild(removeBookBtn);
            addHTMLDataTags(newBook, removeBookBtn, changeReadStatusBtn);
        });
    hideAddBookForm();
    readStatusFunction();
    removeBook();
}

function addHTMLDataTags(newBook, removeBookBtn, changeReadStatusBtn) {
    newBook = 0;
    let dataSetUp = document.querySelectorAll('.remove-btn')
    dataSetUp.forEach(() => {
        removeBookBtn.setAttribute('data-array-num', `${newBook}`);
        changeReadStatusBtn.setAttribute('data-array-num', `${newBook}`);
        newBook++;
    });
}

function clearBooks() {
    let cards = document.querySelectorAll('.book-tile');
    cards.forEach((item) => { 
        item.remove();
    });
}

function hideAddBookForm() {
    addABookForm.style.display = 'none';
}

buildCards(myLibrary);

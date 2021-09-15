const mainSection = document.querySelector('#book-cards');
const addABookBtn = document.querySelector('#add-book-btn');
const submitNewBookBtn = document.querySelector('#submit-btn');
const addABookForm = document.querySelector('#book-form');
let myLibrary = [];
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

addABookBtn.addEventListener('click', () => {
    addABookForm.style.display = '';
});

submitNewBookBtn.addEventListener('click', () => {
    let newTitle = new Book();
    newTitle.title = document.getElementById('book-title').value;
    newTitle.author = document.getElementById('book-author').value;
    newTitle.pages = document.getElementById('book-pages').value;
    newTitle.read = document.getElementById('dropdown').value;
    addBookToLibrary(newTitle);
    populateCards(myLibrary);
});

// function removeButtons() {
// const removeBtns = document.querySelectorAll('.remove-btn');
//     removeBtns.forEach((button) => {
//         button.addEventListener('click', () => {
//             let arrayNum = button.textContent.slice(-1) - 1;
//             myLibrary.splice(arrayNum, 1);
//             console.log(arrayNum);
//             populateCards(myLibrary);
//         });
//     });
// }

function removeBook() {
let removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach((button) => {
        button.addEventListener('click', () => {
            let arrayNum = button.textContent.slice(-1) - 1;
            myLibrary.splice(arrayNum, 1);
            console.log(arrayNum);
            populateCards(myLibrary);
        });
    });
}

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read 
}

function addBookToLibrary(book) {
    myLibrary[myLibrary.length] = book;
}

function populateCards() {
    clearBooks();
    hideAddBookForm();
    myLibrary.forEach(newBook => {
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-tile');
        bookCard.textContent = `${newBook.title} by ${newBook.author}`
                             + ` has ${newBook.pages} pages,`
                             + ` and is currently "${newBook.read}"`;
        let removeBookBtn = document.createElement('button');
        removeBookBtn.setAttribute('class', 'remove-btn');
        removeBookBtn.setAttribute('onclick', 'removeBook()');
        mainSection.appendChild(bookCard);
        bookCard.appendChild(removeBookBtn);
        dataBookNum(newBook, removeBookBtn);
    });
}

function dataBookNum(newBook, removeBookBtn) {
    newBook = 0;
    let dataSetUp = document.querySelectorAll('.remove-btn')
    dataSetUp.forEach(() => {
        removeBookBtn.textContent = `Click Twice to Remove Book ${newBook + 1}`;
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

populateCards(myLibrary);
// removeBook();

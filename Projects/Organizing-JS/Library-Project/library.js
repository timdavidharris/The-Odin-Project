// Initial variables
const mainSection = document.querySelector('#book-cards');
const addABookBtn = document.querySelector('#add-book-btn');
const submitNewBookBtn = document.querySelector('#submit-btn');
const addABookForm = document.querySelector('#book-form');
const hideFormBtn = document.querySelector('#hide-form-btn');
let myLibrary = [];

// Functions Connected to Buttons Below

addABookBtn.addEventListener('click', () => {
    addABookForm.style.display = '';
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
});

hideFormBtn.addEventListener('click', () => {
    hideAddBookForm();
});

submitNewBookBtn.addEventListener('click', () => {
    let newTitle = new Book({information: 't:a:p:r'});
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
            let arrayNum = Number(button.dataset.arrayNum);
            let theBook = myLibrary[arrayNum];
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
            let arrayNum = Number(button.dataset.arrayNum);
            myLibrary.splice(arrayNum, 1);
            return buildCards(myLibrary);
        });
    });
}

// Book Object (Class) Constructor and Books

class Book {
    constructor({information}) {
        this.information = information;
    }
    bookInfo() {
        let title = this.title
        let author = this.author
        let pages = this.pages
        let read = this.read

        let output = this.information
            .replace('t', title)
            .replace('a', author)
            .replace('p', pages)
            .replace('r', read)
        return output;
    }
}

// Books to start the library
// book 1
const artemisFowl = new Book({information: 't:a:p:r'});
artemisFowl.title = "Artemis Fowl"
artemisFowl.author = "Eoin Colfer"
artemisFowl.pages = "396" 
artemisFowl.read = "read"
addBookToLibrary(artemisFowl);
// book 2
const nineteen84 = new Book({information: 't:a:p:r'});
nineteen84.title = "1984"
nineteen84.author = "George Orwell"
nineteen84.pages = "298" 
nineteen84.read = "read"
addBookToLibrary(nineteen84);
// book 3
const Dune = new Book({information: 't:a:p:r'});
Dune.title = "Dune"
Dune.author = "Frank Herbert"
Dune.pages = "688"
Dune.read = "read"
addBookToLibrary(Dune);

// Functions that manipulate the books and book tiles/cards

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
            addHTMLDataTags(newBook, removeBookBtn, changeReadStatusBtn, bookCard);
        });
    hideAddBookForm();
    readStatusFunction();
    removeBook();
}

function addHTMLDataTags(newBook, removeBookBtn, changeReadStatusBtn, bookCard) {
    newBook = 0;
    let dataSetUp = document.querySelectorAll('.remove-btn')
    dataSetUp.forEach(() => {
        removeBookBtn.setAttribute('data-array-num', `${newBook}`);
        changeReadStatusBtn.setAttribute('data-array-num', `${newBook}`);
        bookCard.setAttribute('data-array-num', `${newBook}`);
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

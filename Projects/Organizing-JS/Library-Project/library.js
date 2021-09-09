const mainSection = document.querySelector('#book-cards');
const addABookBtn = document.querySelector('#add-book-btn');
const addBookFormDiv = document.querySelector('#add-book-form')
let myLibrary = [];
// book 1
const parableOfTheSower = new Book();
parableOfTheSower.title = "Parable of the Sower"
parableOfTheSower.author = "Octavia E. Butler"
parableOfTheSower.pages = "345" 
parableOfTheSower.read = "read"
// book 2
const parableOfTheTalents = new Book();
parableOfTheTalents.title = "Parable of the Talents"
parableOfTheTalents.author = "Octavia E. Butler"
parableOfTheTalents.pages = "424" 
parableOfTheTalents.read = "read"
// book 3
const Dune = new Book();
Dune.title = "Dune"
Dune.author = "Frank Herbert"
Dune.pages = "688"
Dune.read = "read"

addABookBtn.addEventListener('click', () => {
    addABookForm();
    console.log('you clicked a button!')
});

function addABookForm() {
    // Title
    let titleLabel = document.createElement('label');
    titleLabel.textContent = "Book Title:";
    let titleInput = document.createElement('input');
    addBookFormDiv.appendChild(titleLabel);
    addBookFormDiv.appendChild(titleInput);
    // Author
    let authorLabel = document.createElement('label');
    authorLabel.textContent = "Book Author:";
    let authorInput = document.createElement('input');
    addBookFormDiv.appendChild(authorLabel);
    addBookFormDiv.appendChild(authorInput);
    // Pages
    let pagesLabel = document.createElement('label');
    pagesLabel.textContent = "Number of Pages:";
    let pagesInput = document.createElement('input');
    addBookFormDiv.appendChild(pagesLabel);
    addBookFormDiv.appendChild(pagesInput);
    // Read
    let readLabel = document.createElement('label');
    readLabel.textContent = "Read/Unread";
    let readSelect = document.createElement('select');
    let readStatus = document.createElement('option')
    readStatus.setAttribute('value', 'read');
    let unreadStatus = document.createElement('option')
    unreadStatus.setAttribute('value', 'unread');
    addBookFormDiv.appendChild(readLabel);
    addBookFormDiv.appendChild(readSelect);
    // "Add" Button
    let addBookBtn = document.createElement('button');
    addBookBtn.setAttribute('id', 'add-book-btn');
    addBookBtn.textContent = "ADD";
    addBookFormDiv.appendChild(addBookBtn);
}

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read 
    addBookToLibrary(this)
}

function addBookToLibrary(book) {
    myLibrary[myLibrary.length] = book;
    populateCards();
}

function populateCards() {
    clearBooks();
    myLibrary.forEach(newBook => {
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-tile');
        bookCard.textContent = `${newBook.title} by ${newBook.author}`
                             + ` has ${newBook.pages} pages,`
                             + ` and is currently "${newBook.read}".`;
        mainSection.appendChild(bookCard);
    });
}

function clearBooks() {
    let cards = document.querySelectorAll('.book-tile');
    cards.forEach((item) => { 
        item.remove();
    });
}

populateCards(myLibrary);

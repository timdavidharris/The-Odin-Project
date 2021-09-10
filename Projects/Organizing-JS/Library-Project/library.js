const mainSection = document.querySelector('#book-cards');
const addABookBtn = document.querySelector('#add-book-btn');
const submitNewBookBtn = document.querySelector('#submit-btn');
const addABookForm = document.querySelector('#book-form');
const removeBtns = document.querySelectorAll('.remove-btn')
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
    addBookToLibrary(newTitle);
    newTitle.title = document.getElementById('book-title').value;
    newTitle.author = document.getElementById('book-author').value;
    newTitle.pages = document.getElementById('book-pages').value;
    newTitle.read = document.getElementById('dropdown').value;
    populateCards(myLibrary);
});

removeBtns.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('you clicked a "remove" button');
    });
});

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read 
}

function addBookToLibrary(book) {
    myLibrary[myLibrary.length] = book;
    populateCards();
}

function populateCards() {
    clearBooks();
    hideAddBookForm();
    myLibrary.forEach(newBook => {
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-tile');
        bookCard.textContent = `${newBook.title} by ${newBook.author}`
                             + ` has ${newBook.pages} pages,`
                             + ` and is currently "${newBook.read}".`;
        let removeBookBtn = document.createElement('button');
        removeBookBtn.setAttribute('class', 'remove-btn');
        removeBookBtn.textContent = 'Remove';
        mainSection.appendChild(bookCard);
        bookCard.appendChild(removeBookBtn);
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

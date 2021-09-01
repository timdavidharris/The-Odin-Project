const mainSection = document.querySelector('#book-cards')
let myLibrary = [];
const parableOfTheSower = new Book("Parable of the Sower", "Octavia E Butler", "345", "read");

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read 
}

function addBookToLibrary(newBook) {
    myLibrary[myLibrary.length] = newBook;
}

function populateCards(myLibrary) {
    myLibrary.forEach(book => {
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-tile');
        bookCard.textContent = book;
    });
}

const mainSection = document.querySelector('#book-cards')
let myLibrary = [];
const parableOfTheSower = new Book();
parableOfTheSower.title = "Parable of the Sower"
parableOfTheSower.author = "Octavia E Butler"
parableOfTheSower.pages = "345" 
parableOfTheSower.read = "read"

function Book(title, author, pages, read) {
    this.title = title 
    this.author = author 
    this.pages = pages 
    this.read = read 
    addBookToLibrary(this);
    this.bookInfo = `${this.title} by ${this.author} has ${this.pages} pages, and is currently ${read}`
}

function addBookToLibrary(book) {
    myLibrary[myLibrary.length] = book;
    populateCards(myLibrary, book);
}

function populateCards(myLibrary, newBook) {
    myLibrary.forEach(newBook => {
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-tile');
        bookCard.textContent = newBook.bookInfo;
        mainSection.appendChild(bookCard);
    });
}


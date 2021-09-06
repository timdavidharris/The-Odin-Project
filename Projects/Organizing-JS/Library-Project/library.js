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
    addBookToLibrary(this)
}

function addBookToLibrary(book) {
    myLibrary[myLibrary.length] = book;
    populateCards(book);
}

function populateCards() {
    myLibrary.forEach(newBook => {
        let bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-tile');
        bookCard.textContent = `${newBook.title} by ${newBook.author} \n has ${newBook.pages} pages, \n and is currently "${newBook.read}".`
        mainSection.appendChild(bookCard);
    });
}

populateCards(myLibrary[0]);

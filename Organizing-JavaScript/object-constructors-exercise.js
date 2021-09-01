function bookObjects(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return console.log(`${theHobbit.title} by ${theHobbit.author}, ${theHobbit.pages}, ${theHobbit.read}.`)
    }
}
  
const theHobbit = new bookObjects("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet")

console.log(theHobbit.info());
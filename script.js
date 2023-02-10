let myLibrary = [];
const libraryDiv = document.querySelector("#library");
console.log(libraryDiv);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function showBooksInLibrary() {
  for (i in myLibrary) {
    let book = myLibrary[i];
    console.log(book);
    let bookDiv = document.createElement("div");
    let titleHeader = document.createElement("h3");
    let authorSpan = document.createElement("span");
    let pagesSPan = document.createElement("span");
    let readDiv = document.createElement("div");

    bookDiv.setAttribute("id", `book${i}`);
    titleHeader.textContent = book.title;

    libraryDiv.appendChild(bookDiv);
  }
}

/* note: arry number is used in the for loop */

let bookOne = new Book("Lord of the Rings", "JRR Tolkien", "800", true);
myLibrary.push(bookOne);

showBooksInLibrary();

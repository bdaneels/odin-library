let myLibrary = [];
const libraryDiv = document.querySelector("#library");
const submitBtn = document.querySelector("#btn");
const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");
const readField = document.querySelector("#read");
let readBtns = document.querySelectorAll("#readbtn");
let removeBtns = document.querySelectorAll("#remove");

/* object */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/*  */
/*  */
/* functions */
function showBooksInLibrary() {
  libraryDiv.innerHTML = "";
  for (i in myLibrary) {
    let book = myLibrary[i];
    /* create dom elements */
    let bookDiv = document.createElement("div");
    let titleHeader = document.createElement("h3");
    let authorSpan = document.createElement("span");
    let pagesDiv = document.createElement("div");
    let readDiv = document.createElement("button");
    let removeDiv = document.createElement("button");

    bookDiv.setAttribute("data", `${i}`);
    bookDiv.setAttribute("class", "book-card");

    /* add content */
    titleHeader.textContent = book.title;
    authorSpan.textContent = book.author;
    pagesDiv.textContent = book.pages;
    removeDiv.setAttribute("id", "remove");
    removeDiv.textContent = "Delete book";

    if (book.read) {
      readDiv.textContent = "Read";
      readDiv.setAttribute("class", "read"); /* class adden */
    } else {
      readDiv.textContent = "Unread";
      readDiv.setAttribute("class", "unread");
    }

    readDiv.setAttribute("id", "readbtn");

    bookDiv.appendChild(titleHeader);
    bookDiv.appendChild(authorSpan);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readDiv);
    bookDiv.appendChild(removeDiv);

    libraryDiv.appendChild(bookDiv);
    selectReadButtons();
    setEventListeners();
  }
}

/* note: arry number is used in the for loop */

/* checkbox validation */
function checkboxStatus() {
  if (readField.checked) {
    return true;
  } else {
    return false;
  }
}

/* target the submit button and override default */
submitBtn.addEventListener("click", submitClick, false);

function submitClick(event) {
  event.preventDefault();
  let title = titleField.value;
  let author = authorField.value;
  let pages = pagesField.value;
  let read = checkboxStatus();
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  showBooksInLibrary();
}

/* update buttons */

function selectReadButtons() {
  readBtns = document.querySelectorAll("#readbtn");
  removeBtns = document.querySelectorAll("#remove");
}

/* set event listeners */

function setEventListeners() {
  selectReadButtons();
  setEventListenersRead();
  setEventListenersRemove();
}

function readBtnEvent(button) {
  console.log("i've been clicked");
  index = button.parentElement.getAttribute("data");
  changeReadStatus(index);
  if (button.classList.contains("read")) {
    button.classList.remove("read");
    button.classList.add("unread");
    button.textContent = "Unread";
  } else if (button.classList.contains("unread")) {
    button.classList.remove("unread");
    button.classList.add("read");
    button.textContent = "Read";
  }
}

function setEventListenersRead() {
  console.log(readBtns);
  readBtns.forEach((button) => {
    button.addEventListener(
      "click",
      function () {
        readBtnEvent(button);
      },
      false
    );
  });
}

function setEventListenersRemove() {
  removeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      index = button.parentElement.getAttribute("data");
      deleteBook(index);
    });
  });
}

/* change read status */

function changeReadStatus(index) {
  let book = myLibrary[index];
  readStatus = book.read;
  if (readStatus) {
    book.read = false;
  } else {
    book.read = true;
  }
  console.log("changed");
}

/* delete book */

function deleteBook(index) {
  delete myLibrary[index];
  showBooksInLibrary();
}

/* test variables stuff */

/* run the program */
showBooksInLibrary();
setEventListeners();

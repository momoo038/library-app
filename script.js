const myLibrary = [];

class Book {
  constructor(name, year, author, id, read = false) {
    this.name = name;
    this.year = year;
    this.author = author;
    this.id = id;
    this.read = read;
  }
  toggleRead() {
    this.read = !this.read;
  }
}

function addBook(name, year, author, id) {
  const newBook = new Book(name, year, author, id);
  myLibrary.push(newBook);
}

const table = document.querySelector("#table");

function displayLibrary() {
  const rows = table.rows.length;
  for (let i = rows - 1; i > 0; i--) {
    table.deleteRow(i);
  }
  myLibrary.forEach((book) => {

    const row = table.insertRow();

    let title = row.insertCell(0);
    title.textContent = book.name;

    let author = row.insertCell(1);
    author.textContent = book.author;

    let year = row.insertCell(2);
    year.textContent = book.year;
    
    let readStatus = row.insertCell(3);
    const readButton = document.createElement("button");
    readButton.textContent = book.read ? "Read" : "Not Read";
    readButton.classList.add("read-btn");
    readButton.dataset.id = book.id;

    readButton.addEventListener("click", (e) => {
      const bookId = e.target.dataset.id;
      const book= myLibrary.find(b => b.id === bookId);
      if (book) {
        book.toggleRead();
        displayLibrary();
      }
    });
    readStatus.appendChild(readButton);

    let removeCell = row.insertCell(4);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.dataset.id = book.id;

    removeButton.addEventListener("click", (e) => {
      const bookIdToRemove = e.target.dataset.id;
      const bookIndex = myLibrary.findIndex(b => b.id === bookIdToRemove);
      if (bookIndex > -1) {
        myLibrary.splice(bookIndex, 1);
        displayLibrary();
      }
    });
    removeCell.appendChild(removeButton);
  });
}
displayLibrary();

const button = document.querySelector("#btn");
const dialog = document.querySelector("#dialog");
const confirmBtn = dialog.querySelector("#confirmBtn");
const titleInput = dialog.querySelector("#title");
const authorInput = dialog.querySelector("#author");
const yearInput = dialog.querySelector("#year");
const form = dialog.querySelector("form");

button.addEventListener("click", function open() {
  dialog.show();
});

confirmBtn.addEventListener("click", () => {
  if (form.checkValidity()) {
    const title = titleInput.value;
    const author = authorInput.value;
    const year = yearInput.value;
    const id = crypto.randomUUID();

    addBook(title, year, author, id);
    displayLibrary();
    form.reset();
    dialog.close()
  }
});


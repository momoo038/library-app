const myLibrary = [];

function Book(name, year, author, id) {
    this.name = name;
    this.year = year;
    this.author = author;
    this.id = id;
}

function addBook(name, year, author, id){
    const newBook = new Book(name, year, author, id);
    myLibrary.push(newBook)
}

addBook('1984', 1949, 'George Orwell', crypto.randomUUID())
console.log(myLibrary)

function displayLibrary(arr) {
    arr.map((book) => console.log(book))
}
displayLibrary(myLibrary)
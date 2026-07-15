/**
 * * Practice Problem
 * * You are building a simple library management system.
 * * Implement the following requirements using TypeScript:
 *
 * TODO: 1. Create a class Book with the following properties:
 * * - title (string, required)
 * * - author (string, required)
 * * - yearPublished (number, optional)
 * * - ISBN (string, readonly)
 */
/* TODO: 2. Define a constructor function to initialize the Book class with title, author,yearPublished, and ISBN.
 *
 * TODO: 3. Ensure that the constructor function uses the this keyword to assign values to the class properties.
 *
 * TODO: 4. Create an instance of the Book class and log its details.
 *
 * TODO: 5. Create a function logBookDetails that takes an instance of Book as a parameter and logs its details.
 *
 * TODO: 6. Create a subclass EBook that extends the Book class. Add the following properties:
 * * - fileSize (number, required)
 * * - format (string, required)
 *
 * TODO:7. Use the super method to call the constructor of the parent class Book from the EBook class.
 *
 * TODO: 8. Ensure that the yearPublished property in the Book class is optional and the ISBN property is readonly.
 */
class Book {
    title;
    author;
    yearPublished;
    isbn;
    constructor(title, author, isbn, yearPublished) {
        ((this.title = title),
            (this.author = author),
            (this.yearPublished = yearPublished),
            (this.isbn = isbn));
    }
}
const book1 = new Book("Book1", "Napoleon Hill", "AB1234", 2024);
console.log(book1);
// book1.isbn = "somethingElse" error
function logBookDetails(book) {
    console.log("--- BOOK DETAILS ---");
    console.log(book);
}
logBookDetails(book1);
class Ebook extends Book {
    fileSize;
    format;
    constructor(title, author, isbn, fileSize, format, yearPublished) {
        super(title, author, isbn, yearPublished);
        this.fileSize = fileSize;
        this.format = format;
    }
}
const eBook1 = new Ebook("e-Book", "Dzhan Yonbash", "BR123", 1024, "epub");
logBookDetails(eBook1);
export {};
//# sourceMappingURL=exercise1.js.map
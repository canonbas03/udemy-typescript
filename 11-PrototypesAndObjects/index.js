const book = {
    title: "JavaScript Basics",
    authors: ["John", "Mark", "Rob"],
    printAuthors1() {
        // Arrow function automatically uses 'this' from printAuthors()
        this.authors.forEach((author) => {
            console.log(`${this.title}1 - ${author}`);
        });
    },
    printAuthors2() {
        this.authors.forEach(function (author) {
            //console.log(`${this.title} - ${author}`);
        }, this);
    }, // We get an error because the this keyword is internal for the anonymous function
    // It refers to the Global scope
    printAuthors3() {
        this.authors.forEach(function (author) {
            console.log(`${this.title}3 - ${author}`);
        }, this);
    },
};
book.printAuthors1();
book.printAuthors3();
export {};
//# sourceMappingURL=index.js.map
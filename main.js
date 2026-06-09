// method -> object
// function -> window, global

const book = {
  title: "The Title",
  authors: ["John", "Mark", "Rob"],
  read() {
    console.log(this);
  },

  printAuthors() {
    this.authors.forEach((author) => {
      console.log(this.title, " - ", author);
    });
  },

  stopreading() {},
};

book.stopreading = function () {
  console.log(this);
};

book.stopreading();

function watchmovie() {
  console.log(this);
}

watchmovie();

book.printAuthors();

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(this.name, "Has logged in");
  }

  logout() {
    console.log(this.name, "Has logged out");
  }

  addPoint() {
    this.points++;
    console.log("total points", this.points);
  }
}

const user = new User("John", "john@email.com");
const user2 = new User("Mark", "mark@email.com");

console.log(user);
user2.addPoint();

function User3(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;

  this.login = () => {
    console.log(this.name, "Has logged in");
  };

  this.logout = () => {
    console.log(this.name, "Has logged out");
  };

  this.addPoint = () => {
    this.points++;
    console.log("total points", this.points);
  };
}

const user3 = new User3("John", "john@email.com");

console.log(user3);

function User4(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;
}

User4.prototype.login = function () {
  console.log(this.name, "Has logged in");
};

User4.prototype.logout = function () {
  console.log(this.name, "Has logged out");
};

User4.prototype.addPoint = function () {
  this.points++;
  console.log("total points", this.points);
};

const user4 = new User4("John", "john@email.com");

console.log(user4);

// Inheriting prototypes
function User5(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;
}

User5.prototype.login = function () {
  console.log(this.name, "Has logged in");
};

User5.prototype.logout = function () {
  console.log(this.name, "Has logged out");
};

User5.prototype.addPoint = function () {
  this.points++;
  console.log("total points", this.points);
};

function AdminUser(name, email, peopleReporting) {
  User5.apply(this, [name, email]);
  this.peopleReporting = peopleReporting;
}

AdminUser.prototype = Object.create(User5.prototype);

AdminUser.prototype.updatePeopleReporting = function (newNumber) {
  this.peopleReporting = newNumber;
};

const user5 = new User5("John", "john@email.com");

const admin = new AdminUser("Mark", "mark@email.com", 10);

console.log(admin);
console.log(user5);

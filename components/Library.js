function Library() {
  this.bookList = [];
}

Library.prototype.getBooks = function (arr) {
  this.bookList = arr;
};
Library.prototype.addBook = function () {};
Library.prototype.addCategory = function () {};
Library.prototype.filter = function () {};
Library.prototype.render = function () {};

function Book(url, title, author, year, category, description) {
  this.imgUrl = url;
  this.title = title;
  this.author = author;
  this.year = year;
  this.category = category;
  this.description = description;
}

export default Library;

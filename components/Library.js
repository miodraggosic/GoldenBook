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

export default Library;

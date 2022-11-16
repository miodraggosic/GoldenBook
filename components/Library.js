function Library() {
  this.bookList = [];
  this.categories = ["general", "history", "fantasy"];
}

Library.prototype.getBooks = function (arr) {
  arr.forEach((elem, i) => {
    let num = Math.floor(i * Math.random());
    console.log(num);

    let book = new Book(
      elem.website,
      elem.title,
      elem.author,
      elem.published,
      this.categories[num],
      elem.isbn,
      elem.description
    );
    this.addBook(book);
  });
};

Library.prototype.addBook = function (book) {
  this.bookList.push(book);
};

Library.prototype.addCategory = function () {};
Library.prototype.filter = function () {};
Library.prototype.render = function () {};

function Book(url, title, author, year, category, isbn, description) {
  this.imgUrl = url;
  this.title = title;
  this.author = author;
  this.year = year;
  this.category = category;
  this.isbn = isbn;
  this.description = description;
}

export default Library;

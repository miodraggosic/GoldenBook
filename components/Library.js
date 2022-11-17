function Library() {
  this.bookList = [];
  this.categories = ["general", "history", "fantasy"];
  this.regex = {
    imageUrl:
      /^((http(s)?)?\:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
    title: /^[A-Z]\w{10,50}$/,
    author: /^[A-Z]\w{2,}(\s[A-Z]\w{2,})?$/,
    year: /^(?:(?:18|19|20))([0-2]){2}$/,
    description: /^[A-Z]\w{50,250}$/,
  };
}

Library.prototype.getBooks = function (arr) {
  arr.forEach((elem, i) => {
    let num = Math.floor(i * Math.random());
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
Library.prototype.validField = function (arr) {
  function validate(field, regex) {
    let result = regex.test(field.value);
    if (result) {
      field.classList.remove("red");
      field.classList.add("green");
    } else {
      field.classList.add("red");
      field.value = "";
    }
  }
  arr.forEach((field) => validate(field, this.regex[field.name]));
  let arrFields = Array.from(arr);

  return arrFields.some((input) => input.classList.contains("red"))
    ? false
    : true;
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

export { Library, Book };

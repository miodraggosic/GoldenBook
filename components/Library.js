function Library() {
  this.bookList = [];
  this.categories = ["general", "history", "fantasy", "horror", "classics"];
  this.regex = {
    imageUrl:
      /^((http(s)?)?\:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
    title: /^([A-Za-z0-9\s\-_,\.;:()]+){10,50}$/,
    author: /([A-Z][a-z]+(\s[A-Z][a-z]+)*)/,
    year: /^(?:2022)+/,
    category: /^(general|history|fantasy|horror|classics)+$/,
    isbn: /^\d{10}$/,
    description: /^([A-Za-z0-9\s\-_,\.;:()]+){25,250}$/,
  };
}

Library.prototype.getBooks = function (arr) {
  arr.forEach((elem) => {
    let num = Math.floor(this.categories.length * Math.random());
    let book = new Book([
      elem.website,
      elem.title,
      elem.author,
      elem.published,
      this.categories[num],
      elem.isbn,
      elem.description,
    ]);
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

Library.prototype.errorMsg = function (arr) {
  arr.forEach((field) => {
    if (field.classList.contains("red")) {
      if (field.attributes.placeholder != null) {
        field.attributes.placeholder.value = "Please try again";
      }
    }
  });
};

Library.prototype.addCategory = function () {};
Library.prototype.filter = function () {};
Library.prototype.render = function () {};

function Book([url, title, author, year, category, isbn, description]) {
  this.imgUrl = url;
  this.title = title;
  this.author = author;
  this.year = year;
  this.category = category;
  this.isbn = isbn;
  this.description = description;
}

export { Library, Book };

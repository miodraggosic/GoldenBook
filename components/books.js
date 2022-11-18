import { Library, Book } from "./Library.js";
(function () {
  const addBookForm = document.querySelector(".addBook form");
  const addBookBtn = document.querySelector('button[value="add"]');
  const inputFields = document.querySelectorAll(".input[name]");
  const authorField = document.querySelector("select[name='author']");

  const Api = "http://localhost:3000/books";

  const getBooksDb = async () => {
    const booksDb = await fetch(Api)
      .then((response) => response.json())
      .then((data) => data);
    console.log(booksDb);

    let library = new Library();
    library.getBooks(booksDb);
    console.log(library.bookList);

    const appendOptions = (name) => {
      let elem = document.querySelector(`[name=${name}]`);
      library.bookList.forEach((book) => {
        let option = document.createElement("option");
        option.textContent = `${book[name]}`;
        elem.appendChild(option);
      });
    };
    appendOptions("author");
    appendOptions("category");

    authorField.addEventListener("click", (e) => {
      let descrpField = document.querySelector("textarea");
      descrpField.attributes.placeholder.value = `${e.target.value} - description`;
    });

    addBookBtn.addEventListener("click", (e) => {
      e.preventDefault();

      let inputValues = [];
      inputFields.forEach((input) => inputValues.push(input.value));

      let book = new Book(inputValues);

      library.validField(inputFields)
        ? (library.addBook(book), addBookForm.submit())
        : library.errorMsg(inputFields);
    });
  };
  getBooksDb();
})();

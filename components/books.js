import { Library } from "./Library.js";
const addBookBtn = document.querySelector('button[value="add"]');

console.log(addBookBtn);

const getBooksDb = (api, array) => {
  fetch(api)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((elem) => {
        array.push(elem);
      })
    );
};

//Books

const Api = "http://localhost:3000/books";
const booksDb = [];

let populateDb = () => getBooksDb(Api, booksDb);
populateDb();

let library = new Library();

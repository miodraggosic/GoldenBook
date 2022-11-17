import { Users, User, Admin } from "./components/Users.js";
import Library from "./components/Library.js";
import getBooksDb from "./components/books.js";

(function () {
  const inpEmail = document.getElementById("email");
  const inpPass = document.getElementById("password");
  const submitBtn = document.querySelector("button[type=submit]");
  const inputForm = document.querySelector(".inputForm");
  const inputs = document.querySelectorAll(".userForm input");

  //local user base
  let usersDb = JSON.parse(localStorage.getItem("users"));
  let updateDb = (arr) => localStorage.setItem("users", JSON.stringify(arr));

  const getUsersDb = () => {
    usersDb == null ? updateDb(users.userslist) : users.getUsers(usersDb);
  };

  let users = new Users();
  getUsersDb();

  let admin = new Admin("gosmio88@gmail.com", 132456789);
  console.log(admin);

  //Books

  const Api = "http://localhost:3000/books";
  const booksDb = [];

  let populateDb = () => getBooksDb(Api, booksDb);
  populateDb();

  let library = new Library();

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let user = new User(inpEmail.value, inpPass.value);
    console.log(users.usersList);
    console.log(booksDb);
    library.getBooks(booksDb);

    console.log(library.bookList);

    users.validUser(inputs)
      ? (users.addUser(user), updateDb(users.usersList), inputForm.submit())
      : (users.errorMsg(inputs), console.log(admin));
  });
})();

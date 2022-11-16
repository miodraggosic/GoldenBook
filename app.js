import { Users, User } from "./components/User.js";
import Library from "./components/Library.js";
import getBooksDb from "./components/books.js";

(function () {
  const inpEmail = document.getElementById("email");
  const inpPass = document.getElementById("password");
  const submitBtn = document.querySelector("button");
  // const inputForm = document.querySelector(".inputForm");

  let usersDb = JSON.parse(localStorage.getItem("users"));
  let updateDb = (arr) => localStorage.setItem("users", JSON.stringify(arr));

  let users = new Users();

  const getUsersDb = () => {
    usersDb == null ? updateDb(users.userslist) : users.getUsers(usersDb);
  };

  getUsersDb();

  //Books

  const Api = "../../booksDb.json";

  let booksDb = [];
  getBooksDb(Api, booksDb);

  let library = new Library();

  console.log(booksDb);

  // console.log(users);
  // console.log(booksDb);

  submitBtn.addEventListener("click", () => {
    let user = new User(inpEmail.value, inpPass.value);
    users.addUser(user);
    console.log(users.usersList);
    updateDb(users.usersList);
    inpEmail.value = "";
    inpPass.value = "";
  });
})();

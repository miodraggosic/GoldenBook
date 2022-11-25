import { Users, User, Admin } from "./components/Users.js";
import Api from "./assets/js/env.js";

(function () {
  const inpEmail = document.getElementById("email");
  const inpPass = document.getElementById("password");
  const submitBtn = document.querySelector("button[type=submit]");
  const inputForm = document.querySelector(".inputForm");
  const inputs = document.querySelectorAll(".userForm input");

  //local user base
  // let usersDb = JSON.parse(localStorage.getItem("users"));
  // let updateDb = (arr) => localStorage.setItem("users", JSON.stringify(arr));

  // const getUsersDb = () => {
  //   usersDb == null ? updateDb(users.userslist) : users.getUsers(usersDb);
  // };

  let users = new Users(Api);
  users.getUsers();
  // getUsersDb();

  let admin = new Admin("gosmio88@gmail.com", 132456789);
  console.log(admin);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let user = new User(inpEmail.value, inpPass.value);

    users.validUser(inputs)
      ? (users.addUser(user), inputForm.submit())
      : users.errorMsg(inputs);
  });
})();

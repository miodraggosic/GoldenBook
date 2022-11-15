import { Users, User, Admin } from "./components/Users.js";

(function () {
  const inpEmail = document.getElementById("email");
  const inpPass = document.getElementById("password");
  const submitBtn = document.querySelector("button");
  const inputForm = document.querySelector(".inputForm");
  const inputs = document.querySelectorAll("input");
  console.log(inputs);

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

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let user = new User(inpEmail.value, inpPass.value);
    console.log(users.usersList);

    users.validUser(inputs)
      ? (users.addUser(user), updateDb(users.usersList), inputForm.submit())
      : (users.errorMsg(inputs), console.log(admin));
  });
})();

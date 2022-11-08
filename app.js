import { Users, User } from "./components/User.js";

(function () {
  const inpEmail = document.getElementById("email");
  const inpPass = document.getElementById("password");
  const submitBtn = document.querySelector("button");
  const inputForm = document.querySelector(".inputForm");

  let usersDb = JSON.parse(localStorage.getItem("users"));
  let updateDb = (arr) => localStorage.setItem("users", JSON.stringify(arr));

  let users = new Users();

  const getUsersDb = () => {
    usersDb == null ? updateDb(users.userslist) : users.getUsers(usersDb);
  };

  getUsersDb();

  console.log(users);

  submitBtn.addEventListener("click", () => {
    let user = new User(inpEmail.value, inpPass.value);
    users.addUser(user);
    console.log(users.usersList);
    updateDb(users.usersList);
    inpEmail.value = "";
    inpPass.value = "";
  });
})();

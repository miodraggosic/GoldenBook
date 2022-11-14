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

  const regex = {
    email: /^\w+([\.-]?\w+)*@\w{3,}(\.\w{2,3})+$/,
    password: /^[\w@-]{8,20}$/,
  };

  let users = new Users();
  getUsersDb();

  function validate(input, regex) {
    let result = regex.test(input.value);
    if (!result) {
      input.classList.add("red");
    } else {
      input.classList.remove("red");
      input.classList.add("green");
    }
    return result;
  }
  // let admin = new Admin("gosmio88@gmail.com", 132456789);
  // // admin.deleteUser("mile@gmail.co");

  console.log(users);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // let user = new User(inpEmail.value, inpPass.value);
    // console.log(users.usersList);
    // users.validUser(user) ? users.addUser(user) : console.log(false);
    // console.log(admin);
    //  admin.deleteUser("mile@gmail.co");
    // updateDb(users.usersList);

    let isValid = 0;
    inputs.forEach((input) => {
      validate(input, regex[input.name]) ? (isValid += 1) : (isValid -= 1);
    });

    if (isValid == inputs.length) {
      console.log(isValid);
      let user = new User(inpEmail.value, inpPass.value);
      users.addUser(user);
      console.log(users.usersList);
      updateDb(users.usersList);
    } else {
      console.log(isValid);
    }
  });
})();

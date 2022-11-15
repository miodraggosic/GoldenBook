function Users() {
  this.usersList = [];
  this.regex = {
    email: /^\w+([\.-]?\w+)*@\w{3,}(\.\w{2,3})+$/,
    password: /^[\w@-]{8,20}$/,
  };
}
Users.prototype.errorMsg = function (arr) {
  arr.forEach((field) => {
    if (field.classList.contains("red")) {
      field.attributes.placeholder.value = "Please try again";
    }
  });
};
Users.prototype.addUser = function (user) {
  this.usersList.push(user);
};
Users.prototype.deleteUser = function (arr) {
  arr.forEach(
    (user) =>
      (this.usersList = this.usersList.filter((users) => users.email != user))
  );
  // this.usersList = this.usersList.filter((users) => users.email != email);
};
Users.prototype.getUsers = function (arr) {
  arr.forEach((user) => {
    let newUser = new User(user.email, user.password);
    this.addUser(newUser);
  });
};

Users.prototype.validUser = function (arr) {
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

function User(email, pass) {
  this.email = email;
  this.password = pass;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
};

User.prototype.logout = function () {
  this.online = false;
};

function Admin(...arg) {
  User.apply(this, arg);
  this.admin = true;
}

Admin.prototype = Object.create(User.prototype);

export { Users, User, Admin };

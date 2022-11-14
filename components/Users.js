function Users() {
  this.usersList = [];
  this.regex = {
    email: /^\w+([\.-]?\w+)*@\w{3,}(\.\w{2,3})+$/,
    password: /^[\w@-]{8,20}$/,
  };
}
Users.prototype.addUser = function (user) {
  this.usersList.push(user);
};
Users.prototype.getUsers = function (arr) {
  arr.forEach((user) => {
    let newUser = new User(user.email, user.password);
    this.addUser(newUser);
  });
};

// Users.prototype.validUser = function (user) {
//   if (
//     this.regex.email.test(user.email) &&
//     this.regex.password.test(user.password)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

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
  // Users.call(this);

  this.admin = true;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.addBook = function (book) {};

Admin.prototype.deleteUser = function (user) {
  // console.log(user);
  // let users = this.getUsers;
  // console.log(users);
  // return users;
};

// let adm = new Admin("mile", "133465");
// console.log(adm);
// adm.deleteUser("mile");

// let checkUser = users.filter((user) => user.email == this.email);
// console.log(checkUser);
// checkUser.length > 0 ? alert("email alredy exist") : users.push(this);

export { Users, User, Admin };

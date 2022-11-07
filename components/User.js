function Users() {
  this.usersList = [];
}
Users.prototype.addUser = function (user) {
  this.usersList.push(user);
};
Users.prototype.getUsers = function (arr) {
  arr.forEach((user) => {
    let newUser = new User(user.email, user.pass);
    this.addUser(newUser);
  });
};

function User(email, pass) {
  this.email = email;
  this.pass = pass;
  this.online = false;
}

Users.prototype.login = function () {
  this.online = true;
};

Users.prototype.logout = function () {
  this.online = false;
};

// let checkUser = users.filter((user) => user.email == this.email);
// console.log(checkUser);
// checkUser.length > 0 ? alert("email alredy exist") : users.push(this);

export { Users, User };

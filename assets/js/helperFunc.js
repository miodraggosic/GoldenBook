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

export default validate;

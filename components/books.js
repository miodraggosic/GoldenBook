const getBooksDb = (api, array) => {
  fetch(api)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((elem) => {
        array.push(elem);
      })
    );
};

export default getBooksDb;

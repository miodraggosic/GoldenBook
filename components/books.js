const getBooksDb = function (api, array) {
  fetch(api)
    .then((response) => response.json())
    .then((data) =>
      data.results.forEach((elem) => {
        array.push(elem);
      })
    );
};

export default getBooksDb;

const getBooksDb = async (api, array) => {
  await fetch(api)
    .then((response) => response.json())
    .then((data) =>
      data.books.forEach((elem) => {
        array.push(elem);
      })
    );
};

export default getBooksDb;

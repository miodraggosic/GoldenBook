const localPort = "http://localhost:3000/";

const users = `${localPort}users`;
const library = `${localPort}library`;

const apiExport = [
  ["users", users],
  ["library", library],
];

const Api = Object.fromEntries(apiExport);

export default Api;

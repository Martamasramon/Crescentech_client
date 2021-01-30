const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/api/*", { target: "https://evening-eyrie-40887.herokuapp.com/" }));
};

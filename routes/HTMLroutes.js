var path = require("path");

module.exports = (app) => {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  app.get("/speeches", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/speeches.html"));
  });
};

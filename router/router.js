module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("main.html");
  });
  //   app.get("/about", function(req, res) {
  //     res.render("about.html");
  //   });
};

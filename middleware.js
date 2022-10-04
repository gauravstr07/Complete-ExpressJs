module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
      res.send("Please Provide your age");
    } else if (req.query.age < 18) {
      res.send("Use are not eligible for this page🔞");
    } else {
      next();
    }
  };
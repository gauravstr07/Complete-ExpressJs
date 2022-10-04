const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();

app.use("/", route);
app.use(express.json());
route.use(reqFilter);
const port = 5000;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("*", reqFilter, (req, res) => {
  res.send("Page not found");
});

route.get("/user", reqFilter, (req, res) => {
  res.send("Welcome💦💞");
});

route.get("/contact", reqFilter, (req, res) => {
  res.send("Contact me🔱🛂");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}💥`);
});

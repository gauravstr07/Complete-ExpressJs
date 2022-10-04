const express = require("express");
const reqFilter = require('./middleware');
const app = express();

app.use(express.json());

const port = 5000;



app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/user", reqFilter, (req, res) => {
  res.send("Welcome💦💞");
});

app.get("*", reqFilter, (req, res) => {
  res.send("Page not found");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}💥`);
});

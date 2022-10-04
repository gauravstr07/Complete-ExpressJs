const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from nodeJs server💖");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}💥`);
});

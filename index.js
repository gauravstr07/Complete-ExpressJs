const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  console.log('Data send by browser' , req.query);
  res.send("Hello from nodeJs server Welcome " + req.query.name + " 💖");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}💥`);
});

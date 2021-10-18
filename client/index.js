const path = require("path");
const axios = require("axios");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/dist")));

app.use(express.json());

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

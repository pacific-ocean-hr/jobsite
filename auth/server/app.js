const express = require("express");
const signup = require("./routes/signup.js");
const signin = require("./routes/signin.js");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.post("/api/signup", signup);
app.post("/api/signin", signin);

module.exports = app;

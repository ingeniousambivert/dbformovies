const express = require("express");
const path = require("path");
const app = express();

// Serve static files
app.use(express.static(__dirname, "./dist/dbformovies"));

// Send all requests to index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/dbformovies/index.html"));
});

// process.env.PWD = process.cwd();

// app.use(express.static(process.env.PWD + "/build"));

// app.get("/*", (req, res) => {
//   const index = path.join(process.env.PWD, "/build/index.html");
//   res.sendFile(index);
// });

// default Heroku PORT
app.listen(process.env.PORT || 4040);

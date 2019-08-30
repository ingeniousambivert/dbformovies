const express = require("express");
const path = require("path");
const app = express();

// Serve static files
app.use(express.static(__dirname + "/dbformovies/dist/"));

// Send all requests to index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dbformovies/dist/index.html"));
});

// default Heroku PORT
app.listen(process.env.PORT || 4040);

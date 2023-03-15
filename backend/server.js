const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const skillsRoutes = require("./routes/skillsRoutes.js");
const app = express();

dotenv.config();

connectDB();

// app.use("/api/skills", skillsRoutes);

// Is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
// The extended option allows to choose between parsing the URL-encoded data
// with the querystring library (when false ) or the qs library (when true ).
// The “extended” syntax allows for rich objects and arrays to be encoded into the
// URL-encoded format, allowing for a JSON-like experience with URL-encoded.
app.use(express.urlencoded({ extended: false }));

app.use("/api/skills", require("./routes/skillsRoutes"));

// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error while starting server`);
  } else {
    console.log(`Server started at ${PORT}`);
  }
});

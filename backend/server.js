const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const goalsRoutes = require("./routes/goalsRoutes.js");
const app = express();

dotenv.config();

connectDB();

app.use(express.json());
app.use("/api/goals", goalsRoutes);

// custom error handling
// app.use((req, res, next) => {
//   const error = new Error(`Not found - ${req.originalUrl}`);
//   res.status(404);
//   next(error);
// });
// app.use((err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   res.status(statusCode);
//   res.json({
//     message: err.message,
//   });
// });
//  **

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error while starting server`);
  } else {
    console.log(`Server started at ${PORT}`);
  }
});

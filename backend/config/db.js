const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.TEST_DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useCreateIndex: true,
    });
    console.log(` 2 - MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(` 2 - Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

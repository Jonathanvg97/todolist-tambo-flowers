const mongoose = require("mongoose");

const connectDB = () =>
  mongoose
    .connect("mongodb://127.0.0.1:27017/todolist", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"))
    .catch(console.error);

module.exports = connectDB;

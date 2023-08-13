const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://olexander:mongoA53@cluster0.nw90n5f.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
    console.log("Database connection successful");
  })

  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

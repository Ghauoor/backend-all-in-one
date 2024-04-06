import "dotenv/config";
import connectDB from "./db/index.js";

connectDB();
/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      "ERROR in DB Connection";
      throw error;
    });
    app.listen(process.env.PORT, () => {
      `app is listening on ${process.env.PORT}`;
    });
  } catch (error) {
    console.log(error.message);
    throw error;
  }
})();
*/

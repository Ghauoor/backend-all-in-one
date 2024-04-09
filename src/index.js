import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      "ERROR in DB Connection";
      throw error;
    });
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("MONGODB Connection Failed ", error.message));
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

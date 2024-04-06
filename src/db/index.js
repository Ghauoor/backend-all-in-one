import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstances = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDb is connected !! DB HOST: ${connectionInstances.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECT ERROR" + error.message);
    process.exit(1);
  }
};

export default connectDB;

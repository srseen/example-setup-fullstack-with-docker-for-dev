import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";
import "colors";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB".green);
    app.listen(PORT, () => {
      console.log(`Server running on port`.green + ` ${PORT}`.red);
      console.log(`Visit http://localhost:${PORT}`.blue);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:".red, err);
  });

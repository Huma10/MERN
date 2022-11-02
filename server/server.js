import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
const app = express();

app.use(cors())

const PORT = process.env.PORT || 7000;


app.get("/", (req, resp) => {
  resp.send("hello");
});

await mongoose.connect("mongodb://127.0.0.1:27017")
console.log("Connection extablished");

app.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});

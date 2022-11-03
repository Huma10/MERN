import express from "express";
import connectDb from "./database/mongodb.js"
import cors from 'cors';
import bodyParser from "body-parser";
import TransactionRoutes from './routes/transaction.js'
const app = express();

app.use(cors())

app.use(bodyParser.json())

app.use('/transaction',TransactionRoutes)

const PORT = process.env.PORT || 7000;

connectDb();
app.get("/", (req, resp) => {
  resp.send("hello");
});

app.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});

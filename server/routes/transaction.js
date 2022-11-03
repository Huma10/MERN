import { Router } from "express";
import Transaction from "../models/Transaction.js";

const router = Router();

router.get("/", async (req, resp) => {
  const transaction = await Transaction.find({}).sort({ createdAt: -1 });
  console.log(transaction);
  resp.json({ data: transaction });
});

router.post("/", async (req, resp) => {
  const { amount, details, date } = req.body;
  const transaction = new Transaction({
    amount,
    details,
    date,
  });
  await transaction.save();
  resp.json({ message: "Success" });
});

export default router;
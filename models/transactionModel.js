import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Completed", "Failed"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);

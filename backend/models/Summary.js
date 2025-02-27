const mongoose = require("mongoose");

const SummarySchema = new mongoose.Schema({
  callId: { type: mongoose.Schema.Types.ObjectId, ref: "Call" },
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  summaryText: { type: String, required: true },
  sentiment: { type: String, enum: ["positive", "neutral", "negative"] },
  keyPoints: [String]
}, { timestamps: true });

module.exports = mongoose.model("Summary", SummarySchema);

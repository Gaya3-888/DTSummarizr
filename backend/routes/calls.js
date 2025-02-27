const express = require("express");
const Call = require("../models/Call");

const router = express.Router();

// Upload a call record (Placeholder for file upload logic)
router.post("/upload", async (req, res) => {
  try {
    const { agentId, audioFile } = req.body;
    const newCall = new Call({ agentId, audioFile });
    await newCall.save();
    res.json({ message: "Call uploaded successfully", call: newCall });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all calls
router.get("/", async (req, res) => {
  try {
    const calls = await Call.find().populate("agentId", "name email");
    res.json(calls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

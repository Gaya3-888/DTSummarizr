const express = require("express");
const Summary = require("../models/Summary");

const router = express.Router();

// Get all summaries
router.get("/", async (req, res) => {
  try {
    const summaries = await Summary.find().populate("callId agentId", "name email 
transcript");
    res.json(summaries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get summary by call ID
router.get("/:callId", async (req, res) => {
  try {
    const summary = await Summary.findOne({ callId: req.params.callId });
    if (!summary) return res.status(404).json({ error: "Summary not found" });
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

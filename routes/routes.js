const express = require("express");
const router = express.Router();

const { getAllTips, createTip } = require("../models/tips");

// router.get("/", function (req, res) {
//   res.json({ message: "asrdthyfhtdgrsfeadss" });
// });

router.get("/", async function (req, res, next) {
  try {
    const tips = await getAllTips();
    res.json({ success: true, data: tips });
  } catch (err) {
    console.log(err);
  }
});

router.post("/createTip", async function (req, res, next) {
  try {
    const { tip } = req.body;
    const tips = await createTip(tip);
    res.json({ success: true, valueInserted: tip });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
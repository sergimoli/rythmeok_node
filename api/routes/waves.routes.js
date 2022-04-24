const express = require("express");
const Wave = require("../models/waves.model");
const router = express.Router();

const { isAuth } = require("../middlewares/auth.middleware");

router.get("/", async (req, res, next) => {
  try {
    const waves = await Wave.find();
    return res.status(200).json(waves);
  } catch (error) {
    return next(error);
  }
});

router.get("/:name", async (req, res, next) => {
  const { name } = req.params;

  try {
    const waveByName = await Wave.find({ name });
    return res.status(200).json(waveByName);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const waveById = await Wave.find({ id });
    return res.status(200).json(waveById);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

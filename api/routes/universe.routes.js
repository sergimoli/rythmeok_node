const express = require("express");

const Universe = require("../models/universe.models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const Universes = await Universe.find().populate("characters");
    return res.status(200).json(Universes);
  } catch (error) {
    return next(error);
  }
});

router.post("/createUniverse", async (req, res, next) => {
  try {
    const newUniverse = new Universe({
      name: req.body.name,
      characters: req.body.characters,
    });

    const createdUniverse = await newUniverse.save();
    return res.status(201).json(createdUniverse);
  } catch (error) {
    next(error);
  }
});

router.get("/searchByName/:name", async (req, res, next) => {
  const { name } = req.params;

  try {
    const UniverseByName = await Universe.find({ name });
    return res.status(200).json(UniverseByName);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

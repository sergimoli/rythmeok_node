const express = require("express");
const Event = require("../models/events.model");
const router = express.Router();

const { isAuth } = require("../middlewares/auth.middleware");

router.get("/", async (req, res, next) => {
  try {
    const events = await Event.find().populate("idartist").populate("idhall");
    return res.status(200).json(events);
  } catch (error) {
    return next(error);
  }
});

// router.get("/:name", async (req, res, next) => {
//   const { name } = req.params;

//   try {
//     const eventByName = await Event.find({ name });
//     return res.status(200).json(eventByName);
//   } catch (error) {
//     return next(error);
//   }
// });

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    // const eventById = await Event.findById({ id })
    const eventById = await Event.findById(id)
      .populate("idartist")
      .populate("idhall");
    return res.status(200).json(eventById);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

const express = require("express");
const Character = require("../models/characters.model");
const router = express.Router();

const { isAuth } = require("../middlewares/auth.middleware");

router.get("/", async (req, res, next) => {
  try {
    const characters = await Character.find();
    return res.status(200).json(characters);
  } catch (error) {
    return next(error);
  }
});

const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/file.middlewares");

router.post(
  "/",
  [upload.single("image"), uploadToCloudinary],
  async (req, res, next) => {
    try {
      const newCharacter = new Character({
        id: req.body.id,
        name: req.body.name,
        catname: req.body.catname,
        born: req.body.born,
        race: req.body.race,
        gender: req.body.gender,
        bio: req.body.bio,
        health: req.body.health,
        attack: req.body.attack,
        defense: req.body.defense,
        kiRestoreSpeed: req.body.kiRestoreSpeed,
        // image: req.file_url,
        image: req.body.image,
      });
      // Guardamos el personaje en la DB
      const createdCharacter = await newCharacter.save();
      return res.status(201).json(createdCharacter);
    } catch (error) {
      // Lanzamos la función next con el error para que lo gestione Express
      next(error);
    }
  }
);

router.post("/createCharacter", [isAuth], async (req, res, next) => {
  try {
    const newCharacter = new Character({
      name: req.body.name,
      population: req.body.population,
      flag: req.body.flag,
    });

    const createdCharacter = await newCharacter.save();
    return res.status(201).json(createdCharacter);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params; //Recuperamos el id de la url
    const characterModify = new Character(req.body); //instanciamos un nuevo Character con la información del body
    characterModify._id = id; //añadimos la propiedad _id al personaje creado
    const characterUpdated = await Character.findByIdAndUpdate(
      id,
      characterModify,
      { new: true }
    );
    return res.status(200).json(characterUpdated); //Este personaje que devolvemos es el anterior a su modificación
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
    await Character.findByIdAndDelete(id);
    return res.status(200).json("Character deleted!");
  } catch (error) {
    return next(error);
  }
});

router.get("/searchByName/:name", async (req, res, next) => {
  const { name } = req.params;

  try {
    const characterByName = await Character.find({ name });
    return res.status(200).json(characterByName);
  } catch (error) {
    return next(error);
  }
});

router.get("/searchById/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const characterById = await Character.find({ id }); //si necessito fer un filtre per _id ho haig de fer amb findbyid
    return res.status(200).json(characterById);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

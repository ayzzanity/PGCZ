const express = require("express");
const router = express.Router();
const { GetPokemon } = require("../controllers/PokemonController");

router.get("/:id", GetPokemon);

module.exports = router;

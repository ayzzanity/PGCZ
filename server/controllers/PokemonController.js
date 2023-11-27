const axios = require("axios");

const GetPokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const { name, types, stats, sprites } = data;
    console.log(`Pokemon Found: ${name}`);
    res.send({ name, types, stats, sprites });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).send(`Error: ${error.message}`);
  }
};

module.exports = { GetPokemon };

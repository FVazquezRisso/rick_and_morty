const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = await axios.get(URL + id);

    if (data.error) {
      return res.status(404).send("Not found");
    }

    const { name, gender, species, origin, image, status } = data;
    
    const character = {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status,
    };

    return res.json(character);

  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCharById };

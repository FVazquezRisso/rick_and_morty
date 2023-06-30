const { Favorite, User } = require("../DB_connection");

const postFav = async (req, res) => {
  const { id, name, origin, status, image, species, gender, userId } = req.body;

  try {
    if (!id) return res.status(401).send("Faltan datos");

    const character = {
      id,
      name,
      origin,
      status,
      image,
      species,
      gender,
    };

    const char = await Favorite.create(character);

    if (userId) {
      const user = await User.findByPk(userId);
      if (user) await user.addFavorite(char);
    }

    const allFavorites = await Favorite.findAll();

    return res.status(200).json(allFavorites);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { postFav };

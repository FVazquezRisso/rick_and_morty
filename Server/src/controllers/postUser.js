const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) return res.status(400).send("Faltan datos");

    const newUser = {
      email,
      password,
    };

    const { userSaved } = await User.create(newUser);
    return res.status(200).json(userSaved);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  postUser,
};

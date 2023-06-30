const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");
const router = require("express").Router();

router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = { router };

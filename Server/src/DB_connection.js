require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

const sequelize = new Sequelize(
  // URL de conexión a la base de datos
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  {
    logging: false,
    native: false,
    dialect: "postgres", 
    define: {
      timestamps: false, 
    },
  }
);

UserModel(sequelize);
FavoriteModel(sequelize);

// Relaciona tus modelos aquí
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

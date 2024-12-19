const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Cart extends Model {}

Cart.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize: connection,
  }
);

module.exports = Cart;

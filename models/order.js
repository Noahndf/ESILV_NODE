const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Order extends Model {}

Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "COMPLETED", "CANCELLED"),
      defaultValue: "PENDING",
    },
  },
  {
    sequelize: connection,
  }
);

module.exports = Order;
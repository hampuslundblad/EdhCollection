module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define("Card", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    set: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    foil: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  });
  return Card;
};

"use strict";

import { Model } from "sequelize";

interface CardAttributes {
  name: string;
  price: number;
  cardSet: string;
  quantity: number;
  foil: boolean;
  imageUrl: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Card extends Model<CardAttributes> implements CardAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    name!: string;
    price!: number;
    cardSet: string;
    quantity!: number;
    foil!: boolean;
    imageUrl!: string;

    static associate(models: any) {
      // define association here
      Card.belongsTo(models.Collection);
    }
  }
  Card.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      cardSet: {
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
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};

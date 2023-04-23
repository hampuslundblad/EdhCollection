module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define("Collection", {
    name: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["wanted", "have"]],
      },
    },
  });
  return Collection;
};
("use strict");

import { Model } from "sequelize";

interface CollectionAttributes {
  name: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Collection
    extends Model<CollectionAttributes>
    implements CollectionAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    name: string;

    static associate(models: any) {
      // define association here
      Collection.hasMany(models.Card);
      Collection.belongsTo(models.User);
    }
  }
  Collection.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["wanted", "have"]],
        },
      },
    },
    {
      sequelize,
      modelName: "Collection",
    }
  );
  return Collection;
};

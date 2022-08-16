module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define("Collection", {
    collectionName: {
      type: DataTypes.STRING,
    },
  });
  return Collection;
};

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

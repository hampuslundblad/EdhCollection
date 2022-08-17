function applyAssociations(sequelize) {
  const { User, Collection, Card } = sequelize.models;

  User.hasMany(Collection);
  Collection.belongsTo(User);

  Collection.hasMany(Card);

  Card.belongsTo(Collection);
}

module.exports = { applyAssociations };

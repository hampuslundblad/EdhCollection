function applyAssociations(sequelize) {
  const { User, Collection } = sequelize.models;
  User.hasOne(Collection);
}

module.exports = { applyAssociations };

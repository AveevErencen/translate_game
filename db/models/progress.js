const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Progress extends Model {
    static associate({ User, Theme, Card }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
      this.belongsTo(Card, { foreignKey: 'card_id' });
    }
  }
  Progress.init(
    {
      user_id: DataTypes.INTEGER,
      theme_id: DataTypes.INTEGER,
      card_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Progress',
    },
  );
  return Progress;
};

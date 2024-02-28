const { Model } = require('sequelize');
const theme = require('./theme');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Theme, Progress }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
      this.hasMany(Progress, { foreignKey: 'card_id:' });
    }
  }
  Card.init(
    {
      word_eng: DataTypes.STRING,
      word_rus: DataTypes.STRING,
      theme_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Card',
    },
  );
  return Card;
};

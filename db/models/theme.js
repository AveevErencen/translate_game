const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Card, Progress }) {
      this.hasMany(Card, { foreignKey: 'theme_id' });
      this.hasMany(Progress, { foreignKey: 'theme_id' });
    }
  }
  Theme.init(
    {
      theme_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Theme',
    },
  );
  return Theme;
};

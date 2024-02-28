'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Progresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      theme_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
      },
      card_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cards',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('Now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('Now'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Progresses');
  }
};
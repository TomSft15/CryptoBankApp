'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false, // Le champ 'username' est requis
        unique: true,  // L'username doit être unique
      },
      firstName: {  // Nouveau champ pour le prénom
        type: Sequelize.STRING,
        allowNull: false,  // Prénom obligatoire
      },
      lastName: {  // Nouveau champ pour le nom de famille
        type: Sequelize.STRING,
        allowNull: false,  // Nom de famille obligatoire
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,  // L'email est requis
        unique: true,  // L'email doit être unique
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,  // Le mot de passe ne doit pas être nul
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,  // Valeur par défaut pour createdAt
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,  // Valeur par défaut pour updatedAt
      }
    });
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

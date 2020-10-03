"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Board hasMany Post
    return queryInterface.createTable("Student_Petition", {
      StudentId: {
        type: Sequelize.UUID,
        references: {
          model: "Student", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
        unique: true,
      },
      PetitionId: {
        type: Sequelize.UUID,
        references: {
          model: "Petition", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
        unique: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Student_Petition");
  },
};

const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const comments = sequelize.define(
    "comments",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      feedId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "post",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      textContent: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "comments",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "feedId",
          using: "BTREE",
          fields: [{ name: "feedId" }],
        },
        {
          name: "userId",
          using: "BTREE",
          fields: [{ name: "userId" }],
        },
      ],
    }
  );
  comments.associate = function (models) {
    comments.belongsTo(models.post, { as: "feed", foreignKey: "feedId" });
    comments.belongsTo(models.users, { as: "user", foreignKey: "userId" });
  };

  return comments;
};

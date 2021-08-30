const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('voter', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    voting_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vote',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'voter',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "voting_id",
        using: "BTREE",
        fields: [
          { name: "voting_id" },
        ]
      },
    ]
  });
};

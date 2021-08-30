var DataTypes = require("sequelize").DataTypes;
var _comments = require("./comments");
var _post = require("./post");
var _users = require("./users");
var _vote = require("./vote");
var _voter = require("./voter");

function initModels(sequelize) {
  var comments = _comments(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var vote = _vote(sequelize, DataTypes);
  var voter = _voter(sequelize, DataTypes);

  comments.belongsTo(post, { as: "post", foreignKey: "post_id"});
  post.hasMany(comments, { as: "comments", foreignKey: "post_id"});
  vote.belongsTo(post, { as: "post", foreignKey: "post_id"});
  post.hasMany(vote, { as: "votes", foreignKey: "post_id"});
  comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "user_id"});
  post.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(post, { as: "posts", foreignKey: "user_id"});
  voter.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(voter, { as: "voters", foreignKey: "user_id"});
  voter.belongsTo(vote, { as: "voting", foreignKey: "voting_id"});
  vote.hasMany(voter, { as: "voters", foreignKey: "voting_id"});

  return {
    comments,
    post,
    users,
    vote,
    voter,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

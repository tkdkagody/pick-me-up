var DataTypes = require("sequelize").DataTypes;
var _comments = require("./comments");
var _post = require("./post");
var _post_tags = require("./post_tags");
var _tags = require("./tags");
var _users = require("./users");
var _vote = require("./vote");

function initModels(sequelize) {
  var comments = _comments(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var post_tags = _post_tags(sequelize, DataTypes);
  var tags = _tags(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var vote = _vote(sequelize, DataTypes);

  comments.belongsTo(post, { as: "post", foreignKey: "post_id"});
  post.hasMany(comments, { as: "comments", foreignKey: "post_id"});
  post_tags.belongsTo(post, { as: "post", foreignKey: "post_id"});
  post.hasMany(post_tags, { as: "post_tags", foreignKey: "post_id"});
  vote.belongsTo(post, { as: "post", foreignKey: "post_id"});
  post.hasMany(vote, { as: "votes", foreignKey: "post_id"});
  post_tags.belongsTo(tags, { as: "tag", foreignKey: "tag_id"});
  tags.hasMany(post_tags, { as: "post_tags", foreignKey: "tag_id"});
  comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "user_id"});
  post.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(post, { as: "posts", foreignKey: "user_id"});

  return {
    comments,
    post,
    post_tags,
    tags,
    users,
    vote,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

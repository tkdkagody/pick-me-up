const { voter: voterModel, post: postModel } = require("../../models");
const voter = require("../../models/voter");
module.exports = {
  isVote: async (req, res) => {
    const { postId, userId } = req.query;

    const result = await voterModel.findOne({
      where: {
        voting_id: postId,
        user_id: userId,
      },
    });

    if (!result) {
      return res
        .status(200)
        .json({ message: "user did not vote", isVote: true });
    } else {
      return res.status(202).json({ message: "voted user", isVote: false });
    }
  },
  vote: async (req, res) => {
    const { postId, userId, option } = req.body;

    const result = await voterModel.create({
      voting_id: postId,
      user_id: userId,
      options_check: option,
    });

    console.log(result);
  },
};

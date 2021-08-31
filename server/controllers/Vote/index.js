const { voter: voterModel, post: postModel } = require("../../models");
const voter = require("../../models/voter");
const { isAuthorized } = require("../tokenFunction");
module.exports = {
  isVote: async (req, res) => {
    //헤더값이 들어온다.
    const userInfo = isAuthorized(req);
    const { postId } = req.query;
    const user_id = userInfo.id;
    const result = await voterModel.findOne({
      where: {
        voting_id: postId,
        user_id,
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
    const userInfo = isAuthorized(req);
    const { postId: voting_id, option: options_check } = req.body;
    const user_id = userInfo.id;
    const result = await voterModel.create({
      voting_id,
      user_id: userId,
      options_check,
    });

    console.log(result);
  },
};

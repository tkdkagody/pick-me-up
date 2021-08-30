const { vote: voteModel, post: postModel } = require("../../models");

module.exports = {
  getAllPost: async (req, res) => {
    const result = await postModel.findAll();
    const data = result.map((obj) => {
      return obj.dataValues;
    });
    res.status(200).send({ data, message: "ok" });
  },
};

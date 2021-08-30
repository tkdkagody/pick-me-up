const { post } = require("../models");
const { isAuthorized } = require("./tokenFunction");

module.exports = {
  deleteMyPost: (req, res) => {
    const post_id = req.params.id;
    const accessTokendata = isAuthorized(req);

    if (!accessTokendata) {
      return res.status(401).json({ message: "invalid access token" });
    } else {
      post
        .delete({
          where: {
            id: post_id,
          },
        })
        .then((data) => {
          return res.status(200).json({ message: "ok" });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};

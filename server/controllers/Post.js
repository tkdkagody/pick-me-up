require("dotenv").config();
const { post } = require("../models");
// const jwt = require("jsonwebtoken");
const { isAuthorized } = require("./tokenFunction");

module.exports = {
  sendPost: (req, res) => {
    const accessTokendata = isAuthorized(req);
    const { title, contents, choice_1, choice_2, hashTags } = req.body;
    console.log(accessTokendata);
    console.log(title, contents, choice_1, choice_2, hashTags);
    if (!accessTokendata) {
      res.status(401).send("invalid");
    } else {
      if (!title || !contents || !choice_1 || !choice_2 || !hashTags) {
        res
          .status(422)
          .json({ data: null, message: "insufficient parameters supplied" });
      } else {
        post
          .create({
            user_id: accessTokendata.id,
            title: title,
            contents: contents,
            option1: choice_1,
            option2: choice_2,
            tags: hashTags,
            created_at: new Date(),
            updated_at: new Date(),
          })
          .then((data) => {
            console.log("data:", data);
            res.status(201).json({
              data: data,
              message: "ok",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  },
};

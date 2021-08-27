const { changeProfile } = require("../controllers/ProfileChange");
require("dotenv").config();
const { Router } = require("express");
const router = Router();
const { users } = require("../models");
const jwt = require("jsonwebtoken");

//아이디 닉네임 모바일 비밀번호

router.patch("/user/profile/:id", changeProfile);
router.get("/user/posting-list/:id", getMyPost);

router.post("/sign-up", (req, res) => {
  const { userId, password, userName, mobile, signUpType } = req.body;
  console.log(userId, password, userName, mobile, signUpType);
  if (!userId || !password || !userName || !mobile) {
    return res.status(422).send("insufficient parameters supplied");
  }
  passwordToken = jwt.sign(password, process.env.ACCESS_SECRET);
  users
    .findOrCreate({
      where: {
        user_id: userId,
      },
      defaults: {
        password: passwordToken,
        nickname: userName,
        phone_number: mobile,
        sign_up_type: signUpType,
        account_type: "client",
        created_at: new Date(),
        updated_at: new Date(),
      },
    })
    .then(([result, created]) => {
      if (!created) {
        return res.status(409).send("id exists");
      }
      const data = result.dataValues;
      return res.status(201).json({ message: "ok" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("sign-in", (req, res) => {
  const { userId, password } = req.body;
});

router.get("/", (req, res) => {
  res.send("hello world!");
});

module.exports = router;

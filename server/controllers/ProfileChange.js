const express = require("express");
const { users } = require("../models");
const jwt = require("jsonwebtoken");
const { isAuthorized } = require("./tokenFunction");
const { generateAccessToken } = require("./tokenFunction");
require("dotenv").config();

module.exports = {
  // [POST] /user/profile/:id
  changeProfile: (req, res) => {
    const user_id = req.params.id;
    console.log("user_id", user_id);

    const { userName, mobile, password } = req.body;

    const accessTokendata = isAuthorized(req);
    console.log(accessTokendata);

    if (!accessTokendata) {
      res.status(401).json({ message: "invalid access token" });
    } else {
      // res.status(200).json({ message: "ok" });
      const newPasswordToken = generateAccessToken(password);
      users
        .update(
          {
            nickname: userName,
            phone_number: mobile,
            password: newPasswordToken,
          },
          {
            where: {
              id: accessTokendata.id,
            },
          }
        )
        .then((userInfo) => {
          console.log("userInfo:", userInfo);
          if (!userInfo) {
            res.status(404).json({ message: "user not exists" });
          } else {
            // console.log("userInfo:", userInfo);
            delete userInfo.dataValues.password;
            const newAccessToken = generateAccessToken(userInfo);
            res
              .status(200)
              .json({ data: newAccessToken, message: "profile changed" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};


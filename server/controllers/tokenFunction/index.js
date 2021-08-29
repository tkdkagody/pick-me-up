require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "30s" });
  },
  sendAccessToken: (res, accessToken) => {
    res
      .cooke("jwt", accessToken, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "ok" });
  },
  isAuthorized: (req) => {},
};

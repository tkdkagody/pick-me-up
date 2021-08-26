const { changeProfile } = require('../controllers/ProfileChange');
const { Router } = require("express");
const router = Router();

router.patch("/user/profile/:id", changeProfile);

router.get("/", (res, req) => {
  res.send("hello world!");
});

module.exports = router;

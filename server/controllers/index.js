const { changeProfile } = require('../controllers/ProfileChange');
const { getMyPost } = require("../controllers/GetMyPost");
const { Router } = require("express");
const router = Router();

router.patch("/user/profile/:id", changeProfile);
router.get('/user/posting-list/:id', getMyPost);

router.get("/", (res, req) => {
  res.send("hello world!");
});

module.exports = router;

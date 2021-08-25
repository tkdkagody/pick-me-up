const { Router } = require("express");
const router = Router();

router.get("/", (res, req) => {
  req.send("hello world");
});
module.exports = router;

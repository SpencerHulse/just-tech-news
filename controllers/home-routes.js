const router = require("express").Router();

router.get("/", (req, res) => {
  // render is used for template engines
  res.render("homepage");
});

module.exports = router;

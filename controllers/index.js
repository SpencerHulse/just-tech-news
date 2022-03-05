const router = require("express").Router();
const apiRoutes = require("./api/index");
const homeRoutes = require("./home-routes");
const dashboardRouters = require("./dashboard-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRouters);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

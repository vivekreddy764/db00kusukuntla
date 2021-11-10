// var express = require("express");
// var router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("umbrella", { title: "Search Results umbrella" });
// });

// module.exports = router;

var express = require("express");
const umbrella_controlers = require("../controllers/umbrella");
var router = express.Router();

/* GET restaurants */
router.get("/", umbrella_controlers.umbrella_view_all_Page);
module.exports = router;
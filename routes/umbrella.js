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

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET restaurants */
router.get("/", umbrella_controlers.umbrella_view_all_Page);
module.exports = router;
/* GET detail umbrella page */ 
router.get('/detail', umbrella_controlers.umbrella_view_one_Page); 
/* GET create umbrella page */ 
router.get('/create', secured, umbrella_controlers.umbrella_create_Page); 
/* GET create update page */ 
router.get('/update', secured, umbrella_controlers.umbrella_update_Page); 
/* GET create umbrella page */ 
router.get('/delete', umbrella_controlers.umbrella_delete_Page);
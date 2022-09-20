const express = require("express");
const router = express.Router();

const frontendController = require("../controllers/frontendController");
const authenticate = require("../middleware/authenticate");

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/learnAboutBlood", function(req,res,next) {
  res.render("learnAboutBlood")
})

router.get("/user", frontendController.getUsers);

router.get("/home", frontendController.home);

router.get("/signin", frontendController.signin);

router.get("/logout", frontendController.logout);

router.get("/profile", frontendController.profile);

router.post(
  "/login-data-store",
  frontendController.loginDataStore
);

module.exports = router;

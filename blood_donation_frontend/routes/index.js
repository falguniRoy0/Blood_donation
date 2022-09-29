const express = require("express");
const router = express.Router();

const frontendController = require("../controllers/frontendController");
const authenticate = require("../middleware/authenticate");

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/learnAboutBlood", function(req,res,next) {
  res.render("learnAboutBlood")
});

router.get("/eligibility", function(req,res,next) {
  res.render("eligibility")
});

router.get("/typesOfBD", function(req,res,next) {
  res.render("typesOfBD")
});

router.get("/commonConcerns", function(req,res,next) {
  res.render("commonConcerns")
});

router.get("/user", frontendController.getUsers);

router.get("/home", frontendController.home);

router.get("/signin", frontendController.signin);

router.get("/logout", frontendController.logout);

router.get("/profile", frontendController.profile);

router.get("/donorList", frontendController.donorList);

router.post(
  "/login-data-store",
  frontendController.loginDataStore
);

module.exports = router;

const express = require("express");
const router = express.Router();

const frontendController = require("../controllers/frontendController");
const authenticate = require("../middleware/authenticate");

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/learnAboutBlood", function(req,res,next) {
  res.render("howToDonate/learnAboutBlood")
});

router.get("/eligibility", function(req,res,next) {
  res.render("howToDonate/eligibility")
});

router.get("/typesOfBD", function(req,res,next) {
  res.render("howToDonate/typesOfBD")
});

router.get("/commonConcerns", function(req,res,next) {
  res.render("howToDonate/commonConcerns")
});

router.get("/bloodProducts", function(req,res,next) {
  res.render("bloodProducts")
});

router.get("/rulesDonors", function(req,res,next) {
  res.render("basicRules/forDonors")
});

router.get("/rulesRecipients", function(req,res,next) {
  res.render("basicRules/forRecipients")
});

router.get("/user", frontendController.getUsers);

router.get("/home", frontendController.home);

router.get("/signin", frontendController.signin);

router.get("/logout", frontendController.logout);

router.get("/profile", frontendController.profile);

router.get("/donorList", frontendController.donorList);

router.get("/recipientList", frontendController.recipientList);

router.get("/volunteerList", frontendController.getVolunteerList);

router.get("/moderatorList", frontendController.getModeratorList);

router.post(
  "/login-data-store",
  frontendController.loginDataStore
);

module.exports = router;

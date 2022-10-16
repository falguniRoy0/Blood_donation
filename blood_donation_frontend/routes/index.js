const express = require("express");
const router = express.Router();

const frontendController = require("../controllers/frontendController");
const authenticate = require("../middleware/authenticate");

router.get("/", function (req, res, next) {
  res.render("index", {
    pageTitle: 'REDFLOW Index',
  });
});

router.get("/about", function (req, res, next) {
  res.render("about", {
    pageTitle: 'REDFLOW About',
  });
});

router.get("/learnAboutBlood", function(req,res,next) {
  res.render("howToDonate/learnAboutBlood", {
    pageTitle: 'REDFLOW Learn About Blood'
  })
});

router.get("/eligibility", function(req,res,next) {
  res.render("howToDonate/eligibility", {
    pageTitle: 'REDFLOW Requirements Eligibility'
  })
});

router.get("/typesOfBD", function(req,res,next) {
  res.render("howToDonate/typesOfBD", {
    pageTitle: 'REDFLOW Tyes of Blood'
  })
});

router.get("/commonConcerns", function(req,res,next) {
  res.render("howToDonate/commonConcerns", {
    pageTitle: 'REDFLOW Common Concerns'
  })
});

router.get("/bloodProducts", function(req,res,next) {
  res.render("bloodProducts", {
    pageTitle: 'REDFLOW Blood Products'
  })
});

router.get("/rulesDonors", function(req,res,next) {
  res.render("basicRules/forDonors", {
    pageTitle: 'REDFLOW Rules'
  })
});

router.get("/rulesRecipients", function(req,res,next) {
  res.render("basicRules/forRecipients", {
    pageTitle: 'REDFLOW Rules'
  })
});

router.get("/contact", function(req,res,next) {
  res.render("contact", {
    pageTitle: 'REDFLOW Contact'
  })
});


router.get("/selectUser", function(req,res,next) {
  res.render("selectUser", {
    pageTitle: 'REDFLOW User Type'
  })
});

  router.get("/selectDonation", function(req,res,next) {
    res.render("selectDonation", {
      pageTitle: 'REDFLOW Donation Type'
    })
});

router.get("/selectBloodGroup", function(req,res,next) {
  res.render("selectBloodGroup", {
    pageTitle: 'REDFLOW Blood Group'
  })
});

router.get("/user", frontendController.getUsers);

router.get("/home", frontendController.home);

router.get("/signin", frontendController.signin);

router.get("/logout", frontendController.logout);

router.get("/profile", frontendController.profile);

router.get("/donorList", frontendController.donorList);
router.get("/donorQuery", frontendController.donorQuery);

router.get("/recipientList", frontendController.recipientList);

router.get("/chooseBy", frontendController.chooseBy);
router.get("/byRequest", frontendController.byRequest);
router.get("/byUs", frontendController.byUs);
router.get("/enterLocation", frontendController.enterLocation);




router.post(
  "/login-data-store",
  frontendController.loginDataStore
);

module.exports = router;

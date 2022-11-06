const express = require("express");
const router = express.Router();

const frontendController = require("../controllers/frontendController");
const authenticate = require("../middleware/authenticate");

router.get("/", function (req, res, next) {
  res.render("index", {
    pageTitle: 'REDFLOW Home',
  });
});

router.get("/about", function (req, res, next) {
  res.render("about", {
    pageTitle: 'REDFLOW About',
  });
});

router.get("/doYouKnow", function (req, res, next) {
  res.render("doYouKnow", {
    pageTitle: 'REDFLOW Do You know?',
  });
});

router.get("/learnAboutBlood", function(req,res,next) {
  res.render("howToDonate/learnAboutBlood", {
    pageTitle: 'REDFLOW Learn About Blood'
  })
});

router.get("/dashboard", function(req,res,next) {
  res.render("dashboard/index", {
    pageTitle: 'REDFLOW'
  })
});

router.get("/chart", function(req,res,next) {
  res.render("dashboard/chart", {
    pageTitle: 'REDFLOW'
  })
});
router.get("/userTable", function(req,res,next) {
  res.render("dashboard/table", {
    pageTitle: 'REDFLOW'
  })
});
router.get("/donorTable", function(req,res,next) {
  res.render("dashboard/donorTable", {
    pageTitle: 'REDFLOW'
  })
});
router.get("/recipientTable", function(req,res,next) {
  res.render("dashboard/recTable", {
    pageTitle: 'REDFLOW'
  })
});
router.get("/safeDonorTable", function(req,res,next) {
  res.render("dashboard/safeDonorTable", {
    pageTitle: 'REDFLOW'
  })
});
router.get("/requestTable", function(req,res,next) {
  res.render("dashboard/requestTable", {
    pageTitle: 'REDFLOW'
  })
});
router.get("/pharmacyTable", function(req,res,next) {
  res.render("dashboard/pharmacyTable", {
    pageTitle: 'REDFLOW'
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
    pageTitle: 'REDFLOW Login Variation'
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
router.get("/pharmacyUser", frontendController.getPharmacy);

router.get("/home", frontendController.home);
router.get("/rHome", frontendController.rHome);

router.get("/signin", frontendController.signin);
router.get("/rSignin", frontendController.rSignin);
router.get("/forgetPass", frontendController.forgetPass);

router.get("/logout", frontendController.logout);

router.get("/profile", frontendController.profile);
router.get("/account", frontendController.account);

router.get("/donorList", frontendController.donorList);
router.get("/donorQuery", frontendController.donorQuery);

router.get("/recipientList", frontendController.recipientList);
router.get("/pharmacyList", frontendController.pharmacyList);


router.get("/chooseBy", frontendController.chooseBy);
router.get("/byRequest", frontendController.byRequest);
router.get("/enterLocation", frontendController.enterLocation);
router.get("/safeDonors", frontendController.safeDonors);
router.get("/bloodReq", frontendController.bloodReq);
router.get("/requestList", frontendController.requestList);


router.post(
  "/login-data-store",
  frontendController.loginDataStore
);

module.exports = router;

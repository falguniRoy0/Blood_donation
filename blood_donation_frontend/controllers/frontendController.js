const { storeToken } = require("../utils/session");

class FrontendController {
  async getUsers(req, res, next) {
    res.render("pages/users/index", {
      pageTitle: 'REDFLOW signUp'
    });
  }

  async map(req, res, next) {
    res.render("pages/users/map", {
      pageTitle: 'REDFLOW Location'
    });
  }

  async getPharmacy(req, res, next) {
    res.render("pages/users/pharmacyIndex", {
      pageTitle: 'REDFLOW Give Pharmacy Details'
    });
  }

  async signin(req, res, next) {
    res.render("pages/auth/index", {
      pageTitle: 'REDFLOW LogIn'
    });
  }

  async rSignin(req, res, next) {
    res.render("pages/auth/index2", {
      pageTitle: 'REDFLOW LogIn'
    });
  }

  async forgetPass(req, res, next) {
    res.render("pages/auth/forgetPass", {
      pageTitle: 'REDFLOW Password Forgot'
    });
  }

  async home(req, res, next) {
    res.render("pages/users/home", {
      pageTitle: 'REDFLOW Home'
    });
  }

  async rHome(req, res, next) {
    res.render("pages/recipient/home", {
      pageTitle: 'REDFLOW Home'
    });
  }

  async profile(req, res, next) {
    res.render("pages/users/profile", {
      pageTitle: 'REDFLOW Profile'
    });
  }

  async account(req, res, next) {
    res.render("pages/recipient/profile", {
      pageTitle: 'REDFLOW Profile'
    });
  }

  async donorList(req, res, next) {
    res.render("pages/donor/donorList", {
      pageTitle: 'REDFLOW Donors List'
    });
  }
  async donorQuery(req, res, next) {
    res.render("pages/donor/donorQuery", {
      pageTitle: 'REDFLOW'
    });
  }


  async recipientList(req, res, next) {
    res.render("pages/recipient/recipientList", {
      pageTitle: 'REDFLOW Recipients List'
    });
  }
  async pharmacyList(req, res, next) {
    res.render("pages/recipient/pharmacyList", {
      pageTitle: 'REDFLOW Pharmacies List'
    });
  }


  async chooseBy(req, res, next) {
    res.render("pages/bloodCollect/chooseBy", {
      pageTitle: 'REDFLOW'
    });
  }
  async bloodReq(req, res, next) {
    res.render("pages/bloodCollect/bloodReq", {
      pageTitle: 'REDFLOW'
    });
  }
  async byRequest(req, res, next) {
    res.render("pages/bloodCollect/byRequest", {
      pageTitle: 'REDFLOW'
    });
  }
  async enterLocation(req, res, next) {
    res.render("pages/bloodCollect/enterLocation", {
      pageTitle: 'REDFLOW'
    });
  }
  async safeDonors(req, res, next) {
    res.render("pages/bloodCollect/safeDonors", {
      pageTitle: 'REDFLOW'
    });
  }
  async requestList(req, res, next) {
    res.render("pages/bloodCollect/requestList", {
      pageTitle: 'REDFLOW'
    });
  }


  async loginDataStore(req, res, next) {
    let userToken = req.body.token.split(".")[1];
    let buff = new Buffer.from(userToken, "base64");
    let user = JSON.parse(buff.toString("ascii"));
    // let role = user.roles.find((role) => role.name == "Donor");
    // if (!role) {
    //   return res
    //     .status(401)
    //     .json({ isLoggedIn: false, message: "You have no permission" });
    // }

    req.session.token = req.body.token;
    storeToken(req.session.token);
    req.session.user = user;
    res.status(200).json({ isLoggedIn: true, message: "Login successfully" });
    
    
  }

  logout(req, res, next) {
    if (req.session) {
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          res.clearCookie("token");
          res.clearCookie("connect.sid");
          return res.redirect("/signin");
        }
      });
    }
  }
}

module.exports = new FrontendController();

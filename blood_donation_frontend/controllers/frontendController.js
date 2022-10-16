const { storeToken } = require("../utils/session");

class FrontendController {
  async getUsers(req, res, next) {
    res.render("pages/users/index", {
      pageTitle: 'REDFLOW signUp'
    });
  }

  async signin(req, res, next) {
    res.render("pages/auth/index", {
      pageTitle: 'REDFLOW LogIn'
    });
  }

  async home(req, res, next) {
    res.render("pages/users/home", {
      pageTitle: 'REDFLOW Home'
    });
  }

  async profile(req, res, next) {
    res.render("pages/users/profile", {
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


  async chooseBy(req, res, next) {
    res.render("pages/bloodCollect/chooseBy", {
      pageTitle: 'REDFLOW'
    });
  }
  async byRequest(req, res, next) {
    res.render("pages/bloodCollect/byRequest", {
      pageTitle: 'REDFLOW'
    });
  }
  async byUs(req, res, next) {
    res.render("pages/bloodCollect/byUs", {
      pageTitle: 'REDFLOW'
    });
  }
  async enterLocation(req, res, next) {
    res.render("pages/bloodCollect/enterLocation", {
      pageTitle: 'REDFLOW'
    });
  }


  async loginDataStore(req, res, next) {
    let userToken = req.body.token.split(".")[1];
    let buff = new Buffer.from(userToken, "base64");
    let user = JSON.parse(buff.toString("ascii"));
    let role = user.roles.find((role) => role.name == "Donor");
    if (!role) {
      return res
        .status(401)
        .json({ isLoggedIn: false, message: "You have no permission" });
    }

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

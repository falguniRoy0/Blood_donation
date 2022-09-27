const { storeToken } = require("../utils/session");

class FrontendController {
  async getUsers(req, res, next) {
    res.render("pages/users/index");
  }

  async signin(req, res, next) {
    res.render("pages/auth/index");
  }

  async home(req, res, next) {
    res.render("pages/users/home");
  }

  async profile(req, res, next) {
    res.render("pages/users/profile");
  }

  async donorList(req, res, next) {
    res.render("pages/users/donor-list");
  }

  async loginDataStore(req, res, next) {
    let userToken = req.body.token.split(".")[1];
    let buff = new Buffer.from(userToken, "base64");
    let user = JSON.parse(buff.toString("ascii"));
    if (user.usertype!="Admin" && 
        user.usertype!="Donor" && 
        user.usertype!="Recipient" && 
        user.usertype!="Moderator" && 
        user.usertype!="Volunteer" ) {
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

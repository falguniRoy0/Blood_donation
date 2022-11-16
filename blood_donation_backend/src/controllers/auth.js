const authService = require('../services/auth');
const mailer = require("../utils/mailer");


class AuthController {
 async create(req, res, next) {
    let payload = req.body;
    let user = await authService.save(payload);
    if( !user ) {
      throw new Error('something wrong!!');
    }
     mailer.sendMail({
      from: "flowred70@gmail.com",
      to: payload.email,
      subject: "WELLCOME to REDFLOW!!",
      template: {
        name: "EmailConfirmation.html",
        data: {
          name: payload.name,
          usertype: payload.usertype,
          company: "REDFLOW"
        }
      }
    });
    // res.send("Send HTML file successfully");
    return user;
  }

  

  async login(req, res, next) {
    let payload = req.body;
    return authService.login(payload);
  }


  // async forgotPass(req, res, next) {
  //   let payload = req.body;
  //   return authService.forgotPass(payload);
  // }
}

module.exports = new AuthController();

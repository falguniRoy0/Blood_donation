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
      subject: "Nodemailer Demo",
      template: {
        name: "EmailConfirmation.html",
        data: {
          first_name: "Falguni",
          last_name: "Roy",
          gender: "Female",
          company: "RedFlow"
        }
      }
    });
  
    res.send("Send HTML file successfully");
    return user;
  }

  

  async login(req, res, next) {
    let payload = req.body;
    return authService.login(payload);
  }
}

module.exports = new AuthController();

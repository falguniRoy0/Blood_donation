require('dotenv').config();
const status = require('http-status');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  NotFound,
  BadRequestErr,
  Unauthorized
} = require('../responses/errors');
const User = require('../models').User;
const generatePassword = require('../utils/generatePassword');
const mailer = require('../utils/mailer');

class AuthService {
  async save(payload) {
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(payload.password, salt);
    payload.password = hash;
    return User.create(payload);
  }

  async login(payload) {
    const { email, password } = payload;
    const isEmailExit = await User.findOne({
      where: {
        email
      }
    });
    // console.log(isEmailExit)
    if (!isEmailExit) {
      return {
        message: status['404_MESSAGE']
      };
    }
    const compare = await bcrypt.compare(password, isEmailExit.password);
    // console.log(compare);

    if (!compare) {
      // authentication failed
      //  throw new Unauthorized(status['401_MESSAGE']);
      return {
        message: status['401_MESSAGE']
      };
    }
    // const { id } = isEmailExit;

    const token = jwt.sign(
      JSON.parse(JSON.stringify(isEmailExit)),
      process.env.APP_SECRET
    );
    return { token };
  }

  async forgotPass({ email }) {
    let salt = await bcrypt.genSalt(10);
    let password = generatePassword();
    let hp = await bcrypt.hash(password, salt);

    let user = await User.findOne({
      where: {
        email
      }
    });

    if (!user) {
      throw new Error('User not found.');
    }

    await user.update({
      password: hp,
      confirmpassword: password
    });
    await mailer.sendMail({
      from: 'flowred70@gmail.com',
      to: email,
      subject: '[RedFlow] Reset Password',
      template: {
        name: 'ResetPassword.html',
        data: {
          Password: password
        }
      }
    });
    return { password };
  }
}

module.exports = new AuthService();

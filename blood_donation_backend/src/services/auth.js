require('dotenv').config();
const nodemailer = require('nodemailer');
const status = require('http-status');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  NotFound,
  BadRequestErr,
  Unauthorized
} = require('../responses/errors');
const User = require('../models').User;

class AuthService {
  async save(payload) {
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(payload.password, salt);
    payload.password = hash;
    const { email } = payload;
    const isEmailExit = await User.findOne({
      where: {
        email
      }
    });
    if (isEmailExit) {
      throw new BadRequestErr('Email already taken.');
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'flowred70@gmail.com',
        password: 'redfloworganization70'
      }
    });

    const mailOptions = {
      from: 'flowred70@gmail.com',
      to: 'falguniroy7890@gmail.com',
      subject: 'Registration Successfully',
      plaintext: 'Hi Falguni' 
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error) {
        console.log(error);
      } else {
        console.log('Email sent:' + info.response);
      }
    });
    return User.create(payload);
  }
  

  async login(payload) {
    const { email, password } = payload;
    const isEmailExit = await User.findOne({
      where: {
        email
      },
      include: { association: 'roles' }
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
}

module.exports = new AuthService();

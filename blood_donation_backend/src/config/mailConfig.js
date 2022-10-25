"use strict";

module.exports = {
  config: {
    pool: true,
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    service: "Gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS 
    }
  }
};

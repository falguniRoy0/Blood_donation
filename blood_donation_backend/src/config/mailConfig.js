"use strict";

module.exports = {
  config: {
    pool: true,
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    service: "Gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD 
    }
  }
};

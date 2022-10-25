"use strict";

const path = require("path");
const nodemailer = require("nodemailer");

const { config } = require("../config/mailConfig");
const template = require("./template");

class Mailer {
  constructor() {
    this.template = template;
    this.transport = nodemailer.createTransport(config);
  }

  async sendMail(message) {
    // check template property in message object
    if (message.template) {
      let template = message.template; // EmailConfirmation.html
      let extension = path.extname(template.name); // .html

      // check the template file extension
      if ([".html", ".txt"].includes(extension)) {
        let type = extension === ".html" ? "html" : "text";
        message[type] = await this.render(template.name, template.data);
      } else {
        [message.html, message.text] = await Promise.all([
          this.render(`${template.name}.html`, template.data),
          this.render(`${template.name}.txt`, template.data)
        ]);
      }
      delete message.template;
    }
    return this.transport.sendMail(message);
  }

  render(template_file, data) {
    let template_path = path.resolve(__dirname, "..", "assets", template_file);
    return this.template.render(template_path, data);
  }
}

module.exports = new Mailer();

/**
 * message: {
 *  to:'',
 *  from: '',
 *  template: {
 *    name: 'EmailConfirmation.html'
 *    data: {
 *      name:'',
 *      age: ''
 *    }
 *  }
 * }
 */
